import React from "react";
import { Link, Redirect } from "react-router-dom";

import UserAccordion from "../components/userAccordion";
import SessionBuilder from "../components/sessionBuilder";
import SessionAccordion from "../components/sessionAccordion";

class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {}
	componentDidUpdate() {}
	render() {
		console.log(
			this.props.permissions === "admin" ||
				this.props.permissions === "superAdmin"
		);
		console.log(this.props.permissions);
		if (
			this.props.permissions === "admin" ||
			this.props.permissions === "superAdmin"
		) {
			return (
				<div className="article">
					<h2>Create a session</h2>
					<SessionBuilder />
					<h2>Users</h2>
					<UserAccordion
						user={this.props.user}
						permissions={this.props.permissions}
					/>
					<h2>Sessions</h2>
					<SessionAccordion
						user={this.props.user}
						permissions={this.props.permissions}
						mode={"admin"}
					/>
				</div>
			);
		} else {
			return (
				<div className="article">
					<p>Loading...</p>
					<p>
						If this screen is not loading, please ensure you are{" "}
						<Link to="/login">logged in</Link> and you have access
						to the admin page.
					</p>
				</div>
			);
		}
	}
	// }
}

export default Admin;
