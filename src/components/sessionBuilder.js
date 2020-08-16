import React from "react";
import firebase, { auth, provider, database } from "./firebase.js";

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
					<label>
						Who is the session open to?
						<br />
						(Open: Anyone can attend,
						<br />
						Trial: People can attend if it's their first session or
						if they have membership,
						<br />
						Closed: Only members can attend)
						<br />
					</label>
					<label>
						<input
							type="radio"
							name="sessionType"
							value="open"
							checked={this.state.membershipInput === "open"}
							onChange={this.handleMembershipChange}
						/>{" "}
						Open
					</label>
					<label>
						<input
							type="radio"
							name="sessionType"
							value="trial"
							checked={this.state.membershipInput === "trial"}
							onChange={this.handleMembershipChange}
						/>{" "}
						Trial
					</label>
					<label>
						<input
							type="radio"
							name="sessionType"
							value="closed"
							checked={this.state.membershipInput === "closed"}
							onChange={this.handleMembershipChange}
						/>{" "}
						Closed
					</label>
					<button type="submit">
						{this.props.update ? "Save session" : "Create session"}
					</button>
				</form>
			</div>
		);
	}
}

export default SessionBuilder;
