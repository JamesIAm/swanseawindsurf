import React, { useEffect } from "react";
import "../static/article.css";
import "../static/gallery.css";

import clubPhoto from "../images/info/clubphotofun.jpg";
import infoGallery1 from "../images/info/gallery1.jpg";
import infoGallery2 from "../images/info/gallery2.jpg";
import infoGallery3 from "../images/info/gallery3.jpg";
import infoGallery4 from "../images/info/gallery4.jpg";
import infoGallery5 from "../images/info/gallery5.jpg";
import infoGallery6 from "../images/info/gallery6.jpg";
import infoGallery7 from "../images/info/gallery7.jpg";
import infoGallery8 from "../images/info/gallery8.jpg";

const AboutUs = () => {
	return (
		<div className="article">
			<h3>Club Info</h3>
			<img src={clubPhoto} alt="Fun club photo" className="main_image" />
			<h3>A Club for All</h3>

			<p>
				SUWC provides an opportunity for students and non-students to
				take their first steps into the sport of windsurfing as well as
				giving top class shredders a platform to continue to grow and
				enjoy all that South Wales has to offer. We run regular
				Wednesday sessions, free for first timers, which include kit
				hire, tuition and safety cover.
			</p>
			<h3>What the club offers:</h3>
			<p>
				Below are a few things the club has to offer. We have plenty
				more where this comes from however, so get in touch to find out
				more via our club
				<a href="facebook.com/SwanseaUniWindsurf/">Facebook page</a>,
				<a href="https://www.instagram.com/swanseawindsurf/">
					Instagram
				</a>
				, or
				<a href="https://twitter.com/SwanseaWindsurf">Twitter</a>.
				Alternatively, you can email us at
				windsurfing@swansea-sports.co.uk.
			</p>
			<h3>Wednesday Afternoon Sessions</h3>
			<p>
				Every Wednesday, at 1pm, we run 3 to 4 hour sessions to give
				members the chance to improve their windsurfing abilities.
				Sessions are ran by our committee members, and we provide all
				the tools necessary for you to get stuck in from day 1. We run
				transportation to Tata Steel Reservoir from both Singleton and
				Bay campuses, and if you are a student at Swansea University you
				can also hire a wetsuit for free (£20 deposit) from Sport
				Swansea. Our instructors can take you all the way from the
				basics, to blasting in the footstraps and harness and learning
				to wave sail.
			</p>
			<h3>SWA Events</h3>
			<p>
				As a university windsurfing club, we have the pleasure of being
				part of the Student Windsurfing Association (SWA). These are
				massive student events held all around the UK consisting of
				windsurfing, partying, and all round antics. Head over to the
				SWA Events page to find out more!
			</p>
			<h3>Club Holidays</h3>
			<p>
				To end the year on a high and give you all a chance to celebrate
				finishing your exams in style, we organise a trip abroad each
				year. Previous locations include Fuerteventura and Sardinia.
				These are not only a great way to practice everything you've
				learned throughout the year in warm, blue waters, but also to
				have the most banterous week of your life with your fellow club
				members. Our Sardinia 2018 page contains plenty more photos and
				detail on what happened last year!
			</p>
			<div className="gallery">
				<img
					src={infoGallery1}
					alt="Sardinian shredding"
					className="quarters"
				/>
				<img
					src={infoGallery2}
					alt="Sardinian shredding"
					className="quarters"
				/>
				<img
					src={infoGallery3}
					alt="Sardinian shredding"
					className="quarters"
				/>
				<img
					src={infoGallery4}
					alt="Sardinian shredding"
					className="quarters"
				/>
				<img
					src={infoGallery5}
					alt="Sardinian shredding"
					className="quarters"
				/>
				<img
					src={infoGallery6}
					alt="Sardinian shredding"
					className="quarters"
				/>
				<img
					src={infoGallery7}
					alt="Sardinian shredding"
					className="quarters"
				/>
				<img
					src={infoGallery8}
					alt="Sardinian shredding"
					className="quarters"
				/>
			</div>
		</div>
	);
};

export default AboutUs;
