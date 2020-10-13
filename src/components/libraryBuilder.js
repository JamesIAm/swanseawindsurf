// import React from "react";
// import firebase, { storage } from "./firebase";

// const storageRef = storage.ref();
// class LibraryBuilder extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { fileInput: null };
// 		this.saveSnippet = this.saveSnippet.bind(this);
// 		this.fileInput = this.fileInput.bind(this);
// 	}
// 	componentDidMount() {
// 		this.setState({
// 			folderRef: storageRef.child(this.props.filePath),
// 		});
// 	}
// 	saveSnippet(event) {
// 		event.preventDefault();
// 	}
// 	fileInput(event) {
// 		this.setState({ fileInput: event.target.files[0] });
// 	}
// 	render() {
// 		console.log(this.state);
// 		return (
// 			<form onSubmit={this.saveSnippet}>
// 				<input type="file" onChange={this.fileInput} />
// 				<button type="submit">SUBMIT</button>
// 			</form>
// 		);
// 	}
// }
// export default LibraryBuilder;
