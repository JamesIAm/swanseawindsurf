import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect } from "react-router-dom";
//import {} from "../files";
// require("../files/constitution.pdf");
// require("../files/suwc_privay_policy.pdf");

import constitution from "../files/constitution.pdf";
import privacyPolicy from "../files/suwc_privacy_policy.pdf";

const errMsgLoggedIn = "You are already logged in";
const errMsgEmailInUse =
	"That email address is already in use, please log in or try a different email address";
const errMsgInvalidEmail =
	"That is not a valid email address, please try again";
const errMsgWeakPassword =
	"Your password is not secure enough, please make sure it is at least 6 characters long";
const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const succMsgCreated = "Account successfully created";
class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nameInput: "",
			studentNumberInput: "",
			emailInput: "",
			passwordInput: "",
			errorMessage: "",
			successMessage: "",
			redirect: false,
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleStudentNumberChange = this.handleStudentNumberChange.bind(
			this
		);
		this.handleCreateAccount = this.handleCreateAccount.bind(this);
		this.handleError = this.handleError.bind(this);
		this.handleSucess = this.handleSucess.bind(this);
		this.addUserDetails = this.addUserDetails.bind(this);
	}
	componentDidUpdate() {
		if (this.props.user) {
			this.setState({ redirect: true });
		}
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

	handleCreateAccount(event) {
		event.preventDefault();
		this.setState({ errorMessage: "" });
		this.setState({ successMessage: "" });
		if (!this.props.user) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(
					this.state.emailInput,
					this.state.passwordInput
				)
				.then(() => this.addUserDetails())
				.then(() => this.handleSucess())
				.catch((error) => this.handleError(error));
		} else {
			this.handleError("loggedIn");
		}
	}
	addUserDetails() {
		let uid = firebase.auth().currentUser.uid;
		firebase.database().ref(`users/${uid}/info/public`).set({
			name: this.state.nameInput,
			studentNumber: this.state.studentNumberInput,
		});
	}
	handleSucess() {
		this.setState({ successMessage: succMsgCreated });
	}
	handleError(error) {
		let errorCode = error.code;
		let errorMessage = error.message;
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
				<p>{this.state.successMessage}</p>
				<p>{this.state.errorMessage}</p>

				<form onSubmit={this.handleCreateAccount}>
					<label>
						Full Name:
						<input
							type="text"
							value={this.state.nameInput}
							onChange={this.handleNameChange}
							required
						/>
					</label>
					<label>
						Student Number:
						<input
							type="number"
							value={this.state.studentNumberInput}
							onChange={this.handleStudentNumberChange}
							min="100000"
							max="9999999"
							required
						/>
					</label>
					<label>
						Email Address:
						<input
							type="email"
							value={this.state.emailInput}
							onChange={this.handleEmailChange}
							autoComplete="none"
							required
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							value={this.state.passwordInput}
							onChange={this.handlePasswordChange}
							autoComplete="new-password"
							required
						/>
					</label>
					<label>
						I agree with the Swansea University Windsurfing club{" "}
						<a href={constitution} target="_blank">
							constitution
						</a>{" "}
						and{" "}
						<a href={privacyPolicy} target="_blank">
							privacy policy
						</a>
						<input type="checkbox" required />
					</label>
					<button type="submit" value="Log In">
						Create Account
					</button>
				</form>
			</div>
		);
	}
}

export default CreateAccount;
