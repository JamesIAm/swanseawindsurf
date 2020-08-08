import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";

const loginErrorMsgWrong = "Incorrect username or password, please try again";
const loginErrorMsgSpam =
	"You've entered the incorrect username or password too many times, please try again later";
const loginErrorMsgSerious =
	"Something went on our end, please try again or contact us";
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			emailInput: "",
			passwordInput: "",
			errorMessage: "",
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.handleError = this.handleError.bind(this);
	}
	handleEmailChange(event) {
		this.setState({ emailInput: event.target.value });
	}
	handlePasswordChange(event) {
		this.setState({ passwordInput: event.target.value });
	}
	handleLogin(event) {
		event.preventDefault();
		if (!this.props.user) {
			console.log(this);
			firebase
				.auth()
				.signInWithEmailAndPassword(
					this.state.emailInput,
					this.state.passwordInput
				)
				.then(this.props.login(this.currentUser))
				.catch((error) => this.handleError(error.code));
		}
	}
	handleLogout() {
		if (this.props.user) {
			firebase
				.auth()
				.signOut()
				.then(this.props.logout)
				.catch(function (error) {
					handleError("logout");
				});
		}
	}
	handleError(errorCode) {
		switch (errorCode) {
			case "auth/wrong-password":
				this.setState({
					errorMessage: loginErrorMsgWrong,
				});
				break;
			case "auth/user-not-found":
				this.setState({
					errorMessage: loginErrorMsgWrong,
				});
				break;
			case "auth/too-many-requests":
				this.setState({
					errorMessage: loginErrorMsgSpam,
				});
				break;
			default:
				this.setState({
					errorMessage: loginErrorMsgSerious,
				});
				console.error(errorCode);
				break;
		}
	}
	render() {
		return (
			<div className="article">
				{this.state.errorMessage}
				<form onSubmit={this.handleLogin}>
					<label>
						Email Address:
						<input
							type="email"
							value={this.state.emailInput}
							onChange={this.handleEmailChange}
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							value={this.state.passwordInput}
							onChange={this.handlePasswordChange}
						/>
					</label>
					<button type="submit" value="Log In">
						Log In
					</button>
				</form>
				<button
					type="submit"
					value="Log In"
					onClick={this.handleLogout}
				>
					Log Out
				</button>
			</div>
		);
	}
}

export default Login;
