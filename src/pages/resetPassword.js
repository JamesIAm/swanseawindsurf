import React from "react";
import firebase, { auth, provider } from "../components/firebase.js";
import { Redirect } from "react-router-dom";

class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            redirect: false,
            emailInput: this.props?.location?.state?.email || "",
            passwordReset: false,
            errorMessage: "",
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSendAgain = this.handleSendAgain.bind(this);
        this.handlePasswordReset = this.handlePasswordReset.bind(this);
	}
	componentDidUpdate() {
		if (this.props.user) {
			this.setState({ redirect: true });
		}
    }
    handleEmailChange(event) {
		this.setState({ emailInput: event.target.value });
    }
    handlePasswordReset(event) {
        event.preventDefault();
		this.setState({ errorMessage: "" });
		firebase.auth().sendPasswordResetEmail(this.state.emailInput).then(
            () => this.setState({passwordReset: true})
          ).catch(() =>
            this.setState({errorMessage: "The password reset email failed to send, please try again, or contact James to recieve further assistance"})
          );
    }
    handleSendAgain() {
        this.setState({passwordReset: false})
    }
	render() {
		if (this.state.redirect) {
			return <Redirect push to="/my-account" />;
		}
		return (
			<div className="article">
				<h1>Reset your password</h1>
                <h4>{this.state.errorMessage}</h4>
                {this.state.passwordReset ? (
                    <div><h4>Password reset email sent</h4>
    

                <p>If the email doesn't come through in the next half an hour, please try again, or get in contact with James and he'll be able to help you reset your password.</p>
                <button className="submit" onClick={() => this.handleSendAgain}>Send again</button>
                </div>
                ) : (
                <form onSubmit={this.handlePasswordReset}>
                    <label htmlFor="email">Email Address:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={this.state.emailInput}
                        onChange={this.handleEmailChange}
                        required
                    />
                    <button type="submit" value="Reset" className="submit">
                        Reset
                    </button>
                </form>)}
			</div>
		);
	}
}

export default CreateAccount;
