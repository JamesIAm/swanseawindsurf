import React from "react";
import "../static/article.css";

const CompetitionResults = () => {
	return (
		<div className="article">
			<h2 className="content-text">Competition Results</h2>
			{/*<!--1819-->*/}
			<section>
				<h3>2018/19 Season</h3>
				<p className="content-text">
					Team Members: Jake Roberts, Tom Addison, Orestis Delardas,
					Max Graham
				</p>
				<p className="content-text">
					A fantastic season for the Swans, cleaning up at BUCS and
					picking up a lot of big SWA series wins.
				</p>

				<section>
					{/*<!--End of season awards-->*/}
					<h4 className="content-text">End of Season SWA Awards</h4>
					<ul className="content-text">
						<li>King of The Wind: Jake Roberts (1st)</li>
						<li>Queen of the Wind: Eleanor Southwell (2nd)</li>
						<li>Race Series: Jake Roberts (1st)</li>
						<li>Freestyle Series Jake Roberts (2nd)</li>
					</ul>
				</section>
				<section>
					{/*<!--Nationals-->*/}
					<h4 className="content-text">
						BUCS Nationals: Baylord III
					</h4>
					<ul className="content-text">
						<li>Team Racing: 1st</li>
						<li>
							Individual Racing (Advanced): Tom Addison (2nd),
							Jake Roberts (3rd), James Nahajski (`&gt`10th), Max
							Graham (`&gt`10th)
						</li>
						<li>
							Individual Racing (Intermediate): Robin Szabo
							(`&gt`10th), Eleanor Southwell (`&gt`10th)
						</li>
						<li>
							Freestyle: Tom Addison (2nd), Jake Roberts (4th)
						</li>
					</ul>
				</section>
				<section>
					{/*<!--BarBrUwe-->*/}
					<h4 className="content-text">
						Bristol: BrUWE Wet Dreams IX
					</h4>
					<ul className="content-text">
						<li>Team Racing: DNC</li>
						<li>
							Individual Racing (Advanced): Jake Roberts (1st)
						</li>
						<li>Freestyle: Jake Roberts (1st)</li>
					</ul>
				</section>
				<section>
					{/*<!--Up the Brum-->*/}
					<h4 className="content-text">
						Birmingham: Up the Brum III
					</h4>
					<ul className="content-text">
						<li>Team Racing: DNC</li>
						<li>
							Individual Racing (Intermediate): Harriet Wright
							(3rd)
						</li>
						<li>
							Individual Racing (Beginner): Dom Fogden (Final)
						</li>
						<li>Freestyle: Jake Roberts (3rd)</li>
					</ul>
				</section>
				<section>
					{/*<!--Northern Monkey-->*/}
					<h4 className="content-text">
						Liverpool: Northern Monkey IX
					</h4>
					<ul className="content-text">
						<li>Team Racing: Final</li>
						<li>
							Individual Racing (Advanced): Jake Roberts (1st),
							Tom Addison (2nd)
						</li>
						<li>Freestyle: DNC</li>
					</ul>
				</section>
				<section>
					{/*<!--Aussie Kiss-->*/}
					<h4 className="content-text">Aussie Kiss 17</h4>
					<ul className="content-text">
						<li>Team Racing: Heats</li>
						<li>Individual Racing: DNC</li>
						<li>Freestyle: Tom Addison (3rd)</li>
					</ul>
				</section>
			</section>
		</div>
	);
};

export default CompetitionResults;
