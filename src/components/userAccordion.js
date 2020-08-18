import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";
import "../static/accordion.css";
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
			openAccordion: null,
		};
		this.handleError = this.handleError.bind(this);
		this.makeSuperAdmin = this.makeSuperAdmin.bind(this);
		this.makeAdmin = this.makeAdmin.bind(this);
		this.makeUser = this.makeUser.bind(this);
		this.addMembership = this.addMembership.bind(this);
		this.denyRequest = this.denyRequest.bind(this);
		this.revokeMembership = this.revokeMembership.bind(this);
		this.toggleAccordion = this.toggleAccordion.bind(this);
	}
	componentDidMount() {
		if (this.props.user) {
			if (!this.state.allUsers) {
				this.getUsers();
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
	async addMembership(uid, user) {
		await firebase
			.database()
			.ref(`users/${uid}/info/private/membership`)
			.set(true);
		if (user.info?.public?.requested) {
			await firebase
				.database()
				.ref(`users/${uid}/info/public/requested`)
				.remove();
		}
		this.getUsers();
	}
	async denyRequest(uid, user) {
		if (user.info?.public?.requested !== null) {
			await firebase
				.database()
				.ref(`users/${uid}/info/public/requested`)
				.remove();
		}
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
	toggleAccordion(userKey) {
		if (this.state.openAccordion === userKey) {
			this.setState({
				openAccordion: null,
			});
		} else {
			this.setState({
				openAccordion: userKey,
			});
		}
	}
	adminButtons = (user, userKey) => {
		return (
			<div className="Admin-Buttons">
				<div className="addMembership">
					{user.info.private?.membership ? (
						<button onClick={() => this.revokeMembership(userKey)}>
							Remove membership
						</button>
					) : (
						<button
							onClick={() => this.addMembership(userKey, user)}
						>
							Add membership
						</button>
					)}
					{user.info?.public?.requested ? (
						<button onClick={() => this.denyRequest(userKey, user)}>
							Deny request
						</button>
					) : null}
				</div>
			</div>
		);
	};
	superAdminButtons = (user, userKey) => {
		return (
			<div className="Super-Admin-Buttons">
				<div className="superAdminButton">
					{user.role === "superAdmin" ? null : (
						<button onClick={() => this.makeSuperAdmin(userKey)}>
							Make superAdmin
						</button>
					)}
				</div>
				<div className="adminButton">
					{user.role === "admin" ? null : (
						<button onClick={() => this.makeAdmin(userKey)}>
							Make admin
						</button>
					)}
				</div>
				<div className="userButton">
					{user.role === "user" ? null : (
						<button onClick={() => this.makeUser(userKey)}>
							Make user
						</button>
					)}
				</div>
			</div>
		);
	};
	render() {
		return (
			<div>
				<p>{this.state.errorMessage}</p>
				{this.state.allUsers
					? this.state.userKeys.map((userKey) => {
							let user = this.state.allUsers[userKey];
							if (user.info?.public) {
								return (
									<div key={userKey}>
										<button
											className="accordion"
											onClick={() =>
												this.toggleAccordion(userKey)
											}
											style={
												user.info.public.requested
													? {
															backgroundColor:
																"maroon",
													  }
													: null
											}
										>
											{user.info.public.name}
										</button>
										<div
											className="accordion-panel"
											style={{
												display:
													this.state.openAccordion ===
													userKey
														? "block"
														: "none",
											}}
										>
											<p>Role: {user.role || "user"}</p>
											<p>
												Student Number:{" "}
												{user.info.public.studentNumber}
											</p>
											<p>Uid: {userKey}</p>
											<p>
												Membership Status:{" "}
												{user?.info?.public?.requested
													? "requested"
													: user.info?.private
															?.membership
													? "true"
													: "false"}
											</p>

											{this.adminButtons(user, userKey)}
											{this.props.permissions ===
											"superAdmin"
												? this.superAdminButtons(
														user,
														userKey
												  )
												: null}
										</div>
									</div>
								);
							} else {
								console.log(
									userKey +
										": has been deleted, and needs to be removed from the db"
								);
							}
					  })
					: null}
			</div>
		);
	}
}

export default UserAccordion;
