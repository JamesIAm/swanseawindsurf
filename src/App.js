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

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sticky: false,
		};
	}
	useEffect() {
		window.scrollTo(0, 0);
	}
	componentDidMount() {
		window.addEventListener("scroll", () => this.stickyNav(this));
		const height = window.innerHeight;
		this.setState({ height });
	}
	stickyNav() {
		this.setState({
			sticky: window.pageYOffset >= this.state.height * 0.1,
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
					<Navigation />
				</div>
				<div className="content">
					<Switch>
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
