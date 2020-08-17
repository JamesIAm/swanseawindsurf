import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

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
			userData: this.props.userInfo,
			allSessions: null,
			sessionKeys: null,
		};

		this.handleError = this.handleError.bind(this);
		this.confirmDeletion = this.confirmDeletion.bind(this);
		this.cancelDelete = this.cancelDelete.bind(this);
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
				.then((snapshot) => this.setState({ userData: snapshot.val() }))
				.catch((error) => this.handleError(error));
		}
	}
	confirmDeletion() {
		this.setState({
			deleteModal: true,
		});
	}
	cancelDelete() {
		this.setState({
			deleteModal: false,
		});
	}
	handleDelete() {
		// firebase
		// 	.database()
		// 	.ref(`/pages/sign-up/sessions/${sessionKey}`)
		// 	.remove()
		// 	.then(() => this.cancelDelete())
		// 	.then(() => this.getSessionsForDeletion())
		// 	.catch((error) => this.handleError(error));
		this.getSessionsForDeletion();
	}
	async getSessionsForDeletion(sessions) {
		firebase
			.database()
			.ref("pages/sign-up/sessions")
			.once("value")
			.then((snapshot) =>
				this.setState(
					{
						allSessions: snapshot.val(),
						sessionKeys: Object.keys(snapshot.val()),
					},
					() => {
						console.log(this.deleteAttendance());
					}
				)
			)
			.catch((error) => this.handleError(error));
	}
	deleteAttendance() {
		this.state.sessionKeys.map((sessionKey) => {
			if (
				eval(
					`this.state?.allSessions[sessionKey]?.attendees?.${this.props.user.uid}`
				)
			) {
				firebase
					.database()
					.ref(
						`/pages/sign-up/sessions/${sessionKey}/attendees/${this.props.user.uid}`
					)
					.remove()
					.catch((error) => this.handleError(error));
			}
		});
		this.deleteAccount();
	}
	deleteAccount() {
		firebase
			.database()
			.ref(`/users/${this.props.user.uid}/info/public`)
			.remove()
			.then(firebase.auth().currentUser.delete())
			.then(this.cancelDelete())
			.then(() => this.setState({ redirect: true }))
			.catch((error) => this.handleError(error));
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
	deleteButton = () => {
		return (
			<div>
				<button
					className="submit"
					style={{ backgroundColor: "maroon" }}
					onClick={this.confirmDeletion}
				>
					Delete Account
				</button>
				<Modal
					show={this.state.deleteModal}
					onHide={this.cancelDelete}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>
							Are you sure you want to delete this session
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<button
							class="submit"
							onClick={() => this.handleDelete()}
						>
							Yes
						</button>
						<button
							class="submit"
							onClick={() => this.cancelDelete()}
						>
							No
						</button>
					</Modal.Body>
				</Modal>
			</div>
		);
	};
	render() {
		if (this.state.redirect) {
			return <Redirect push to="/login" />;
		}
		return (
			<div className="article">
				<p>{this.state.errorMessage}</p>
				<p>
					Name:{" "}
					{this.state.userData
						? this.state.userData.public.name
						: null}
				</p>
				<p>Email: {this.props.user ? this.props.user.email : null}</p>
				<p>
					Student Number:{" "}
					{this.state.userData
						? this.state.userData.public.studentNumber
						: null}
				</p>
				<p>
					Membership Status:{" "}
					{this.state.userData
						? this.state.userData.private
							? this.state.userData.private.membership
								? "true"
								: "false"
							: "false"
						: "false"}
				</p>
				{this.deleteButton()}
			</div>
		);
	}
}

export default MyAccount;
