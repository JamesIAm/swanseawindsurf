import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
		this.minimiseNav = this.minimiseNav.bind(this);
		this.state = {
			isActive: false,
		};
	}
	componentDidMount() {
		window.addEventListener("scroll", () => this.minimiseNav(this));
	}
	minimiseNav() {
		this.setState({ isActive: false });
	}
	toggleNav() {
		const currentState = this.state.isActive;
		this.setState({ isActive: !currentState });
	}

	render() {
		return (
			<div>
				<button onClick={this.toggleNav} className="mobile_nav_button">
					Menu
				</button>

				<ul
					className="navlist"
					style={{ display: this.state.isActive ? "block" : "" }}
				>
					<li>
						<Link to="" onClick={this.minimiseNav}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/about-us" onClick={this.minimiseNav}>
							Club Info
						</Link>
					</li>
					<li>
						<Link to="/committee" onClick={this.minimiseNav}>
							Meet the Committee
						</Link>
					</li>
					<li>
						<Link to="/session-sign-up" onClick={this.minimiseNav}>
							Sign Up
						</Link>
					</li>
					<li>
						<Link to="/events" onClick={this.minimiseNav}>
							SWA Events
						</Link>
					</li>
					<li>
						<Link
							to="/competition-results"
							onClick={this.minimiseNav}
						>
							Competition Results
						</Link>
					</li>
					<li>
						<Link to="holiday" onClick={this.minimiseNav}>
							Sardinia 2018
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
