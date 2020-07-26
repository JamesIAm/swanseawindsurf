import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from "./pages/home.js";
import AboutUs from "./pages/about-us";
import Committee from "./pages/committee";
import CompetitionResults from "./pages/competition-results";
import Holiday from "./pages/holiday";
import SessionSignUp from "./pages/session-sign-up";
import SWAEvents from "./pages/swa-events";

class App extends Component {
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
				<div className="navigation-div">{this.props.navigation}</div>
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
				<div className="footer">{this.props.footer}</div>
			</Router>
		);
	}
}

export default App;
