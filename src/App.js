import React, { Component } from "react";
import firebase from "./firebase";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const messaging = firebase.messaging();
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        return messaging
          .getToken()
          .then((token) => {
            console.log(token);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    });
  }
  render() {
    return <div></div>;
  }
}

export default App;
