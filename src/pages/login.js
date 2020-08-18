import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect } from "react-router-dom";

const errMsgWrong = "Incorrect username or password, please try again";
const errMsgSpam =
	"You've entered the incorrect username or password too many times, please try again later";
const errMsgUnknown =
	"Something went on our end, please try again or contact us";
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailInput: "",
			passwordInput: "",
			errorMessage: "",
			redirect: false,
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleError = this.handleError.bind(this);
	}
	componentDidUpdate() {
		if (this.props.user) {
			this.setState({ redirect: true });
		}
	}
	handleEmailChange(event) {
		this.setState({ emailInput: event.target.value });
	}
	handlePasswordChange(event) {
		this.setState({ passwordInput: event.target.value });
	}
	handleLogin(event) {
		event.preventDefault();
		this.setState({ errorMessage: "" });
		if (!this.props.user) {
			firebase
				.auth()
				.setPersistence(firebase.auth.Auth.Persistence.SESSION)
				.then(() => {
					firebase
						.auth()
						.signInWithEmailAndPassword(
							this.state.emailInput,
							this.state.passwordInput
						);
				})
				.catch((error) => this.handleError(error.code));
		}
	}
	handleError(errorCode) {
		switch (errorCode) {
			case "auth/wrong-password":
				this.setState({
					errorMessage: errMsgWrong,
				});
				break;
			case "auth/user-not-found":
				this.setState({
					errorMessage: errMsgWrong,
				});
				break;
			case "auth/too-many-requests":
				this.setState({
					errorMessage: errMsgSpam,
				});
				break;
			default:
				this.setState({
					errorMessage: errMsgUnknown,
				});
				console.error(errorMessage);
				console.error(errorCode);
				break;
		}
	}
	render() {
		if (this.state.redirect) {
			return <Redirect push to="/my-account" />;
		}
		return (
			<div className="article">
				<h1>Log in</h1>
				<p>{this.state.errorMessage}</p>
				<form onSubmit={this.handleLogin}>
					<label htmlFor="email">Email Address:</label>
					<input
						type="email"
						className="form-control"
						id="email"
						value={this.state.emailInput}
						onChange={this.handleEmailChange}
						required
					/>

					<label htmlFor="password">Password:</label>
					<input
						type="password"
						className="form-control"
						id="password"
						value={this.state.passwordInput}
						onChange={this.handlePasswordChange}
						required
					/>

					<button type="submit" value="Log In" className="submit">
						Log In
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
