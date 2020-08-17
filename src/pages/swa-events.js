import React from "react";
import "../static/library.css";

import AK17 from "../images/events/1819/AK17.jpg";
import BR9 from "../images/events/1819/brum3.jpg";
import NM9 from "../images/events/1819/northernMonkey9.jpg";
import SS3 from "../images/events/1819/swanseaSeamen3.jpg";

const SWAEvents = () => {
	return (
		<div>
			<div className="article">
				<h2>SWA Events</h2>
				<p>
					Student Windsurfing in the UK is supported by the
					<a
						href="https://www.studentwindsurfing.co.uk/"
						className="content-text"
					>
						Student Windsurfing Association
					</a>
					. It coordinates and advertises 8 student events around the
					UK each year, each hosted by different universities, all of
					which are a lot of fun, even in the case that the wind
					doesn't show up! Hundereds of student windsurfers turn out
					for these each year, with Swansea always producing a strong
					showing. Here are some pics to show you what is on offer
					each year!
				</p>
				{/*<!--img className="col-2" src="src/images/swa.png"-->*/}
			</div>
			<div className="library">
				<section>
					{/*<!--1819-->*/}
					<div className="snippet row">
						{/*<!--Brum 3-->*/}
						<div className="col-xs-12 col-lg-4">
							<div className="snippet_text">
								<h2>Up the Brum III</h2>
								<p>
									Birmingham hosted their third SWA event this
									year. With absolutely ripping conditions at
									the West Midlands reservoir, it made for
									some gnarly, albeit freezing, competition.
									Swansea's fancy dress theme for the Saturday
									night was Crystal Balls, so everyone got
									sparkly af on Broad Street!
								</p>
								<div className="row buttons">
									<a href="https://www.studentwindsurfing.co.uk/events/snippets/2018-19/brum">
										SWA debrief
									</a>
								</div>
							</div>
						</div>

						<div className="col-xs-12 col-lg-8">
							<img src={BR9} />
						</div>
					</div>
					<div className="snippet row">
						{/*<!--Swansea 3-->*/}
						<div className="col-xs-12 col-lg-8">
							<img src={SS3} />
						</div>
						<div className="col-xs-12 col-lg-4">
							<div className="snippet_text">
								<h2>Swansea Seamen III</h2>
								<p>
									Swansea got the chance to host our second
									'Wave' event and third SWA event in December
									2018. We are blessed here in South Wales
									with consistent wind and waves, making it
									one of the best spots in the UK to have a
									wave sailing event. It was great to see
									newbies taking their first steps into wave
									sailing before smashing Wind Street and
									Tooters later on!
								</p>
								<div className="row buttons">
									<a href="https://www.studentwindsurfing.co.uk/events/snippets/2018-19/swansea-seamen">
										SWA debrief
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="snippet row">
						{/*<!--Northern Monkey 9-->*/}
						<div className="col-xs-12 col-lg-4">
							<div className="snippet_text">
								<h2>Northern Monkey IX</h2>
								<p>
									Swansea made the trip up to Liverpool in
									early November fresh from the hype built
									from Aussie Kiss - and were not
									disappointed! Our gracious host had us
									straight into the action as soon as we
									stepped through their door on Friday night,
									and didn't let up all weekend. One of the
									best weekends of the year, any Swan who was
									there will fondly recall the various
									entities consumed via shoe by some of the
									more unfortunate participants in truth or
									dare.
								</p>
								<div className="row buttons">
									<a href="https://www.studentwindsurfing.co.uk/events/snippets/2018-19/northern-monkey-is-just-around-the-corner">
										SWA brief
									</a>
								</div>
							</div>
						</div>

						<div className="col-xs-12 col-lg-8">
							<img src={NM9} />
						</div>
					</div>
					<div className="snippet row">
						{/*<!--AK17-->*/}
						<div className="col-xs-12 col-lg-8">
							<img src={AK17} />
						</div>
						<div className="col-xs-12 col-lg-4">
							<div className="snippet_text">
								<h2>Aussie Kiss 17</h2>
								<p>
									Aussie Kiss is a massive student windsurfing
									festival hosted by the SWA to bring in the
									new windsurfing season each year. In 2018 it
									found a new home at Llandegfedd Reservoir in
									South Wales, just north of Newport (very
									convenient for Swansea!). This year
									unfortunately the wind did not deliver, but
									thankfully the party did, with the big tent
									put up to house the lash antics absolutely
									bouncing for both nights. It's one of the
									best weekends in the windsurfing calender,
									and absolutely not to be missed. If you're
									thinking about doing windsurfing at uni,
									this weekend will convince you!
								</p>
								<div className="row buttons">
									<a href="https://www.studentwindsurfing.co.uk/events/snippets/2018-19/ak-report">
										SWA debrief
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default SWAEvents;
