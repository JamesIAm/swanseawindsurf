import React from "react";
import "../static/article.css";

const SessionSignUp = () => {
	return (
		<div className="article">
			<h2 className="content-text">
				Sign up here for next week's session!
			</h2>
			<form action="./php/attendees.php" method="POST">
				<h2 className="content-text">Enter your details:</h2>
				<ul>
					<section className="content content-text">
						<label for="fullname">
							<b>Full Name</b>
						</label>
						<input type="text" id="fullname" name="name" required />
					</section>

					<br />

					<section className="content content-text">
						<label for="email">
							<b>E-Mail Address</b>
						</label>
						<input type="email" id="email" name="email" required />
					</section>

					<br />

					<section className="content content-text">
						<span>
							<b>
								Would you like picking up from Singleton Campus
								or Bay Campus?
							</b>
							<br />
						</span>
						{/*<!--<input type="text" id="location" name="location">-->*/}
						<input
							type="radio"
							id="location"
							name="location"
							value="Singleton"
							required
						/>
						Singleton
						<br />
						<input
							type="radio"
							id="location"
							name="location"
							value="Bay"
							required
						/>
						Bay
						<br />
						<input
							type="radio"
							id="location"
							name="location"
							value="Other"
							required
						/>
						N/A
					</section>

					<br />

					<section className="content content-text" id="session form">
						<span>
							<b>Which session would you like to book for?</b>
							<br />
							<br />
						</span>
					</section>

					<section className="submission">
						<button type="submit">Submit Details</button>
					</section>
				</ul>
			</form>
		</div>
	);
};

export default SessionSignUp;
