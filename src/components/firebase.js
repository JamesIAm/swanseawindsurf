const firebase = require("firebase/app");
const auth = require("firebase/auth");
const database = require("firebase/database");

const firebaseConfig = {
	apiKey: "AIzaSyAZSfaFHIPWAGiKNkNTeBM7NfcSrco5zhw",
	authDomain: "swanseawindsurf-ec2a6.firebaseapp.com",
	databaseURL: "https://swanseawindsurf-ec2a6.firebaseio.com",
	projectId: "swanseawindsurf-ec2a6",
	storageBucket: "swanseawindsurf-ec2a6.appspot.com",
	messagingSenderId: "828030262811",
	appId: "1:828030262811:web:5794202b82a2c8041f22be",
	//storageBucket: "gs://swanseawindsurf-ec2a6.appspot.com",
};
firebase.initializeApp(firebaseConfig);

//var storage = firebase.storage();

export default firebase;
//export { storage };
//TODO: LIMIT HTTP REFERRERS in https://console.developers.google.com/apis/credentials?