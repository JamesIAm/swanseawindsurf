import React from "react";
import { Redirect } from "react-router-dom";

import UserAccordion from "../components/userAccordion";
import SessionBuilder from "../components/sessionBuilder";
import SessionAccordion from "../components/sessionAccordion";

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
		} else {
			return (
				<div className="article">
					<h2>Create a session</h2>
					<SessionBuilder />
					<h2>Users</h2>
					<UserAccordion
						user={this.props.user}
						permissions={this.props.permissions}
					/>
					<h2>Sessions</h2>
					<SessionAccordion
						user={this.props.user}
						permissions={this.props.permissions}
						mode={"admin"}
					/>
				</div>
			);
		}
	}
}

export default SuperAdmin;
