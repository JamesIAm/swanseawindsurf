import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Link } from "react-router-dom";
import "../static/article.css";
import SessionAccordion from "../components/sessionAccordion";

class SessionSignUp extends React.Component {
	render() {
		return (
			<div className="article">
				<h2 className="content-text">
					Sign up here for next week's session!
				</h2>
				{this.props.user ? (
					<SessionAccordion
						user={this.props.user}
						membership={this.props.membership}
						mode={"user"}
					/>
				) : (
					<p>
						You need an account to sign up for sessions.{" "}
						<Link to="/create-account">Create an account</Link> or{" "}
						<Link to="/login">login</Link> to continue
					</p>
				)}
			</div>
		); //TODO: Add a register membership and a sign up component here
	}
}

export default SessionSignUp;
