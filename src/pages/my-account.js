import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import AccountBuilder from "../components/accountBuilder";
import emailjs from "emailjs-com";

const errMsgWrong = "Incorrect username or password, please try again";
const errMsgSpam =
	"You've entered the incorrect username or password too many times, please try again later";
const errMsgUnknown =
	"Something went on our end, please try again or contact us";
class MyAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: null,
			email: null,
			studentNumber: null,
			userData: this.props.userInfo,
			allSessions: null,
			sessionKeys: null,
			deleteModal: false,
			updateModal: false,
		};

		this.handleError = this.handleError.bind(this);
		this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
		this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
		this.requestMembership = this.requestMembership.bind(this);
		this.getUserData = this.getUserData.bind(this);
	}
	componentDidMount() {
		if (this.props.user) {
			this.getUserData();
		}
	}
	getUserData() {
		let uid = this.props.user.uid;
		let usersData = firebase
			.database()
			.ref(`users/${uid}/info`)
			.once("value")
			.then((snapshot) => this.setState({ userData: snapshot.val() }))
			.catch((error) => this.handleError(error));
	}
	toggleDeleteModal() {
		this.setState({
			deleteModal: !this.state.deleteModal,
		});
	}
	toggleUpdateModal() {
		this.setState({
			updateModal: !this.state.updateModal,
		});
	}
	requestMembership() {
		emailjs.send(
			"gmail",
			"template_AoDOdYv5",
			{ uid: this.props.user.uid },
			"user_FmdvbZkj8WWD2IjEwwXis"
		);
		firebase
			.database()
			.ref(`users/${this.props.user.uid}/info/public/requested`)
			.set(true)
			.then(() => this.getUserData())
			.catch((error) => this.handleError(error));
	}

	async handleDelete() {
		// this.getSessionsForDeletion();
		await firebase
			.database()
			.ref("pages/sign-up/sessions")
			.once("value")
			.then((snapshot) =>
				this.setState({
					allSessions: snapshot.val(),
					sessionKeys: Object.keys(snapshot.val()),
				})
			)
			.catch((error) => this.handleError(error));
		await this.state.sessionKeys.map((sessionKey) => {
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
		await firebase
			.database()
			.ref(`/users/${this.props.user.uid}/info/public`)
			.remove()
			.then(firebase.auth().currentUser.delete())
			.then(this.toggleDeleteModal())
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
					onClick={this.toggleDeleteModal}
				>
					Delete Account
				</button>
				<Modal
					show={this.state.deleteModal}
					onHide={this.toggleDeleteModal}
					backdrop="static"
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>
							Are you sure you want to delete your account
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<button
							className="submit"
							onClick={() => this.handleDelete()}
						>
							Yes
						</button>
						<button
							className="submit"
							onClick={() => this.toggleDeleteModal()}
						>
							No
						</button>
					</Modal.Body>
				</Modal>
			</div>
		);
	};
	updateButton = () => {
		if (this.state.userData) {
			return (
				<div>
					<button className="submit" onClick={this.toggleUpdateModal}>
						Update Account Details
					</button>
					<Modal
						show={this.state.updateModal}
						onHide={this.toggleUpdateModal}
						backdrop="static"
						keyboard={false}
					>
						<Modal.Header closeButton>
							<Modal.Title>Update account details</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<AccountBuilder
								user={this.props.user}
								userData={this.state.userData}
								mode={"update"}
								toggleUpdateModal={this.toggleUpdateModal}
								getUserData={this.getUserData}
							/>
						</Modal.Body>
					</Modal>
				</div>
			);
		} else {
			return <p>Loading...</p>;
		}
	};
	render() {
		if (!this.props.user) {
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
				{this.state?.userData?.public?.requested ? (
					<div>
						<p>Membership Status: requested</p>
						<p>
							We will strive to fulfil your request as soon as
							possible, but if you need any further assistance
							please contact one of the members of the committee
							on Facebook.
						</p>
					</div>
				) : this.state?.userData?.private?.membership ? (
					<p>Membership Status: true</p>
				) : this.state?.userData?.public ? (
					<div>
						<p>Membership Status: false </p>
						<p>
							If you have bought membership on the Swansea Union
							website, click below to let us know. We'll double
							check the data and then update your membership
							status.
						</p>
						<button
							id="membership-button"
							className="submit"
							onClick={() => this.requestMembership()}
						>
							Request Membership Approval
						</button>
					</div>
				) : (
					<p>Loading...</p>
				)}
				{this.updateButton()}
				{this.deleteButton()}
			</div>
		);
	}
}

export default MyAccount;
