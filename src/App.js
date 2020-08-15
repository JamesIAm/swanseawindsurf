import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer";
import Index from "./pages/home";
import AboutUs from "./pages/about-us";
import Committee from "./pages/committee";
import CompetitionResults from "./pages/competition-results";
import Holiday from "./pages/holiday";
import SessionSignUp from "./pages/session-sign-up";
import SWAEvents from "./pages/swa-events";
import Login from "./pages/login";
import CreateAccount from "./pages/createAccount";
import MyAccount from "./pages/my-account";
import Admin from "./pages/admin";
import {
	LoginButton,
	CreateAccountButton,
	LogoutButton,
	MyAccountButton,
} from "./components/accountButtons";

import firebase, { auth, provider } from "./components/firebase.js";
//require("firebase/auth");
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sticky: false,
			user: null,
			newUserDetails: null,
			userPermissions: null,
		};
		// this.updateDetails = this.updateDetails.bind(this);
		// this.updateUserRemote = this.updateUserRemote.bind(this);
		// this.updateUserState = this.updateUserState.bind(this);
		this.getPermissions = this.getPermissions.bind(this);
	}
	useEffect() {
		window.scrollTo(0, 0);
	}
	componentDidMount() {
		window.addEventListener("scroll", () => this.stickyNav(this));
		const height = window.innerHeight;
		this.setState({ height });
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
				this.getPermissions(user.uid);
				// if (this.state.newUserDetails) {
				// 	console.log(this);
				// 	this.updateUserRemote(user);
				// }
			} else {
				this.setState({ user: null });
			}
		});
	}
	getPermissions(uid) {
		let usersData = firebase
			.database()
			.ref(`users/${uid}/role`)
			.once("value")
			.then((snapshot) =>
				this.setState({ userPermissions: snapshot.val() })
			)
			.catch((error) => this.handleError(error));
	}
	// updateUserState() {
	// 	let user = firebase.auth().currentUser;
	// 	this.setState({ user });
	// }
	stickyNav() {
		this.setState({
			sticky: window.pageYOffset >= this.state.height * 0.1,
		});
	}
	// updateUserRemote(user) {
	// 	console.log(this.state.newUserDetails);
	// 	console.log(user);
	// 	user.updateProfile(this.state.newUserDetails)
	// 		.then(() => this.setState({ newUserDetails: null }))
	// 		.then(() => this.updateUserState);
	// }
	// updateDetails(newDetails) {
	// 	this.setState({ newUserDetails: newDetails });
	// 	if (this.props.user) {
	// 		this.updateUserRemote(this.props.user);
	// 	}
	// }
	render() {
		return (
			<Router>
				<div className="header">
					<h1>
						Swansea University
						<br />
						Windsurfing Club
					</h1>
					<div className="account-buttons">
						{this.state.user ? (
							<div>
								<LogoutButton user={this.state.user} />
								<MyAccountButton user={this.state.user} />
							</div>
						) : (
							<div>
								<LoginButton />
								<CreateAccountButton />
							</div>
						)}
					</div>
				</div>
				<div
					className={
						this.state.sticky
							? "navigation-div sticky"
							: "navigation-div"
					}
				>
					<Navigation showMobileNav={this.state.showMobileNav} />
				</div>
				<div className="content">
					<Switch>
						<Route
							path="/login"
							render={(props) => <Login user={this.state.user} />}
						/>
						<Route
							path="/create-account"
							render={(props) => (
								<CreateAccount
									user={this.state.user}
									updateDetails={this.updateDetails}
								/>
							)}
						/>
						<Route
							path="/my-account"
							render={(props) => (
								<MyAccount user={this.state.user} />
							)}
						/>
						<Route
							path="/admin"
							render={(props) => (
								<Admin
									user={this.state.user}
									userPermissions={this.state.userPermissions}
								/>
							)}
						/>
						<Route
							path="/about-us"
							render={(props) => <AboutUs {...props} />}
						/>
						<Route
							path="/committee"
							render={(props) => <Committee {...props} />}
						/>
						<Route
							path="/competition-results"
							render={(props) => (
								<CompetitionResults {...props} />
							)}
						/>
						<Route
							path="/holiday"
							render={(props) => <Holiday {...props} />}
						/>
						<Route
							path="/session-sign-up"
							render={(props) => (
								<SessionSignUp user={this.state.user} />
							)}
						/>
						<Route
							path="/events"
							render={(props) => <SWAEvents {...props} />}
						/>
						<Route
							path="/"
							render={(props) => <Index {...props} />}
						/>
					</Switch>
				</div>
				<div className="footer">
					<Footer />
				</div>
				<ScrollToTop />
			</Router>
		);
	}
}
export default App;
