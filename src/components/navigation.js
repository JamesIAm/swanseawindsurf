import React from "react";
import { Link } from "react-router-dom";

function displayNav() {}

const Navigation = (
	<div>
		<button onClick={displayNav()} className="mobile_nav_button">
			Menu
		</button>

		<ul className="navlist">
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
				<Link to="/competition-results">Competition Results</Link>
			</li>
			<li>
				<Link to="holiday">Sardinia 2018</Link>
			</li>
		</ul>
	</div>
);

export default Navigation;
