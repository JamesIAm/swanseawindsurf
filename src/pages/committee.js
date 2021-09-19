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
				Each year at our AGM, SUWC elects a new committee to continue bringing
				you the best windsurfing experience in south wales. Here is a little bit
				of info about each member and what their role is in the club!
			</p>

			<div className="deck">
				<div className="row">
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Harry-->*/}
						<div className="row">
							<img
								src={harry}
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
								Harry has been windsurfing on and off since he was about 12 and
								this year takes on the role of President. And he wants to push
								the club as far as he can. Also Harry loves any excuse for a
								good night out and he cant wait to see all the new faces and old
								out on wind street.
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
								Joe started windsurfing when he was younger but only properly
								got back into it 2 years ago. He is now trying to constantly
								improve his skills while at the same to provide as many laughs
								to the club at both sessions and events as humanly possible.
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Charles-->*/}
						<div className="row">
							<img
								src={owen}
								alt="Photo of the treasurer"
								className="img-fluid"
							/>
							<div className="col-6 name_box">
								<div className="name_text left_text">
									<h3>Charles Lycett</h3>
									<h4>Treasurer</h4>
								</div>
							</div>
						</div>
						<ul>
							<li>Studies: Aerospace Engineering</li>
							<li>Windsurfing level: Advanced</li>
							<li>
								Charles started at the club last year and loves being on the
								water. quickly earning the name silly fresher due to his antics
								on nights out and He is sure his maths skills will pay off with
								being treasure this year.
							</li>
						</ul>
					</div>
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Max-->*/}
						<div className="row">
							<div className="col-6 name_box">
								<div className="name_text right_text">
									<h3>Sophie Pearce</h3>
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
							<li>Studies: Human Geography</li>
							<li>Windsurfing level: Intermediate</li>
							<li>
								Dark horse of the year 2018/19, Max thrilled us all with his
								antics on our last trip to Sardinia, with an innocent nap in a
								neighbouring field resulting in some very concerned windsurfers.
								He was part of our BUCS winning team in 2019 though, so more
								than made up for it. Max is also a intermediate windsurf
								instructor who has been windsurfing since he was 14.
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
								Guy joined the club in 2019 with some experience windsurfing but
								has improved a lot since he joined in his first year. He is well
								versed in the art of a good night out and is excited to organise
								fun socials this year that everyone can enjoy, as well as diving
								in to everything else the club has to offer.
							</li>
						</ul>
					</div>
					<div className="col-md-6 col-sm-12 top_trump">
						{/*<!--Iva-->*/}
						<div className="row">
							<div className="col-6 name_box">
								<div className="name_text right_text">
									<h3>Kathryn Lock</h3>
									<h4>Events Manager</h4>
								</div>
							</div>
							<img
								src={iva}
								alt="Photo of the social secratary"
								className="img-fluid"
							/>
						</div>
						<ul>
							<li>Studies: clinical psychology masters</li>
							<li>Windsurfing level: Intermediate</li>
							<li>
								Hi everyone, I’m Kathryn and I’m incredibly excited to start my
								fifth year as a member of Swansea Windsurfing Club! Having being
								a member of the club for so many years you’d assume that I was a
								skilled windsurfer… however, this is not the case. I love
								spending time on the water, but I am definitely a more seasoned
								party goer rather than sailor. This year I will be juggling my
								role of events manager with my clinical psychology masters. You
								can expect me to organise an incredible wave event, be forever
								nagging you all to purchase tickets for the other amazing SWA
								events and see me cutting shapes on the dance floor to some
								sweet 00’s tunes.💃💫
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Committee;
