import React from "react";
import { Link } from "react-router-dom";
import firebase, { auth, provider } from "../components/firebase.js";

class LogoutButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout() {
		if (this.props.user) {
			firebase
				.auth()
				.signOut()
				.catch(function (error) {
					console.error(error);
				});
		}
	}
	render() {
		return (
			<Link to="/login" onClick={this.handleLogout}>
				Log Out
			</Link>
		);
	}
}
class LoginButton extends React.Component {
	render() {
		return <Link to="/login">Log In</Link>;
	}
}
class CreateAccountButton extends React.Component {
	render() {
		return <Link to="/create-account">Create Account</Link>;
	}
}
class MyAccountButton extends React.Component {
	render() {
		return <Link to="/my-account">My Account</Link>;
	}
}
class AdminButton extends React.Component {
	render() {
		return <Link to="/admin">Admin</Link>;
	}
}

export {
	LoginButton,
	CreateAccountButton,
	LogoutButton,
	MyAccountButton,
	AdminButton,
};
