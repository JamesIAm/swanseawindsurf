import React from "react";
import "../static/topTrumps.css";
import "../static/article.css";

import joe from "../images/committee/current/joe.jpg";
import harry from "../images/committee/current/harry.jpg";
import owen from "../images/committee/current/owen.jpg";
import max from "../images/committee/current/max.jpg";
import guy from "../images/committee/current/guy.jpg";
import iva from "../images/committee/current/iva.jpg";
import james from "../images/committee/current/james.jpg";

const Committee = () => {
	return (
		<div className="article">
			<h2 className="col-12">Meet the Committee</h2>
			<p className="col-12">
				Each year at our AGM, SUWC elects a new committee to continue
				bringing you the best windsurfing experience in south wales.
				Here is a little bit of info about each member and what their
				role is in the club!
			</p>

			<div className="deck">
				<div className="row">
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Harry-->*/}
						<div className="row">
							<img
								src={joe}
								alt="Photo of the captain"
								className="img-fluid"
							/>
							<div className="col-6 name_box">
								<div className="name_text left_text">
									<h3>Harry Porteous</h3>
									<h4>President</h4>
								</div>
							</div>
						</div>
						<ul>
							<li>Studies: Aerospace Engineering</li>
							<li>Windsurfing Level: Advanced</li>
							<li>
								
								Harry has been windsurfing on and off since he
								was about 12 and takes on the role of President. 
								And he wants to push the club as far as he can.
								Also Harry loves any excuse for a
								good night out and he cant wait to see all the 
								new faces and old out on wind street.
							</li>
						</ul>
					</div>
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Joe-->*/}
						<div className="row">
							<div className="col-6 name_box">
								<div className="name_text right_text">
									<h3>Joe Cave</h3>
									<h4>Vice President</h4>
								</div>
							</div>
							<img
								src={joe}
								alt="Photo of the vice captain"
								className="img-fluid"
							/>
						</div>
						<ul>
							<li>Studies: Materials Engineering</li>
							<li>Windsurfing level: Intermediate</li>
							<li>
								Joe started windsurfing when he was younger but
								only properly got back into it 2 years ago. He
								is now trying to constantly improve his skills
								while at the same to provide as many laughs to
								the club at both sessions and events as humanly
								possible.
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Owen-->*/}
						<div className="row">
							<img
								src={owen}
								alt="Photo of the treasurer"
								className="img-fluid"
							/>
							<div className="col-6 name_box">
								<div className="name_text left_text">
									<h3>Owen Lawrence</h3>
									<h4>Treasurer</h4>
								</div>
							</div>
						</div>
						<ul>
							<li>Studies: Computer Science</li>
							<li>Windsurfing level: Improver</li>
							<li>
								Owen began windsurfing when he joined the
								windsurfing club last year, and has been
								steadily honing his skills since. A few trips to
								the core windsurfing events around the UK has
								greatly boosted his performance in both
								windsurfing and acting as sat-nav for the
								journeys there and back.
							</li>
						</ul>
					</div>
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Max-->*/}
						<div className="row">
							<div className="col-6 name_box">
								<div className="name_text right_text">
									<h3>Max Graham</h3>
									<h4>Secretary</h4>
								</div>
							</div>
							<img
								src={max}
								alt="Photo of the secratary"
								className="img-fluid"
							/>
						</div>
						<ul>
							<li>Studies: Mathematics</li>
							<li>Windsurfing level: Advanced</li>
							<li>
								Dark horse of the year 2018/19, Max thrilled us
								all with his antics on our last trip to
								Sardinia, with an innocent nap in a neighbouring
								field resulting in some very concerned
								windsurfers. He was part of our BUCS winning
								team in 2019 though, so more than made up for
								it. Max is also a intermediate windsurf
								instructor who has been windsurfing since he was
								14.
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Guy-->}*/}
						<div className="row">
							<img
								src={guy}
								alt="Photo of the social secratary"
								className="img-fluid"
							/>
							<div className="col-6 name_box">
								<div className="name_text left_text">
									<h3>Guy Rosenthal</h3>
									<h4>Social Secretary</h4>
								</div>
							</div>
						</div>
						<ul>
							<li>Studies: Criminology and Criminal Justice</li>
							<li>Windsurfing level: Intermediate</li>
							<li>
								Guy joined the club last year as a fresher with
								some experience windsurfing but has improved a
								lot since last September. He is well versed in
								the art of a good night out and is excited to
								organise fun socials this year that everyone can
								enjoy, as well as diving in to everything else
								the club has to offer.
							</li>
						</ul>
					</div>
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Iva-->*/}
						<div className="row">
							<div className="col-6 name_box">
								<div className="name_text right_text">
									<h3>Iva Fristikova</h3>
									<h4>Social Secretary</h4>
								</div>
							</div>
							<img
								src={iva}
								alt="Photo of the social secratary"
								className="img-fluid"
							/>
						</div>
						<ul>
							<li>Studies: Modern languages</li>
							<li>
								Windsurfing level: Former Intermediate (tnks
								CO19)
							</li>
							<li>
								Iva joined our club only last year as a beginner
								in windsurfing, but together with her energetic
								easygoing personality, Slavic blood and stamina,
								and spectacular DIY costume-making skills she is
								starring this year as a social sec, ready to
								dive in to the windsurfing again and make every
								night out worth it.
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--James-->*/}
						<div className="row">
							<img
								src={james}
								alt="Photo of the events manager"
								className="img-fluid"
							/>
							<div className="col-6 name_box">
								<div className="name_text left_text">
									<h3>James Nahajski</h3>
									<h4>Events Manager</h4>
								</div>
							</div>
						</div>
						<ul>
							<li>Studies: Computer Science</li>
							<li>Windsurfing Level: Advanced</li>
							<li>
								James is an evergreen fresher. He started
								windsurfing when he joined the windsurfing club
								here in Swansea and has improved massively in
								his three years, making his way into the first
								team and joining in with some of the wave trips.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Committee;
