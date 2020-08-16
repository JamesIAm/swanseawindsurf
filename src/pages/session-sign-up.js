import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import "../static/article.css";
import SessionAccordion from "../components/sessionAccordion";

class SessionSignUp extends React.Component {
	render() {
		return (
			<div className="article">
				<h2 className="content-text">
					Sign up here for next week's session!
				</h2>
				<SessionAccordion
					user={this.props.user}
					membership={this.props.membership}
					mode={"user"}
				/>
			</div>
		); //TODO: Add a register membership and a sign up component here
	}
}

export default SessionSignUp;
