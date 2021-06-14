import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { handleError } from "../functions/handleError";

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
					return firebase
						.auth()
						.signInWithEmailAndPassword(
							this.state.emailInput,
							this.state.passwordInput
						)
						.catch((error) => handleError(error));
				})
				.catch((error) => handleError(error));
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
					<Link
						to={{
							pathname: "/reset-password",
							state: { email: this.state.emailInput },
						}}
					>
						Reset Your Password
					</Link>
				</form>
			</div>
		);
	}
}

export default Login;
