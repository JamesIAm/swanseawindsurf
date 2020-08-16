import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";
//TODO: Add admin version
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
		};
		this.handleError = this.handleError.bind(this);
		this.bookSession = this.bookSession.bind(this);
		this.cancelBooking = this.cancelBooking.bind(this);
		this.checkMembership = this.checkMembership.bind(this);
		this.getUsers = this.getUsers.bind(this);
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
		let attendees = this.state.allSessions[sessionKey].attendees;
		let uids = Object.keys(attendees);
		return (
			<div>
				{uids.map((uid) => {
					if (eval(`this.state.allUsers?.${uid}`)) {
						let user = eval(`this.state.allUsers.${uid}`);
						return (
							<div key={uid}>
								<p>{user.info.public.name}</p>
								<p>{user.info.public.studentNumber}</p>
								<p>
									{user.info.private.membership
										? "Has purchased Sports Swansea Membership"
										: "Hasn't purchased Sports Swansea Membership"}
								</p>
							</div>
						);
					}
				})}
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
								)
							) {
								return (
									<div key={sessionKey}>
										<h3>{session.name}</h3>
										<p>{session.description}</p>
										<p>{session.startTime}</p>
										<p>{session.endTime}</p>
										<p>
											Is the session open to everyone:{" "}
											{session.members}
										</p>
										{this.props.mode === "admin"
											? this.DisplayMembers(sessionKey)
											: this.BookCancelButton(sessionKey)}
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
