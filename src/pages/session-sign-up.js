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
				<p>Please note, there are currently no sessions running due to the current Local Lockdown rules. But we are running a number of socials (you can find out more on our <a href="facebook.com/SwanseaUniWindsurf/">Facebook page</a>), and we will try and resume sessions as soon as possible.</p>
				{this.props.user ? (
					<div>
						<SessionAccordion
							user={this.props.user}
							membership={this.props.membership}
							mode={"user"}
						/>
						<p>
							What is meant by 'Is the session open to everyone'?
							<br /> If the session is 'Open' then Anyone can
							attend.
							<br /> If the session is a 'Trial' session then
							people can attend if it's their first session or if
							they have membership
							<br />
							If the session is a 'Closed' session then people can
							only attend if they have membership
							<br /> You can check your membership status in{" "}
							<Link to="/my-account">My Account</Link>
						</p>
					</div>
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
