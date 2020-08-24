import React from "react";
import "../static/article.css";
import "../static/gallery.css";

import main_2020_1 from "../images/holidays/swansea20/mainImage.jpg";
import gallery_2020_1 from "../images/holidays/swansea20/gallery1.jpg";
import gallery_2020_2 from "../images/holidays/swansea20/gallery2.jpg";
import gallery_2020_3 from "../images/holidays/swansea20/gallery3.jpg";
import gallery_2020_4 from "../images/holidays/swansea20/gallery4.jpg";

import main_2019_1 from "../images/holidays/sardinia19/mainImage.jpg";
import gallery_2019_1 from "../images/holidays/sardinia19/gallery1.jpg";
import gallery_2019_2 from "../images/holidays/sardinia19/gallery2.jpg";
import gallery_2019_3 from "../images/holidays/sardinia19/gallery3.jpg";
import gallery_2019_4 from "../images/holidays/sardinia19/gallery4.jpg";

import main_2018_1 from "../images/holidays/sardinia18/mainImage.jpg";
import gallery_2018_1 from "../images/holidays/sardinia18/gallery1.jpg";
import gallery_2018_2 from "../images/holidays/sardinia18/gallery2.jpg";
import gallery_2018_3 from "../images/holidays/sardinia18/gallery3.jpg";
import gallery_2018_4 from "../images/holidays/sardinia18/gallery4.jpg";

const Holiday = () => {
	return (
		<div>
			<div className="article">
				<h2 className="content-text">Swansea 2020</h2>
				<img src={main_2020_1} className="main_image" />

				<h4 className="content-text">Lockdown lunacy</h4>
				<p className="content-text">
					Due to Coronavirus, the 2020 holiday was unfortunately not
					able to go ahead (we were going to be headed to Rhodes).
					Whilst everyone was disappointed to be missing out, here's a
					couple of pictures of what people got up to instead.
				</p>
				<div className="gallery">
					<img src={gallery_2020_1} className="quarters" />
					<img src={gallery_2020_2} className="quarters" />
					<img src={gallery_2020_3} className="quarters" />
					<img src={gallery_2020_4} className="quarters" />
				</div>
			</div>

			<div className="article">
				<h2 className="content-text">Sardinia 2019</h2>
				<img
					src={main_2019_1}
					alt="Windsurfing into the distance"
					className="main_image"
				/>

				<h4 className="content-text">Sardinia squad</h4>
				<p className="content-text">
					In 2019 the SUWC returned to Sardinia after such a fantastic
					year previously. The wind was fantastic, with some days
					suitable for beginners and some more suited to the advanced
					sailors and the crazier beginners. <br />
					After challenging a rental car's suspension with the sheer
					weight of beer in the boot, we had tons of fun knocking back
					Best Bräus and wine on the beach. Towards the end of the
					holiday, the infamous beach olympics made a return, with all
					sort of non-regulation sports, like wheel barrow races, and
					lots of spinning, which ended with Max Max playing some
					impromptu hide and seek with the rest of the club.
					<br /> On the few days that there was little wind, we rented
					kayaks and stand up paddleboards, and paddled out to various
					beaches to work on our tan (spelt b-u-r-n).
				</p>
				<div className="gallery">
					<img src={gallery_2019_1} className="quarters" />
					<img src={gallery_2019_2} className="quarters" />
					<img src={gallery_2019_3} className="quarters" />
					<img src={gallery_2019_4} className="quarters" />
				</div>
			</div>
			<div className="article">
				<h2 className="content-text">Sardinia 2018</h2>
				<img
					src={main_2018_1}
					alt="Windsurfing into the distance"
					className="main_image"
				/>

				<h4 className="content-text">Fun in the sun</h4>
				<p className="content-text">
					The annual SUWC holiday took it's trip to the italian island
					of Sardinia in 2018. We stayed in Blue Corner residences in
					Porto Pollo, and rented equipment from the nearby
					MBProcentre. With good wind, 24/7 banter and England still
					dreaming about it coming home, it was another week to be
					remembered. Here are a few snaps from the trip.
				</p>
				<div className="gallery">
					<img
						src={gallery_2018_1}
						alt="Big hairy boi enjoying the sun"
						className="quarters"
					/>
					<img
						src={gallery_2018_2}
						alt="james bond making an appearance"
						className="quarters"
					/>
					<img
						src={gallery_2018_3}
						alt="Big hairy boi enjoying the sun"
						className="quarters"
					/>
					<img
						src={gallery_2018_4}
						alt="james bond making an appearance"
						className="quarters"
					/>
				</div>
			</div>
		</div>
	);
};

export default Holiday;
