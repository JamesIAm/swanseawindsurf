import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";
import UserAccordion from "../components/userAccordion";
//TODO: delete functions
import { Redirect } from "react-router-dom";
import SessionCreator from "../components/sessionCreator.js";

const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const errMsgPermissions =
	"Unfortunately you don't have the required permissions to view this data";
class SuperAdmin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			updatePage: null,
			userKeys: null,
			userRoles: null,
			errorMessage: null,
		};
		this.handleError = this.handleError.bind(this);
		this.makeSuperAdmin = this.makeSuperAdmin.bind(this);
		this.makeAdmin = this.makeAdmin.bind(this);
		this.makeUser = this.makeUser.bind(this);
		this.saveUsers = this.saveUsers.bind(this);
	}
	componentDidMount() {
		if (this.props.user) {
			let uid = this.props.user.uid;
			if (!this.state.allUsers) {
				this.getUsers();
				// let userPermissions = firebase
				// 	.database()
				// 	.ref(`users/${uid}/role`)
				// 	.once("value")
				// 	.then(function (snapshot) {
				// 		console.log(snapshot.val());
				// 	})
				// 	.catch((error) => this.handleError(error));
			}
		}
	}
	componentDidUpdate() {
		if (this.props.user) {
			if (!this.state.allUsers && !this.state.errorMessage) {
				this.getUsers();
			}
		}
	}
	makeSuperAdmin(uid) {
		firebase.database().ref(`users/${uid}/role`).set("superAdmin");
		this.getUsers();
	}
	makeAdmin(uid) {
		firebase.database().ref(`users/${uid}/role`).set("admin");
		this.getUsers();
	}
	makeUser(uid) {
		firebase.database().ref(`users/${uid}/role`).set("user");
		this.getUsers();
	}
	getUsers() {
		let users = firebase
			.database()
			.ref("users")
			.once("value")
			.then((snapshot) => this.saveUsers(snapshot.val()))
			.catch((error) => this.handleError(error));
	}
	saveUsers(users) {
		let userArray = Object.keys(users);
		this.setState({
			userKeys: userArray,
			allUsers: users,
		});
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
		if (this.state.redirect) {
			return <Redirect push to="/my-account" />;
		}
		return (
			<div className="article">
				<p>{this.state.errorMessage}</p>
				{this.state.allUsers
					? this.state.userKeys.map((userKey) => {
							return (
								<UserAccordion
									user={this.state.allUsers[userKey]}
									uid={userKey}
									key={userKey}
									makeSuperAdmin={this.makeSuperAdmin}
									makeAdmin={this.makeAdmin}
									makeUser={this.makeUser}
								/>
							);
					  })
					: null}
				<SessionCreator />
			</div>
		);
	}
}

export default SuperAdmin;
