import React from "react";
import { Link } from "react-router-dom";
import "../static/style.css";
import {
	LoginButton,
	CreateAccountButton,
	LogoutButton,
	MyAccountButton,
	AdminButton,
} from "./accountButtons";

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMobileNav: false,
			showMobileAccountNav: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleAccountNav = this.toggleAccountNav.bind(this);
		this.minimiseNav = this.minimiseNav.bind(this);
	}
	componentDidMount() {
		window.addEventListener("scroll", () =>
			this.state.showMobileNav || this.state.showMobileAccountNav
				? this.minimiseNav(this)
				: null
		);
	}
	minimiseNav() {
		this.setState({ showMobileNav: false, showMobileAccountNav: false });
	}
	toggleNav() {
		let currentState = this.state.showMobileNav;
		this.setState({
			showMobileNav: !currentState,
			showMobileAccountNav: false,
		});
	}
	toggleAccountNav() {
		let currentState = this.state.showMobileAccountNav;
		this.setState({
			showMobileAccountNav: !currentState,
			showMobileNav: false,
		});
	}

	render() {
		return (
			<div>
				<button
					onClick={() => this.toggleNav()}
					className="mobile_nav_button"
				>
					Menu
				</button>
				<button
					onClick={() => this.toggleAccountNav()}
					className="mobile_nav_button"
					id="account_nav_button"
				>
					Account
				</button>
				<ul
					className="navlist"
					style={{
						display: this.state.showMobileAccountNav ? "block" : "",
					}}
					id="account_nav"
				>
					{this.props.user &&
					(this.props.permissions === "admin" ||
						this.props.permissions === "superAdmin") ? (
						<div>
							<li>
								<LogoutButton
									user={this.props.user}
									minimiseNav={this.minimiseNav}
								/>
							</li>
							<li>
								<MyAccountButton
									user={this.props.user}
									minimiseNav={this.minimiseNav}
								/>
							</li>
							<li>
								<AdminButton
									user={this.props.user}
									minimiseNav={this.minimiseNav}
								/>
							</li>
						</div>
					) : this.props.user ? (
						<div>
							<li>
								<LogoutButton
									user={this.props.user}
									minimiseNav={this.minimiseNav}
								/>
							</li>
							<li>
								<MyAccountButton
									user={this.props.user}
									minimiseNav={this.minimiseNav}
								/>
							</li>
						</div>
					) : (
						<div>
							<li>
								<LoginButton minimiseNav={this.minimiseNav} />
							</li>
							<li>
								<CreateAccountButton
									minimiseNav={this.minimiseNav}
								/>
							</li>
						</div>
					)}
				</ul>
				<ul
					className="navlist"
					style={{ display: this.state.showMobileNav ? "block" : "" }}
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
							Holidays
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navigation;
