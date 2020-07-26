import React from "react";
import facebook from "../images/socialMedia/fb.png";
import instagram from "../images/socialMedia/in.png";
import twitter from "../images/socialMedia/tw.png";

const Footer = (
	<div id="footer">
		<div className="row">
			<div className="col-4">
				<a href="https://www.facebook.com/groups/SwanseaUniWindsurfing">
					<img
						src={facebook}
						alt="Facebook link"
						className="square-image"
					/>
				</a>
				<a href="https://www.instagram.com/swanseawindsurf/">
					<img
						src={instagram}
						alt="Instagram link"
						className="square-image"
					/>
				</a>
				<a href="https://twitter.com/swanseawindsurf?lang=en">
					<img
						src={twitter}
						alt="Twitter link"
						className="square-image"
					/>
				</a>
			</div>
			<div className="col-8">
				<p>
					If you have any issues, please report them to&nbsp;
					<a href="mailto:james.nahajski+swanseawindsurf@gmail.com?subject=Website issue">
						James
					</a>
				</p>
			</div>
		</div>
	</div>
);
export default Footer;
