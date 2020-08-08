import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/footer.js";
import Index from "./pages/home.js";
import AboutUs from "./pages/about-us";
import Committee from "./pages/committee";
import CompetitionResults from "./pages/competition-results";
import Holiday from "./pages/holiday";
import SessionSignUp from "./pages/session-sign-up";
import SWAEvents from "./pages/swa-events";
import Login from "./pages/login.js";

import firebase, { auth, provider } from "./components/firebase.js";
//require("firebase/auth");
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sticky: false,
			user: null,
		};
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
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
				console.log(this.state.user);
			}
		});
	}
	stickyNav() {
		this.setState({
			sticky: window.pageYOffset >= this.state.height * 0.1,
		});
	}
	login(user) {
		this.setState({ user });
	}
	logout() {
		this.setState({
			user: null,
		});
	}
	render() {
		return (
			<Router>
				<div className="header">
					<h1>
						Swansea University
						<br />
						Windsurfing Club
					</h1>
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
							render={(props) => (
								<Login
									logout={this.logout}
									login={this.login}
									user={this.state.user}
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
							render={(props) => <SessionSignUp {...props} />}
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
