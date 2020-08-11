import React from "react";
import firebase, { auth, provider, database } from "../components/firebase.js";

const succSessionCreated = "Session Created sucessfully";
class SessionCreator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessionNameInput: "",
			descriptionInput: "",
			sessionStartTimeInput: "",
			sessionEndTimeInput: "",
			placeLimitInput: 15,
			successMessage: "",
		};
		this.handleSessionNameChange = this.handleSessionNameChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
		this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
		this.handlePlaceLimitChange = this.handlePlaceLimitChange.bind(this);
		this.createSession = this.createSession.bind(this);
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
			})
			.then(
				this.setState({
					successMessage: succSessionCreated,
					sessionNameInput: "",
					descriptionInput: "",
					sessionStartTimeInput: "",
					sessionEndTimeInput: "",
					placeLimitInput: "",
				})
			);
	}
	render() {
		return (
			<div>
				<div>{this.state.successMessage}</div>
				<form onSubmit={this.createSession}>
					<label>
						Session Name
						<input
							type="text"
							required
							value={this.state.sessionNameInput}
							onChange={this.handleSessionNameChange}
						/>
					</label>
					<label>
						Description
						<input
							type="text"
							required
							value={this.state.descriptionInput}
							onChange={this.handleDescriptionChange}
						/>
					</label>
					<label>
						Session Start Time
						<input
							type="datetime-local"
							required
							value={this.state.sessionStartTimeInput}
							onChange={this.handleStartTimeChange}
						/>
					</label>
					<label>
						Session End Time
						<input
							type="datetime-local"
							required
							value={this.state.sessionEndTimeInput}
							onChange={this.handleEndTimeChange}
						/>
					</label>
					<label>
						Place Limit
						<input
							type="number"
							value={this.state.placeLimitInput}
							onChange={this.handlePlaceLimitChange}
						/>
					</label>
					<button type="submit">Create session</button>
				</form>
			</div>
		);
	}
}

export default SessionCreator;
