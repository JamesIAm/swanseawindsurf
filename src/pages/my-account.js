import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect } from "react-router-dom";

const errMsgWrong = "Incorrect username or password, please try again";
const errMsgSpam =
	"You've entered the incorrect username or password too many times, please try again later";
const errMsgUnknown =
	"Something went on our end, please try again or contact us";
class MyAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			displayName: null,
			email: null,
			studentNumber: null,
			userData: null,
		};

		this.handleError = this.handleError.bind(this);
	}
	componentDidMount() {
		if (!this.props.user) {
			this.setState({ redirect: true });
		} else {
			let uid = this.props.user.uid;
			let usersData = firebase
				.database()
				.ref(`users/${uid}/info`)
				.once("value")
				.then((snapshot) => this.saveUserData(snapshot.val()))
				.catch((error) => this.handleError(error));
		}
	}
	saveUserData(userData) {
		this.setState({ userData: userData });
		console.log(this.state.userData);
	}
	handleError(errorCode) {
		switch (errorCode) {
			default:
				this.setState({
					errorMessage: errMsgUnknown,
				});
				console.error(errorCode);
				break;
		}
	}
	render() {
		if (this.state.redirect) {
			return <Redirect push to="/login" />;
		}
		return (
			<div className="article">
				<p>{this.state.errorMessage}</p>
				<p>
					Name:{" "}
					{this.state.userData ? this.state.userData.name : null}
				</p>
				<p>Email: {this.props.user ? this.props.user.email : null}</p>
				<p>
					Student Number:{" "}
					{this.state.userData
						? this.state.userData.studentNumber
						: null}
				</p>
			</div>
		);
	}
}

export default MyAccount;
