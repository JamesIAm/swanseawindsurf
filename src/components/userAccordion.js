import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";

const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const errMsgPermissions =
	"Unfortunately you don't have the required permissions to view this data";
class UserAccordion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allUsers: null,
			updatePage: null,
			userKeys: null,
			errorMessage: null,
		};
		this.handleError = this.handleError.bind(this);
		this.makeSuperAdmin = this.makeSuperAdmin.bind(this);
		this.makeAdmin = this.makeAdmin.bind(this);
		this.makeUser = this.makeUser.bind(this);
		this.addMembership = this.addMembership.bind(this);
		this.revokeMembership = this.revokeMembership.bind(this);
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
		firebase
			.database()
			.ref(`users/${uid}/role`)
			.set("superAdmin")
			.catch((error) => this.handleError(error));
		this.getUsers();
	}
	makeAdmin(uid) {
		firebase
			.database()
			.ref(`users/${uid}/role`)
			.set("admin")
			.catch((error) => this.handleError(error));
		this.getUsers();
	}
	makeUser(uid) {
		firebase
			.database()
			.ref(`users/${uid}/role`)
			.set("user")
			.catch((error) => this.handleError(error));
		this.getUsers();
	}
	addMembership(uid) {
		firebase
			.database()
			.ref(`users/${uid}/info/private/membership`)
			.set(true);
		this.getUsers();
	}
	revokeMembership(uid) {
		firebase
			.database()
			.ref(`users/${uid}/info/private/membership`)
			.set(false)
			.catch((error) => this.handleError(error));
		this.getUsers();
	}
	getUsers() {
		let users = firebase
			.database()
			.ref("users")
			.once("value")
			.then((snapshot) =>
				this.setState({
					allUsers: snapshot.val(),
					userKeys: Object.keys(snapshot.val()),
				})
			)
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
	render() {
		return (
			<div>
				<p>{this.state.errorMessage}</p>
				{this.state.allUsers
					? this.state.userKeys.map((userKey) => {
							let user = this.state.allUsers[userKey];
							return (
								<div key={userKey}>
									<h3>{user.info.public.name}</h3>
									<p>Role: {user.role || "user"}</p>
									<p>
										Student Number:{" "}
										{user.info.public.studentNumber}
									</p>
									<p>Uid: {userKey}</p>
									<p>
										Membership Status:{" "}
										{user.info.private
											? user.info.private.membership
												? "true"
												: "false"
											: "false"}
									</p>
									<div className="Admin-Buttons">
										<div className="addMembership">
											{user.info.private ? (
												user.info.private.membership ? (
													<button
														onClick={() =>
															this.revokeMembership(
																userKey
															)
														}
													>
														Remove membership
													</button>
												) : (
													<button
														onClick={() =>
															this.addMembership(
																userKey
															)
														}
													>
														Add membership
													</button>
												)
											) : (
												<button
													onClick={() =>
														this.addMembership(
															userKey
														)
													}
												>
													Add membership
												</button>
											)}
										</div>
									</div>
									{this.props.userPermissions ===
									"superAdmin" ? (
										<div class="Super-Admin-Buttons">
											<div className="superAdminButton">
												{user.role ===
												"superAdmin" ? null : (
													<button
														onClick={() =>
															this.makeSuperAdmin(
																userKey
															)
														}
													>
														Make superAdmin
													</button>
												)}
											</div>
											<div className="adminButton">
												{user.role ===
												"admin" ? null : (
													<button
														onClick={() =>
															this.makeAdmin(
																userKey
															)
														}
													>
														Make admin
													</button>
												)}
											</div>
											<div className="userButton">
												{user.role === "user" ? null : (
													<button
														onClick={() =>
															this.makeUser(
																userKey
															)
														}
													>
														Make user
													</button>
												)}
											</div>
										</div>
									) : null}
								</div>
							);
					  })
					: null}
			</div>
		);
	}
}

export default UserAccordion;
