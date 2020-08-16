import React from "react";

class SessionModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sessionNameInput: this.props.session.name,
			descriptionInput: this.props.session.description,
			sessionStartTimeInput: this.props.session.startTime,
			sessionEndTimeInput: this.props.session.endTime,
			placeLimitInput: this.props.session.placeLimit,
			membershipInput: this.props.session.members,
		};
		this.handleMembershipChange = this.handleMembershipChange.bind(this);
		this.handleSessionNameChange = this.handleSessionNameChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
		this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
		this.handlePlaceLimitChange = this.handlePlaceLimitChange.bind(this);
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

	render() {
		return (
			<div>
				{this.state.fieldKeys
					? iterate.map((index) => {
							let key = this.state.fieldKeys[index];
							let field = this.state.fieldContent[index];
							console.log(typeof field);
							return <label>key</label>;
					  })
					: null}
			</div>
		);
	}
}

export default SessionModal;
