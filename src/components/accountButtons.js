import React from "react";
import { Link } from "react-router-dom";
import firebase, { auth, provider } from "../components/firebase.js";

class LogoutButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}
	handleLogout() {
		this.props.minimiseNav();
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
		return (
			<Link to="/login" onClick={this.props.minimiseNav}>
				Log In
			</Link>
		);
	}
}
class CreateAccountButton extends React.Component {
	render() {
		return (
			<Link to="/create-account" onClick={this.props.minimiseNav}>
				Create Account
			</Link>
		);
	}
}
class MyAccountButton extends React.Component {
	render() {
		return (
			<Link to="/my-account" onClick={this.props.minimiseNav}>
				My Account
			</Link>
		);
	}
}
class AdminButton extends React.Component {
	render() {
		return (
			<Link to="/admin" onClick={this.props.minimiseNav}>
				Admin
			</Link>
		);
	}
}

export {
	LoginButton,
	CreateAccountButton,
	LogoutButton,
	MyAccountButton,
	AdminButton,
};
