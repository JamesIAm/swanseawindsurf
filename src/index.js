import "./static/style.css";
import "./static/bootstrap.min.css";

import React from "react";
import { render } from "react-dom";

import App from "./App";
import Navigation from "./components/navigation.js";
import Footer from "./components/footer.js";

// import * from "../images/images.js"

render(
	<App navigation={Navigation} footer={Footer} />,
	document.querySelector("#app")
);
