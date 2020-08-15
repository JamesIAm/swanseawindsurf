import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";

const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const errMsgPermissions =
	"Unfortunately you don't have the required permissions to view this data";
class SessionAccordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allSessions: null,
		};
		this.handleError = this.handleError.bind(this);
		this.bookSession = this.bookSession.bind(this);
		this.cancelBooking = this.cancelBooking.bind(this);
	}
	componentDidMount() {
		if (this.props.user) {
			if (!this.state.allSessions) {
				this.getSessions();
			}
		}
	}
	componentDidUpdate() {
		if (this.props.user) {
			if (!this.state.allSessions && !this.state.errorMessage) {
				this.getSessions();
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
			.catch((error) => this.handleError(error));
	}
	bookSession(sessionId) {
		firebase
			.database()
			.ref(
				`pages/sign-up/sessions/${sessionId}/attendees/${this.props.user.uid}`
			)
			.set(true)
			.catch((error) => this.handleError(error));
		this.getSessions();
	}
	cancelBooking(sessionId) {
		firebase
			.database()
			.ref(
				`pages/sign-up/sessions/${sessionId}/attendees/${this.props.user.uid}`
			)
			.remove()
			.catch((error) => this.handleError(error));
		this.getSessions();
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
	render() {
		return (
			<div>
				<p>{this.state.errorMessage}</p>
				{this.state.allSessions
					? this.state.sessionKeys.map((sessionKey) => {
							let session = this.state.allSessions[sessionKey];
							return (
								<div key={sessionKey}>
									<h3>{session.name}</h3>
									<p>{session.description}</p>
									<p>{session.startTime}</p>
									<p>{session.endTime}</p>
									<button
										onClick={() =>
											this.bookSession(sessionKey)
										}
									>
										Book
									</button>
									<button
										onClick={() =>
											this.cancelBooking(sessionKey)
										}
									>
										Cancel Booking
									</button>
								</div>
							);
					  })
					: null}
			</div>
		);
	}
}

export default SessionAccordion;
