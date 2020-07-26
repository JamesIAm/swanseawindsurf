import React from "react";
import "../static/article.css";
import "../static/gallery.css";

import sardinia1 from "../images/holidays/sardinia18/mainImage.jpg";
import gallery1 from "../images/holidays/sardinia18/gallery1.jpg";
import gallery2 from "../images/holidays/sardinia18/gallery2.jpg";
import gallery3 from "../images/holidays/sardinia18/gallery3.jpg";
import gallery4 from "../images/holidays/sardinia18/gallery4.jpg";

const Holiday = () => {
	return (
		<div className="article">
			<h2 className="content-text">Sardinia 2018</h2>
			<img
				src={sardinia1}
				alt="Windsurfing into the distance"
				className="main_image"
			/>

			<h4 className="content-text">Fun in the sun</h4>
			<p className="content-text">
				The annual SUWC holiday took it's trip to the italian island of
				Sardinia in 2018. We stayed in Blue Corner residences in Porto
				Pollo, and rented equipment from the nearby MBProcentre. With
				good wind, 24/7 banter and England still dreaming about it
				coming home, it was another week to be remembered. Here are a
				few snaps from the trip.
			</p>
			<div className="gallery">
				<img
					src={gallery1}
					alt="Big hairy boi enjoying the sun"
					className="quarters"
				/>
				<img
					src={gallery2}
					alt="james bond making an appearance"
					className="quarters"
				/>
				<img
					src={gallery3}
					alt="Big hairy boi enjoying the sun"
					className="quarters"
				/>
				<img
					src={gallery4}
					alt="james bond making an appearance"
					className="quarters"
				/>
			</div>
		</div>
	);
};

export default Holiday;
