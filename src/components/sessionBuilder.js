import React from "react";
import firebase, { auth, provider, database } from "./firebase.js";
import "../static/form.css";

const succSessionCreated = "Session Created sucessfully";
class SessionBuilder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessionNameInput: this.props?.session?.name || "",
			descriptionInput: this.props?.session?.description || "",
			sessionStartTimeInput: this.props?.session?.startTime || "",
			sessionEndTimeInput: this.props?.session?.endTime || "",
			placeLimitInput: this.props?.session?.placeLimit || 15,
			membershipInput: this.props?.session?.members || "trial",
			successMessage: "",
		};
		this.handleMembershipChange = this.handleMembershipChange.bind(this);
		this.handleSessionNameChange = this.handleSessionNameChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
		this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
		this.handlePlaceLimitChange = this.handlePlaceLimitChange.bind(this);
		this.createSession = this.createSession.bind(this);
		this.updateSession = this.updateSession.bind(this);
	}
	handleMembershipChange(event) {
		this.setState({ membershipInput: event.target.value });
	}
	handleSessionNameChange(event) {
		this.setState({ sessionNameInput: event.target.value });
	}
	handleDescriptionChange(event) {
		this.setState({ descriptionInput: event.target.value });
	}
	handleStartTimeChange(event) {
		this.setState({ sessionStartTimeInput: event.target.value });
	}
	handleEndTimeChange(event) {
		this.setState({ sessionEndTimeInput: event.target.value });
	}
	handlePlaceLimitChange(event) {
		this.setState({ placeLimitInput: event.target.value });
	}
	createSession(event) {
		event.preventDefault();
		firebase
			.database()
			.ref("pages/sign-up/sessions")
			.push()
			.set({
				name: `${this.state.sessionNameInput}`,
				description: `${this.state.descriptionInput}`,
				startTime: `${this.state.sessionStartTimeInput}`,
				endTime: `${this.state.sessionEndTimeInput}`,
				placeLimit: `${this.state.placeLimitInput}`,
				members: `${this.state.membershipInput}`,
			})
			.then(
				this.setState({
					successMessage: succSessionCreated,
					sessionNameInput: "",
					descriptionInput: "",
					sessionStartTimeInput: "",
					sessionEndTimeInput: "",
					placeLimitInput: "",
					membershipInput: "trial",
				})
			);
	}
	updateSession(event) {
		event.preventDefault();
		firebase
			.database()
			.ref(`/pages/sign-up/sessions/${this.props.sessionKey}`)
			.update({
				name: this.state.sessionNameInput,
				description: this.state.descriptionInput,
				startTime: this.state.sessionStartTimeInput,
				endTime: this.state.sessionEndTimeInput,
				placeLimit: this.state.placeLimitInput,
				members: this.state.membershipInput,
			})
			.then(() => this.props.closeModal());
	}
	render() {
		return (
			<div>
				<div>{this.state.successMessage}</div>
				<form
					onSubmit={
						this.props.update
							? this.updateSession
							: this.createSession
					}
				>
					<label htmlFor="sessionName">Session Name</label>
					<input
						type="text"
						className="form-control"
						id="sessionName"
						required
						value={this.state.sessionNameInput}
						onChange={this.handleSessionNameChange}
					/>
					<label htmlFor="description">Description</label>
					<input
						type="text"
						className="form-control"
						id="description"
						required
						value={this.state.descriptionInput}
						onChange={this.handleDescriptionChange}
					/>
					<label htmlFor="startTime">Session Start Time</label>
					<input
						type="datetime-local"
						className="form-control"
						id="startTime"
						required
						value={this.state.sessionStartTimeInput}
						onChange={this.handleStartTimeChange}
					/>
					<label htmlFor="endTime">Session End Time</label>
					<input
						type="datetime-local"
						className="form-control"
						id="endTime"
						required
						value={this.state.sessionEndTimeInput}
						onChange={this.handleEndTimeChange}
					/>
					<label htmlFor="placeLimit">Place Limit</label>
					<input
						type="number"
						className="form-control"
						id="placeLimit"
						value={this.state.placeLimitInput}
						onChange={this.handlePlaceLimitChange}
					/>
					<label htmlFor="openSession">
						Open (Anyone can attend)
					</label>
					<input
						type="radio"
						name="sessionType"
						className="form-control"
						id="openSession"
						value="open"
						checked={this.state.membershipInput === "open"}
						onChange={this.handleMembershipChange}
					/>
					<label htmlFor="trialSession">
						Trial (People can attend if it's their first session or
						if they have membership)
					</label>
					<input
						type="radio"
						name="sessionType"
						className="form-control"
						id="trialSession"
						value="trial"
						checked={this.state.membershipInput === "trial"}
						onChange={this.handleMembershipChange}
					/>
					<label htmlFor="closedSession">
						Closed (Only members can attend)
					</label>
					<input
						type="radio"
						name="sessionType"
						className="form-control"
						id="closedSession"
						value="closed"
						checked={this.state.membershipInput === "closed"}
						onChange={this.handleMembershipChange}
					/>
					<button type="submit" className="submit">
						{this.props.update ? "Save session" : "Create session"}
					</button>
				</form>
			</div>
		);
	}
}

export default SessionBuilder;
