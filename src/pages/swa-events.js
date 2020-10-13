import React from "react";
import "../static/library.css";

//import LibraryBuilder from "../components/libraryBuilder";

import AK17 from "../images/events/1819/AK17.jpg";
import BR3 from "../images/events/1819/brum3.jpg";
import NM9 from "../images/events/1819/northernMonkey9.jpg";
import SS3 from "../images/events/1819/swanseaSeamen3.jpg";
import AK18 from "../images/events/1920/ak.jpg";
import BR4 from "../images/events/1920/brum.jpg";
import SS4 from "../images/events/1920/swansea.jpg";
import PL13 from "../images/events/1920/pondlife.jpg";
import NM10 from "../images/events/1920/liverpool.jpg";

class SWAEvents extends React.Component {
	render() {
		return (
			<div>
				<div className="article">
					{/* <div>
						<LibraryBuilder filePath="events" />
					</div> */}
					<h2>SWA Events</h2>
					<p>
						Student Windsurfing in the UK is supported by the
						<a
							href="https://www.studentwindsurfing.co.uk/"
							className="content-text"
						>
							Student Windsurfing Association
						</a>
						. It coordinates and advertises 8 student events around
						the UK each year, each hosted by different universities,
						all of which are a lot of fun, even in the case that the
						wind doesn't show up! Hundereds of student windsurfers
						turn out for these each year, with Swansea always
						producing a strong showing. Here are some pics to show
						you what is on offer each year!
					</p>
					{/*<!--img className="col-2" src="src/images/swa.png"-->*/}
				</div>
				<div className="library">
					{/*<section>
					<hr />
					{INSERT YEAR HERE}
					<div className="snippet row">{INSERT EVENT NAME HERE}
						<div className="col-xs-12 col-xl-4">
							<div className="snippet_text">
								<h2>EVENT NAME</h2>
								<p>EVENT DESCRIPTION</p>
								<div className="row buttons">
									<a href="EVENT LINK">SWA debrief</a>
								</div>
							</div>
						</div>
						<div className="col-xs-12 col-xl-8 snippet_image">
							<img src={INSERT IMAGE HERE} />
						</div>
					</div>
				</section>*/}
					<section>
						<hr />
						{/*<!--1920-->*/}
						<div className="snippet row">
							{/*Northern Monkey X*/}
							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={NM10} />
							</div>
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Northern Monkey XIII</h2>
									<p>
										Heading up to Liverpool for the weekend,
										our windsurfers gladly headed to
										Einstein's for a stein or 3. Catching up
										with old faces and meeting some new
										ones, the night went all too quickly.
										<br />
										<br />
										After a not-very-early start on the next
										morning, we went down to West Kirby
										marina, where a merciless 22 knots made
										for some incredible advanced racing.
										<br />
										<br />
										As the SWA retreated home from the cold,
										preparations began for the evening's
										antics. Pokemon costumes were donned,
										drinks were consumed and pizzas were
										slightly burnt before we headed out to
										Soho for the night.
										<br />
										<br />
										Sunday was somewhat more forgiving in
										terms of wind, with windsurfers of all
										abilities blasting across the marina.
										After some lunch from the barbecue,
										Swansea claimed first prize in the team
										racing (naturally) and we came home with
										our heads held high.
									</p>
									<div className="row buttons">
										<a href="https://www.studentwindsurfing.co.uk/events/articles/2019-2020/northern-monkey-x-level-up">
											SWA debrief
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="snippet row">
							{/*Pondlife XIII*/}
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Nottingham Pondlife: XIII</h2>
									<p>
										This year saw the return of Pondlife,
										and everyone was happy to see it. After
										the drive up, everyone descended on
										Bierkeller for a stein and a game of
										beer pong whilst we registered, and from
										there on to Bodega.
										<br />
										<br /> As Saturday night morning came
										the wind came with it. A massive wind
										gusting up to 30knots made for some
										fascinating advanced and team racing.
										<br />
										<br />
										Then Saturday night arrived. After a
										quick trip to Lidl for some last minute
										outfits, we donned our Greek outfits and
										headed out to Rescue Rooms. The
										Nottingham club has secured us a private
										room upstairs, which was fantastic and
										allowed for some full force SWA antics.
										<br />
										<br /> Sunday morning (it was the
										afternoon if we're being totally honest)
										saw the intermediate racing, and then
										everyone gathered by a smaller lake to
										watch the beginners race. Despite some
										unorthadox methods of propulsion, it was
										fantastic to see so many of our new
										members getting involved in the racing.
									</p>
									<div className="row buttons">
										<a href="https://www.studentwindsurfing.co.uk/events/articles/2019-2020/nottingham-2020-pondlife">
											SWA debrief
										</a>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={PL13} />
							</div>
						</div>
						<div className="snippet row">
							{/*Swansea Seamen IV*/}
							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={SS4} />
							</div>
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Swansea Seamen IV</h2>
									<p>
										For the fourth year running Swansea
										University hosted the first wave event
										of the year! Windsurfers from all around
										the country gathered in Costa del Swans
										for a weekend tearing up Wind Street and
										the waves on Trecco Bay.
										<br />
										<br />
										On Friday night, after checking into
										their 5 star Brynmill homes, students
										hastily made their way to Swansea’s
										premier SU club, Tooters (!TOOT TOOT!).
										£1 shots, bombs and VK’s ensured that
										everyone was suitably drunk and ready to
										bogey on down to the cheesy hits that
										were delivered. The hot and sweaty night
										out was perfectly complimented with the
										chilly winds that promptly cured
										everyone’s hangovers the next morning.
										<br />
										<br />
										Windsurfers were delighted by the strong
										winds that greeted them on Saturday
										morning. With speeds of up to 30 knots
										Trecco Bay was the perfect place for
										intermediates and experts to show their
										wave sailing skills. The day consisted
										of some amazing free sailing and big
										efforts to warm up after.
										<br />
										<br />
										Following a quick clear up of the bay,
										students made their way back to Brynmill
										where their hunger was satisfied by
										Tescos finest pizzas. Dinner was
										followed by a round of pres and getting
										ready for the fancy-dress theme of
										social cliques. By 12, Swansea’s
										Bierkeller was full of goths, jocks and
										gap yarrrh travellers. Steins in hands
										and dancing on the table provided
										everyone with the messy night out they
										were after. Students staggered home in
										the early hours of the morning ensuring
										that they made one last stop at the
										kebab house on the way home.
										<br />
										<br />
										Sunday was a much slower start. Steins
										of beer were replaced with cups of
										coffee and crispy bacon sandwiches were
										a necessity. Due to the low winds many
										windsurfers decided not to drive to
										Trecco Bay but instead took an easy
										stroll on Swansea Beach. The sunshine
										and the sand was the perfect way to end
										the weekend and conclude everyone’s
										little holiday to Costa del Swans.
										Although racing and free style
										competitions did not take place, the
										event was still very much a success and
										enjoyed by all.
									</p>
									<div className="row buttons">
										<a href="https://www.studentwindsurfing.co.uk/events/calendar/event?event=152">
											SWA debrief
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="snippet row">
							{/*Up the Brum IV*/}
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Up the Brum IV</h2>
									<p>
										Jake Roberts heroically headed off to
										Birmingham all alone for Up the Brum IV
										(due to some slight organisation issues
										by the rest of the committee).
										<br />
										<br /> But Jake was far from lonely, he
										met up with the UWE club and proceeded
										to enjoy Birmingham, stopping along the
										way to pick up a win in the Advanced
										racing.
									</p>
									<div className="row buttons">
										<a href="https://www.studentwindsurfing.co.uk/events/articles/2019-2020/up-the-brum-iv-the-end-is-cumming">
											SWA debrief
										</a>
									</div>
								</div>
							</div>
							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={BR4} />
							</div>
						</div>
						<div className="snippet row">
							{/*Aussie Kiss 18*/}
							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={AK18} />
							</div>
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Aussie Kiss 18</h2>
									<p>
										We turned up on friday to find that the
										lake had unfortunately migrated to the
										field where we were supposed to be
										camping. Pressing on regardless we threw
										up some tents and headed over to the SWA
										party tent, until 2am when we all
										dragged ourselves in to bed considerably
										more muddy than when we left.
										<br />
										<br />
										For the Swans Saturday consisted of
										sitting on boards, enjoying the weather.
										Before grabbing some kit and heading out
										to have a play, or compete in the
										freestyle competition.
										<br />
										<br />
										For the Saturday night party, the boys
										and girls of Swansea dressed up as the
										opposite gender (for the theme of
										Opposites Attract) and headed back in to
										the even muddier party tent to enjoy the
										silent disco.
										<br /> <br />
										Sunday morning bought a fresh crop of
										hangovers and more importantly, a fresh
										breeze that allowed for some interesting
										racing. All yawns were instantly
										abondoned and the eager racers lept to
										action. After some nailbaiting races,
										some sleepy Swans set off home.
									</p>
									<div className="row buttons">
										<a href="https://www.studentwindsurfing.co.uk/events/articles/2019-2020/aussie-kiss-18-debrief">
											SWA debrief
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section>
						{/*<!--1819-->*/}
						<hr />

						<div className="snippet row">
							{/*<!--Brum 3-->*/}
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Up the Brum III</h2>
									<p>
										Birmingham hosted their third SWA event
										this year. With absolutely ripping
										conditions at the West Midlands
										reservoir, it made for some gnarly,
										albeit freezing, competition. Swansea's
										fancy dress theme for the Saturday night
										was Crystal Balls, so everyone got
										sparkly af on Broad Street!
									</p>
									<div className="row buttons">
										<a href="https://www.studentwindsurfing.co.uk/events/snippets/2018-19/brum">
											SWA debrief
										</a>
									</div>
								</div>
							</div>

							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={BR3} />
							</div>
						</div>
						<div className="snippet row">
							{/*<!--Swansea 3-->*/}
							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={SS3} />
							</div>
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Swansea Seamen III</h2>
									<p>
										Swansea got the chance to host our
										second 'Wave' event and third SWA event
										in December 2018. We are blessed here in
										South Wales with consistent wind and
										waves, making it one of the best spots
										in the UK to have a wave sailing event.
										It was great to see newbies taking their
										first steps into wave sailing before
										smashing Wind Street and Tooters later
										on!
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
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Northern Monkey IX</h2>
									<p>
										Swansea made the trip up to Liverpool in
										early November fresh from the hype built
										from Aussie Kiss - and were not
										disappointed! Our gracious host had us
										straight into the action as soon as we
										stepped through their door on Friday
										night, and didn't let up all weekend.
										One of the best weekends of the year,
										any Swan who was there will fondly
										recall the various entities consumed via
										shoe by some of the more unfortunate
										participants in truth or dare.
									</p>
									<div className="row buttons">
										<a href="https://www.studentwindsurfing.co.uk/events/snippets/2018-19/northern-monkey-is-just-around-the-corner">
											SWA debrief
										</a>
									</div>
								</div>
							</div>

							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={NM9} />
							</div>
						</div>
						<div className="snippet row">
							{/*<!--AK17-->*/}
							<div className="col-xs-12 col-xl-8 snippet_image">
								<img src={AK17} />
							</div>
							<div className="col-xs-12 col-xl-4">
								<div className="snippet_text">
									<h2>Aussie Kiss 17</h2>
									<p>
										Aussie Kiss is a massive student
										windsurfing festival hosted by the SWA
										to bring in the new windsurfing season
										each year. In 2018 it found a new home
										at Llandegfedd Reservoir in South Wales,
										just north of Newport (very convenient
										for Swansea!). This year unfortunately
										the wind did not deliver, but thankfully
										the party did, with the big tent put up
										to house the lash antics absolutely
										bouncing for both nights. It's one of
										the best weekends in the windsurfing
										calender, and absolutely not to be
										missed. If you're thinking about doing
										windsurfing at uni, this weekend will
										convince you!
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
	}
}

export default SWAEvents;
