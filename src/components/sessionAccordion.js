import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";
import Modal from "react-bootstrap/Modal";
import SessionBuilder from "./sessionBuilder";
// user={this.props.user} - Recommended props
// membership={this.props.membership}
// mode={"user"}
const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const errMsgPermissions =
	"Unfortunately you don't have the required permissions to view this data";
class SessionAccordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allSessions: null,
			eligibleToBook: false,
			allUsers: null,
			updateModal: null,
			deleteModal: null,
		};
		this.handleError = this.handleError.bind(this);
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
		let sessions = firebase
			.database()
			.ref("pages/sign-up/sessions")
			.once("value")
			.then((snapshot) =>
				this.setState({
					allSessions: snapshot.val(),
					sessionKeys: Object.keys(snapshot.val()),
				})
			)
			.then(() => this.checkMembership())
			.catch((error) => this.handleError(error));
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
			.catch((error) => this.handleError(error));
	}
	checkMembership() {
		let count = 0;
		let uid = this.props.user.uid;
		this.state.sessionKeys.filter((value, index, array) => {
			//console.log(this.state.allSessions[value]);
			if (eval(`this.state.allSessions[value]?.attendees?.${uid}`)) {
				count++;
			}
		});
		if (count === 0 || this.props.membership) {
			this.setState({
				count,
			});
		}
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
			.catch((error) => this.handleError(error));
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
			.catch((error) => this.handleError(error));
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
			.catch((error) => this.handleError(error));
	}
	handleError(error) {
		let errorCode = error.code;
		let errorMessage = error.message;
		switch (errorCode) {
			case "PERMISSION_DENIED":
				this.setState({
					errorMessage: errMsgPermissions,
				});
				break;
			default:
				this.setState({
					errorMessage: errMsgUnknown,
				});
				console.error(
					"Code: " + errorCode + "\nMessage: " + errorMessage
				);
				break;
		}
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
	BookCancelButton = (sessionKey) => {
		return (
			<div>
				{eval(`this.state.allSessions[sessionKey]
					?.attendees?.${this.props.user.uid}`) ? (
					<button onClick={() => this.cancelBooking(sessionKey)}>
						Cancel Booking
					</button> //TODO: ONLY ALLOW CHANGES TO SESSIONS IN THE FUTURE IN RULES
				) : (
					<button onClick={() => this.bookSession(sessionKey)}>
						Book
					</button>
				)}
			</div>
		);
	};
	DisplayMembers = (sessionKey) => {
		let attendees = this.state.allSessions[sessionKey]?.attendees;
		if (attendees) {
			let uids = Object.keys(attendees);
			return (
				<div className="sub-accordion">
					{uids.map((uid) => {
						if (eval(`this.state.allUsers?.${uid}`)) {
							let user = eval(`this.state.allUsers.${uid}`);
							return (
								<div key={uid}>
									<ul>
										<li>{user.info.public.name}</li>
										<li>
											{user.info.public.studentNumber}
										</li>
										{/* <li>
											{user.info?.private?.membership
												? "Has purchased Sports Swansea Membership"
												: "Hasn't purchased Sports Swansea Membership"}
										</li> */}
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
						<button
							class="submit"
							onClick={() => this.cancelDelete()}
						>
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
		//TODO: Only show sessions that users without membership can book onto
		return (
			<div>
				<p>{this.state.errorMessage}</p>
				{this.state.allSessions
					? this.state.sessionKeys.map((sessionKey) => {
							let session = this.state.allSessions[sessionKey];
							if (
								this.props.membership ||
								(session.members === "trial" &&
									this.state.count === 0) ||
								session.members === "open" ||
								eval(
									`this.state.allSessions[sessionKey]?.attendees?.${this.props.user.uid}`
								) ||
								this.props.mode === "admin"
							) {
								return (
									<div key={sessionKey}>
										<button
											className="accordion"
											onClick={() =>
												this.toggleAccordion(sessionKey)
											}
										>
											{session.name +
												" " +
												session.startTime}
										</button>
										<div
											className="accordion-panel"
											style={{
												display:
													this.state.openAccordion ===
													sessionKey
														? "block"
														: "none",
											}}
										>
											<p>{session.description}</p>
											<p>{session.startTime}</p>
											<p>{session.endTime}</p>
											<p>
												Is the session open to everyone:{" "}
												{session.members}
											</p>
											{this.props.mode === "admin"
												? this.DisplayMembers(
														sessionKey
												  )
												: this.BookCancelButton(
														sessionKey
												  )}
											{this.props.mode === "admin"
												? this.AdminOptions(
														sessionKey,
														session
												  )
												: null}
										</div>
									</div>
								);
							} else {
								return null;
							}
					  })
					: null}
			</div>
		);
	}
}

export default SessionAccordion;
