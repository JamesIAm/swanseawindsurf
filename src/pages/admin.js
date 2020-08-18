import React from "react";
import { Redirect } from "react-router-dom";

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
		// TODO: if (this.props.permissions !== ("admin" || "superAdmin")) {
		// 	return <Redirect push to="/my-account" />;
		// } else {
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
	}
	// }
}

export default Admin;
