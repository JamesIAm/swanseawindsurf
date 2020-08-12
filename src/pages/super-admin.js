import React from "react";

import UserAccordion from "../components/userAccordion";
//TODO: delete functions
import { Redirect } from "react-router-dom";
import SessionCreator from "../components/sessionCreator.js";

class SuperAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: null,
		};
	}
	componentDidMount() {
		// if (this.props.user) {
		// 	let uid = this.props.user.uid;
		// 	if (!this.state.allUsers) {
		// 		this.getUsers();
		// let userPermissions = firebase
		// 	.database()
		// 	.ref(`users/${uid}/role`)
		// 	.once("value")
		// 	.then(function (snapshot) {
		// 		console.log(snapshot.val());
		// 	})
		// 	.catch((error) => this.handleError(error));
		// 	}
		// }
	}
	componentDidUpdate() {
		// if (this.props.user) {
		// 	if (!this.state.allUsers && !this.state.errorMessage) {
		// 		this.getUsers();
		// 	}
		// }
	}
	render() {
		if (this.state.redirect) {
			return <Redirect push to="/my-account" />;
		}
		return (
			<div className="article">
				<UserAccordion user={this.props.user} />
				<SessionCreator />
			</div>
		);
	}
}

export default SuperAdmin;
