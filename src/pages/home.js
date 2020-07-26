import React from "react";
import { Link } from "react-router-dom";
import "../static/library.css";

import hero from "../images/index/hero-image.jpg";
import article1 from "../images/index/article1.jpg";
import article2 from "../images/index/article2.jpg";

class Index extends React.Component {
	render() {
		return (
			<div>
				<img className="hero" src={hero} />
				<div className="library">
					<div className="snippet row">
						<div className="col-xs-12 col-lg-4">
							<div className="snippet_text">
								<h2>Sign up for weekly sessions</h2>
								<p>
									We run Wednesday sessions every week during
									which you will get driven out to a lake
									where you'll recieve instruction, equipment
									hire, and a safety boat to help you out in
									case you get stuck. All of this only costs
									£6.
									<br />
									Click below to sign up for a session
								</p>
								<div className="row buttons">
									<Link to="/session-sign-up">Sign Up</Link>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-lg-8">
							<img src={article1} />
						</div>
					</div>
					<div className="snippet row">
						<div className="col-xs-12 col-lg-8">
							<img src={article2} />
						</div>
						<div className="col-xs-12 col-lg-4">
							<div className="snippet_text">
								<h2>SWA events</h2>
								<p>
									The Student Windsurfing Association (SWA)
									run events throughout the academic year.
									Windsurfing clubs from across the country
									convene on one university for a weekend
									packed with windsurfing two nights of
									fantastic nights out. If you want to read
									more about events that Swansea has been to
									in the past click below
								</p>
								<div className="row buttons">
									<Link to="/events">Find out more</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Index;
