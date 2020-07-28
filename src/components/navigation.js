import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.displayNav = this.displayNav.bind(this);
		this.state = {
			isActive: false,
		};
	}
	displayNav() {
		const currentState = this.state.isActive;
		this.setState({ isActive: !currentState });
	}
	render() {
		return (
			<div>
				<button onClick={this.displayNav} className="mobile_nav_button">
					Menu
				</button>

				<ul
					className="navlist"
					style={{ display: this.state.isActive ? "block" : "" }}
				>
					<li>
						<Link to="">Home</Link>
					</li>
					<li>
						<Link to="/about-us">Club Info</Link>
					</li>
					<li>
						<Link to="/committee">Meet the Committee</Link>
					</li>
					<li>
						<Link to="/session-sign-up">Sign Up</Link>
					</li>
					<li>
						<Link to="/events">SWA Events</Link>
					</li>
					<li>
						<Link to="/competition-results">
							Competition Results
						</Link>
					</li>
					<li>
						<Link to="holiday">Sardinia 2018</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
