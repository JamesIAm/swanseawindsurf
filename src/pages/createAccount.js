import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect } from "react-router-dom";
import AccountBuilder from "../components/accountBuilder";

class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};
	}
	componentDidUpdate() {
		if (this.props.user) {
			this.setState({ redirect: true });
		}
	}
	render() {
		if (this.state.redirect) {
			return <Redirect push to="/my-account" />;
		}
		return (
			<div className="article">
				<h1>Create An Account</h1>
				<AccountBuilder mode="create" />
			</div>
		);
	}
}

export default CreateAccount;
