import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/navigation";
import Footer from "./components/footer.js";
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
				<div className="navigation-div">
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
			</Router>
		);
	}

	// componentDidMount() {
	// 	let navdiv = document.getElementById("navigation-div");
	// 	const threshold = 40; //navdiv.offsetTop;
	// 	const vw = Math.max(
	// 		document.documentElement.clientWidth || 0,
	// 		window.innerWidth || 0
	// 	);
	// 	const mobileMode = 850;
	// 	window.addEventListener(
	// 		"scroll",
	// 		this.handleScroll(threshold, vw, mobileMode)
	// 	);
	// }
	// handleScroll(threshold, vw) {
	// 	let navdiv = document.getElementById("navigation-div");
	// 	if (window.pageYOffset >= threshold) {
	// 		navdiv.classList.add("sticky");
	// 	} else {
	// 		navdiv.classList.remove("sticky");
	// 	}
	// 	if (vw < mobileMode) {
	// 		let navlist = document.getElementById("navlist");
	// 		navlist.style.display = "none";
	// 	}
	// }
}

//Finds the offset of the content part of the page

//Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//Also minimises the navbar on scroll
// 	function stickyNav() {

// 	}
// </script>
// <script>
// 	//Makes mobile navbar button work
// 	function displayNav() {
// 		var navlist = document.getElementById("navlist");
// 		if (navlist.style.display === "block") {
// 			navlist.style.display = "none";
// 		} else {
// 			navlist.style.display = "block";
// 		}
// 	}
// </script>

export default App;
