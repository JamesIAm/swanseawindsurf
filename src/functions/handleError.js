import { store } from "react-notifications-component";

const errMsgWrong = "Incorrect username or password, please try again";
const errMsgSpam =
	"You've entered the incorrect username or password too many times, please try again later";
const errMsgUnknown =
	"Something went on our end, please try again or contact us";
const errMsgLoggedIn = "You are already logged in";
const errMsgEmailInUse =
	"That email address is already in use, please log in or try a different email address";
const errMsgInvalidEmail =
	"That is not a valid email address, please try again";
const errMsgWeakPassword =
	"Your password is not secure enough, please make sure it is at least 6 characters long";
const errMsgWrongPassword =
	"The current password you entered is incorrect. Therefore any changes to the email or password will not have saved";
// const succMsgCreated = "Account successfully created";
const errMsgPermissions =
	"Unfortunately you don't have the required permissions to view this data";

export function handleError(error) {
	let errorCode = error.code;
	let errorMessage = error.message;
	switch (errorCode) {
		case "auth/wrong-password":
			writeError(errMsgWrong);
			break;
		case "auth/user-not-found":
			writeError(errMsgWrong);
			break;
		case "auth/too-many-requests":
			writeError(errMsgSpam);
			break;
		case "PERMISSION_DENIED":
			writeError(errMsgPermissions);
			break;
		case "loggedIn":
			writeError(errMsgLoggedIn);
			break;
		case "auth/email-already-in-use":
			writeError(errMsgEmailInUse);
			break;
		case "auth/invalid-email":
			writeError(errMsgInvalidEmail);
			break;
		case "auth/weak-password":
			writeError(errMsgWeakPassword);
			break;
		case "auth/wrong-password":
			writeError(errMsgWrongPassword);
			break;
		default:
			writeError(errMsgUnknown);
			console.error(errorMessage);
			console.error(errorCode);
			break;
	}
}

function writeError(errorMessage) {
	store.addNotification({
		title: "Error!",
		message: errorMessage,
		type: "danger",
		insert: "top",
		container: "top-center",
		animationIn: ["animate__animated", "animate__fadeIn"],
		animationOut: ["animate__animated", "animate__fadeOut"],
		dismiss: {
			duration: 5000,
			onScreen: true,
		},
	});
	console.log(errorMessage);
}
