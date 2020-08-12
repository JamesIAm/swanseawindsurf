import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";
class SessionModifier extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		let sessions = firebase
			.database()
			.ref("pages/sign-up/sessions")
			.once("value")
			.then((snapshot) => this.saveSessions(snapshot.val()))
			.catch((error) => this.handleError(error));
	}
	saveSessions(sessions) {
		let userArray = Object.keys(users);
	}
	render() {
		return (
			<div>
				<div>{this.state.successMessage}</div>
			</div>
		);
	}
}

export default SessionModifier;
