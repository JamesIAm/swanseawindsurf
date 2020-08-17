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
	AdminButton,
} from "./components/accountButtons";

import firebase, { auth, provider } from "./components/firebase.js";
//require("firebase/auth");

const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const errMsgPermissions =
	"Unfortunately you don't have the required permissions to view this data";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sticky: false,
			user: null,
			// newUserDetails: null,
			userInfo: null,
			userPermissions: null,
			userMembership: null,
			userName: null,
			userStudentNumber: null,
		};
		this.handleError = this.handleError.bind(this);
		this.getData = this.getData.bind(this);
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
				this.getData(user.uid);
				// if (this.state.newUserDetails) {
				// 	console.log(this);
				// 	this.updateUserRemote(user);
				// }
			} else {
				this.setState({ user: null });
			}
		});
	}
	getData(uid) {
		let usersData = firebase
			.database()
			.ref(`users/${uid}`)
			.once("value")
			.then((snapshot) =>
				this.setState({
					userInfo: snapshot.val().info,
					userPermissions: snapshot.val().role,
					userMembership: snapshot.val().info.private.membership,
					userName: snapshot.val().info.public.name,
					userStudentNumber: snapshot.val().info.public.studentNumber,
				})
			)
			.catch((error) => this.handleError(error));
	}
	stickyNav() {
		let sticky = window.pageYOffset >= this.state.height * 0.1;
		if (sticky !== this.state.sticky)
			this.setState({
				sticky,
			});
	}
	handleError(error) {
		let errorCode = error.code;
		let errorMessage = error.message;
		switch (errorCode) {
			case "PERMISSION_DENIED":
				this.setState({
					errorMessage: errMsgPermissions,
				});
				break;
			default:
				this.setState({
					errorMessage: errMsgUnknown,
				});
				console.error(
					"Code: " + errorCode + "\nMessage: " + errorMessage
				);
				break;
		}
	}
	accountButtons = () => {
		if (
			this.state.user &&
			(this.userPermissions === "admin" ||
				this.userPermissions === "superAdmin")
		) {
			return (
				<div className="account-buttons">
					<div>
						<LogoutButton user={this.state.user} />
						<MyAccountButton user={this.state.user} />
						<AdminButton user={this.state.user} />
					</div>
				</div>
			);
		} else if (this.state.user) {
			return (
				<div className="account-buttons">
					<div>
						<LogoutButton user={this.state.user} />
						<MyAccountButton user={this.state.user} />
						<AdminButton user={this.state.user} />
					</div>
				</div>
			);
		} else {
			return (
				<div className="account-buttons">
					<div>
						<LoginButton />
						<CreateAccountButton />
					</div>
				</div>
			);
		}
	};
	render() {
		return (
			<Router>
				<div className="header">
					<h1>
						Swansea University
						<br />
						Windsurfing Club
					</h1>
					{this.accountButtons()}
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
								<MyAccount
									user={this.state.user}
									userInfo={this.state.userInfo}
								/>
							)}
						/>
						<Route
							path="/admin"
							render={(props) => (
								<Admin
									user={this.state.user}
									permissions={this.state.userPermissions}
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
								<SessionSignUp
									user={this.state.user}
									membership={this.state.userMembership}
								/>
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
