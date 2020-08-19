import React from "react";
import firebase, { auth, provider } from "./firebase.js";
import Modal from "react-bootstrap/Modal";

import constitution from "../files/constitution.pdf";
import privacyPolicy from "../files/suwc_privacy_policy.pdf";

const errMsgLoggedIn = "You are already logged in";
const errMsgEmailInUse =
	"That email address is already in use, please log in or try a different email address";
const errMsgInvalidEmail =
	"That is not a valid email address, please try again";
const errMsgWeakPassword =
	"Your password is not secure enough, please make sure it is at least 6 characters long";
const errMsgWrongPassword =
	"The current password you entered is incorrect. Therefore any changes to the email or password will not have saved";
const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const succMsgCreated = "Account successfully created";
class AccountBuilder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput: this.props?.userData?.public?.name || "",
			studentNumberInput:
				this.props?.userData?.public?.studentNumber || "",
			emailInput: this.props?.user?.email || "",
			passwordInput: "",
			newPasswordInput: "",
			errorMessage: "",
			successMessage: "",
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleStudentNumberChange = this.handleStudentNumberChange.bind(
			this
		);
		this.handleCreateAccount = this.handleCreateAccount.bind(this);
		this.handleUpdateAccount = this.handleUpdateAccount.bind(this);
		this.handleError = this.handleError.bind(this);
		this.addUserDetails = this.addUserDetails.bind(this);
	}
	handleNameChange(event) {
		this.setState({ nameInput: event.target.value });
	}
	handleStudentNumberChange(event) {
		this.setState({ studentNumberInput: event.target.value });
	}
	handleEmailChange(event) {
		this.setState({ emailInput: event.target.value });
	}
	handlePasswordChange(event) {
		this.setState({ passwordInput: event.target.value });
	}
	handleNewPasswordChange(event) {
		this.setState({ newPasswordInput: event.target.value });
	}

	handleCreateAccount(event) {
		event.preventDefault();
		this.setState({ errorMessage: "" });
		this.setState({ successMessage: "" });
		if (!this.props.user) {
			firebase
				.auth()
				.setPersistence(firebase.auth.Auth.Persistence.SESSION)
				.then(() => {
					return firebase
						.auth()
						.createUserWithEmailAndPassword(
							this.state.emailInput,
							this.state.passwordInput
						)
						.catch((error) => this.handleError(error.code));
				})
				.then(() => this.addUserDetails())
				.then(() => this.setState({ successMessage: succMsgCreated }))
				.catch((error) => this.handleError(error));
		} else {
			this.handleError("loggedIn");
		}
	}
	async handleUpdateAccount(event) {
		event.preventDefault();
		await this.setState({ errorMessage: "" });
		this.setState({ successMessage: "" });
		let user = firebase.auth().currentUser;
		if (
			this.state.nameInput !== this.props.userData.public.name ||
			this.state.studentNumberInput !==
				this.props.userData.public.studentNumber
		) {
			await this.addUserDetails();
		}

		if (
			this.state.newPasswordInput ||
			this.state.emailInput !== this.props.user.email
		) {
			let credentials = firebase.auth.EmailAuthProvider.credential(
				user.email,
				this.state.passwordInput
			);
			await user
				.reauthenticateWithCredential(credentials)
				.then(() => {
					if (this.state.newPasswordInput !== "")
						user.updatePassword(this.state.newPasswordInput);
				})
				.then(() => {
					if (this.state.emailInput !== "")
						user.updateEmail(this.state.emailInput);
				})
				.catch((error) => this.handleError(error));
		}
		if (this.state.errorMessage === "") {
			this.props.toggleUpdateModal();
			this.props.getUserData(); //TODO: Update user
		}
	}
	addUserDetails() {
		let uid = firebase.auth().currentUser.uid;
		firebase.database().ref(`users/${uid}/info/public`).set({
			name: this.state.nameInput,
			studentNumber: this.state.studentNumberInput,
		});
	}
	handleError(error) {
		let errorCode = error?.code;
		let errorMessage = error?.message;
		switch (errorCode) {
			case "loggedIn":
				this.setState({
					errorMessage: errMsgLoggedIn,
				});
				break;
			case "auth/email-already-in-use":
				this.setState({
					errorMessage: errMsgEmailInUse,
				});
				break;
			case "auth/invalid-email":
				this.setState({
					errorMessage: errMsgInvalidEmail,
				});
				break;
			case "auth/weak-password":
				this.setState({
					errorMessage: errMsgWeakPassword,
				});
				break;
			case "auth/wrong-password":
				this.setState({
					errorMessage: errMsgWrongPassword,
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
				<p>{this.state.successMessage}</p>
				<p>{this.state.errorMessage}</p>
				<form
					onSubmit={
						this.props.mode === "update"
							? this.handleUpdateAccount
							: this.handleCreateAccount
					}
				>
					<label htmlFor="name">Full Name:</label>
					<input
						type="text"
						className="form-control"
						id="name"
						value={this.state.nameInput}
						onChange={this.handleNameChange}
						required
					/>

					<label htmlFor="studentNumber">Student Number:</label>
					<input
						type="number"
						className="form-control"
						id="studentNumber"
						value={this.state.studentNumberInput}
						onChange={this.handleStudentNumberChange}
						min="100000"
						max="9999999"
						required
					/>

					<label htmlFor="email">Email Address:</label>
					<input
						type="email"
						className="form-control"
						id="email"
						value={this.state.emailInput}
						onChange={this.handleEmailChange}
						autoComplete="none"
						required
					/>

					<label htmlFor="password">
						{this.props.mode === "update"
							? "Current Password: (only required if updating email or password)"
							: "Password:"}
					</label>
					{this.props.mode !== "update" ? (
						<input
							type="password"
							className="form-control"
							id="password"
							value={this.state.passwordInput}
							onChange={this.handlePasswordChange}
							autoComplete="new-password"
							required
						/>
					) : (
						<div>
							<input
								type="password"
								className="form-control"
								id="password"
								value={this.state.passwordInput}
								onChange={this.handlePasswordChange}
							/>
							<label htmlFor="newPassword">New Password:</label>
							<input
								type="password"
								className="form-control"
								id="newPassword"
								value={this.state.newPasswordInput}
								onChange={this.handleNewPasswordChange}
								autoComplete="new-password"
							/>
						</div>
					)}

					{this.props.mode !== "update" ? (
						<div>
							<label htmlFor="T&Cs">
								I agree with the Swansea University Windsurfing
								club{" "}
								<a href={constitution} target="_blank">
									constitution
								</a>{" "}
								and{" "}
								<a href={privacyPolicy} target="_blank">
									privacy policy
								</a>
							</label>
							<input
								type="checkbox"
								className="form-control"
								id="T&Cs"
								required
							/>{" "}
						</div>
					) : null}

					{this.props.mode === "update" ? (
						<button type="submit" className="submit" value="Update">
							Update Account
						</button>
					) : (
						<button type="submit" className="submit" value="Log In">
							Create Account
						</button>
					)}
				</form>
			</div>
		);
	}
	// 	return (
	// 		<div>
	// 			<button className="submit" onClick={this.toggleUpdateModal}>
	// 				Update Account
	// 			</button>
	// 			<Modal
	// 				show={this.state.updateModal}
	// 				onHide={this.toggleUpdateModal}
	// 				backdrop="static"
	// 				keyboard={false}
	// 			>
	// 				<Modal.Header closeButton>
	// 					<Modal.Title>Update user details</Modal.Title>
	// 				</Modal.Header>
	// 				<Modal.Body>
	// 					<form>
	// 						<input type="email"></input>
	// 					</form>
	// 					<button
	// 						class="submit"
	// 						onClick={() => this.handleUpdate()}
	// 					>
	// 						Yes
	// 					</button>
	// 				</Modal.Body>
	// 			</Modal>
	// 		</div>
	// 	);
	// }
}
export default AccountBuilder;
