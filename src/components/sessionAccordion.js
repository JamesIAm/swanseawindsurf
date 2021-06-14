import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import SessionBuilder from "./sessionBuilder";
import moment from "moment";
import "../static/accordion.css";
import { handleError } from "../functions/handleError";
// user={this.props.user} - Recommended props
// membership={this.props.membership}
// mode={"user"}
const cutOffHour = 12;
class SessionAccordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allSessions: null,
			allUsers: null,
			updateModal: null,
			deleteModal: null,
			count: null,
		};
		this.bookSession = this.bookSession.bind(this);
		this.cancelBooking = this.cancelBooking.bind(this);
		this.checkMembership = this.checkMembership.bind(this);
		this.getUsers = this.getUsers.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.deleteConfirmation = this.deleteConfirmation.bind(this);
		this.cancelDelete = this.cancelDelete.bind(this);
		this.deleteSession = this.deleteSession.bind(this);
	}
	componentDidMount() {
		if (this.props.user) {
			if (!this.state.allSessions) {
				this.getSessions();
			}
			if (this.props.mode === "admin") {
				this.getUsers();
			}
		}
	}
	componentDidUpdate() {
		if (this.props.user) {
			if (!this.state.allSessions && !this.state.errorMessage) {
				this.getSessions();
			}
			if (this.props.mode === "admin" && !this.state.allUsers) {
				this.getUsers();
			}
		}
	}
	getSessions() {
		firebase
			.database()
			.ref("pages/sign-up/sessions")
			.once("value")
			.then((snapshot) =>
				this.setState(
					{
						allSessions: snapshot.val(),
					},
					() => {
						this.setState(
							{
								sessionKeys: Object.keys(snapshot.val()).sort(
									(sessionKeyA, sessionKeyB) => {
										return (
											new Date(this.state.allSessions[sessionKeyA].startTime) -
											new Date(this.state.allSessions[sessionKeyB].startTime)
										);
									}
								),
							},
							() => {
								this.checkMembership();
							}
						);
					}
				)
			)
			.catch((error) => handleError(error));
	}
	getUsers() {
		let users = firebase
			.database()
			.ref("users")
			.once("value")
			.then((snapshot) =>
				this.setState({
					allUsers: snapshot.val(),
				})
			)
			.catch((error) => handleError(error));
	}
	checkMembership() {
		let count = 0;
		let uid = this.props.user.uid;
		this.state?.sessionKeys.map((sessionKey) => {
			//console.log(this.state.allSessions[value]);
			if (this.state?.allSessions[sessionKey]?.attendees) {
				if (
					Object.keys(this.state?.allSessions[sessionKey]?.attendees).includes(
						uid
					)
				) {
					count++;
				}
			}
		});

		this.setState({
			count,
		});
	}
	bookSession(sessionId) {
		firebase
			.database()
			.ref(
				`pages/sign-up/sessions/${sessionId}/attendees/${this.props.user.uid}`
			)
			.set(true)
			.then(() => this.getSessions())
			.then(() => this.setState({ count: this.state.count + 1 }))
			.catch((error) => handleError(error));
	}
	cancelBooking(sessionId) {
		firebase
			.database()
			.ref(
				`pages/sign-up/sessions/${sessionId}/attendees/${this.props.user.uid}`
			)
			.remove()
			.then(() => this.getSessions())
			.then(() => this.setState({ count: this.state.count - 1 }))
			.catch((error) => handleError(error));
	}
	openModal(event) {
		this.setState({
			updateModal: event.target.id,
		});
	}
	closeModal(event) {
		this.setState({
			updateModal: null,
		});
		this.getSessions();
	}
	deleteConfirmation(event) {
		this.setState({
			deleteModal: event.target.id,
		});
	}
	cancelDelete() {
		this.setState({
			deleteModal: null,
		});
	}
	deleteSession(sessionKey) {
		firebase
			.database()
			.ref(`/pages/sign-up/sessions/${sessionKey}`)
			.remove()
			.then(() => this.cancelDelete())
			.then(() => this.getSessions())
			.catch((error) => handleError(error));
	}
	toggleAccordion(sessionKey) {
		if (this.state.openAccordion === sessionKey) {
			this.setState({
				openAccordion: null,
			});
		} else {
			this.setState({
				openAccordion: sessionKey,
			});
		}
	}
	BookCancelButton = (session, sessionKey, startDate, placesLeft) => {
		return (
			<div>
				{this.state.allSessions[sessionKey]?.attendees?.[this.props.user.uid] &&
				startDate > Date.now() ? (
					<button onClick={() => this.cancelBooking(sessionKey)}>
						Cancel Booking
					</button> //TODO: ONLY ALLOW CHANGES TO SESSIONS IN THE FUTURE IN RULES
				) : (this.props.membership ||
						(session.members === "trial" && this.state.count === 0) ||
						session.members === "open") &&
				  startDate > Date.now() + 3600000 * cutOffHour &&
				  placesLeft > 0 ? (
					<button onClick={() => this.bookSession(sessionKey)}>Book</button>
				) : null}
			</div>
		);
	};
	DisplayMembers = (sessionKey) => {
		let attendees = this.state.allSessions[sessionKey]?.attendees;
		if (attendees) {
			let uids = Object.keys(attendees);
			return (
				<div className="accordion-row">
					{uids.map((uid) => {
						if (Object.keys(this.state?.allUsers).includes(uid)) {
							let user = this.state.allUsers[uid];
							return (
								<div key={uid}>
									<ul>
										<li>{user.info.public.name}</li>
										<li>{user.info.public.studentNumber}</li>
										{
											<li>
												{user.info?.private?.membership
													? "Member"
													: "Non-Member"}
											</li>
										}
									</ul>
								</div>
							);
						}
					})}
				</div>
			);
		}
	};
	AdminOptions = (sessionKey, session) => {
		return (
			<div>
				<Modal
					show={this.state.updateModal === sessionKey}
					onHide={this.closeModal}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>Update Session</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<SessionBuilder
							session={session}
							sessionKey={sessionKey}
							update={true}
							closeModal={this.closeModal}
						/>
					</Modal.Body>
				</Modal>
				<button id={sessionKey} onClick={this.openModal}>
					Update Session
				</button>
				<Modal
					show={this.state.deleteModal === sessionKey}
					onHide={this.cancelDelete}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>
							Are you sure you want to delete this session
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<button
							class="submit"
							onClick={() => this.deleteSession(sessionKey)}
						>
							Yes
						</button>
						<button class="submit" onClick={() => this.cancelDelete()}>
							No
						</button>
					</Modal.Body>
				</Modal>
				<button id={sessionKey} onClick={this.deleteConfirmation}>
					Delete Session
				</button>
			</div>
		);
	};
	render() {
		return (
			<div>
				<p>{this.state.errorMessage}</p>
				{this.state.count > 0 &&
				!this.props.membership &&
				this.props.mode !== "admin" ? (
					<p>
						You will need to purchase Windsurfing membership on the{" "}
						<a href="https://www.swansea-union.co.uk/activities/club/windsurfing/">
							Swansea Union Website
						</a>{" "}
						to continue booking sessions. If you have already done this, you can
						request that we update your status in{" "}
						<Link to="/my-account">My Account</Link>
					</p>
				) : null}
				{this.state.sessionKeys
					? this.state.sessionKeys.map((sessionKey) => {
							let session = this.state.allSessions[sessionKey];
							let startDate = new Date(session.startTime);
							let placesLeft = session.placeLimit;
							if (session.attendees) {
								placesLeft -= Object.values(session.attendees).filter(
									(attendee) => attendee === true
								).length;
							}
							if (
								startDate > Date.now() ||
								this.state.allSessions[sessionKey]?.attendees?.[
									this.props.user.uid
								]
							) {
								return (
									<div key={sessionKey}>
										<button
											className={
												this.state.allSessions[sessionKey]?.attendees?.[
													this.props.user.uid
												]
													? "accordion booked"
													: "accordion"
											}
											onClick={() => this.toggleAccordion(sessionKey)}
										>
											<div className="accordion-row">
												<ul>
													<li>{session.name}</li>
													<li>
														{moment(session.startTime).format("DD-MM-YYYY")}
													</li>
													<li>{placesLeft + " Places left"}</li>
												</ul>
											</div>
										</button>
										<div
											className="accordion-panel"
											style={{
												display:
													this.state.openAccordion === sessionKey
														? "block"
														: "none",
											}}
										>
											<p>{session.description}</p>
											<p>
												Starts:{" "}
												{moment(session.startTime).format(
													"dddd, MMMM Do YYYY, hh:mm a"
												)}
											</p>
											<p>
												Ends:{" "}
												{moment(session.endTime).format(
													"dddd, MMMM Do YYYY, hh:mm a"
												)}
											</p>
											<p>Is the session open to everyone: {session.members}</p>
											{this.state.count >= 0 && //TODO: Link to instructions to email us to get membership approved
											!this.props.membership &&
											this.props.mode !== "admin" ? (
												<p>
													You will need to purchase membership to continue
													booking sessions
												</p>
											) : null}
											{this.props.mode === "admin"
												? this.DisplayMembers(sessionKey)
												: this.BookCancelButton(
														session,
														sessionKey,
														startDate,
														placesLeft
												  )}
											{this.props.mode === "admin"
												? this.AdminOptions(sessionKey, session)
												: null}
										</div>
									</div>
								);
							}
					  })
					: null}
			</div>
		);
	}
}

export default SessionAccordion;
