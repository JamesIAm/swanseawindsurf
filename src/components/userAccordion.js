import React from "react";

class UserAccordion extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h3>{this.props.user.info.name}</h3>
				<p>{this.props.user.role}</p>
				<p>{this.props.user.info.studentNumber}</p>
				<p>{this.props.uid}</p>
				<div className="account-buttons">
					<div className="superAdminButton">
						{this.props.user.role === "superAdmin" ? null : (
							<button
								onClick={() =>
									this.props.makeSuperAdmin(this.props.uid)
								}
							>
								Make superAdmin
							</button>
						)}
					</div>
					<div className="adminButton">
						{this.props.user.role === "admin" ? null : (
							<button
								onClick={() =>
									this.props.makeAdmin(this.props.uid)
								}
							>
								Make admin
							</button>
						)}
					</div>
					<div className="userButton">
						{this.props.user.role === "user" ? null : (
							<button
								onClick={() =>
									this.props.makeUser(this.props.uid)
								}
							>
								Make user
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default UserAccordion;
