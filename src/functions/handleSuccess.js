import { store } from "react-notifications-component";

// const succMsgCreated = "Account successfully created";

export function handleSuccess(successMessage) {
	store.addNotification({
		title: "Success!",
		message: errorMessage,
		type: "success",
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
