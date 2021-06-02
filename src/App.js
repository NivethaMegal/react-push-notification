import React, { Component } from "react";
import Notification from "react-web-notification";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // const messaging = firebase.messaging();
    // Notification.requestPermission().then(function (permission) {
    //   if (permission === "granted") {
    //     return messaging
    //       .getToken()
    //       .then((token) => {
    //         console.log(token);
    //       })
    //       .catch((e) => {
    //         console.log(e);
    //       });
    //   }
    // });
  }
  render() {
    return (
      <div>
        <Notification
          title="Hi..."
          options={{
            body: "There is a new message from adva missions !! stay tuned !!",
          }}
          swRegistration={this.props.swRegistration}
        />
        <h1>Adva Missions...!</h1>
        <p>Welcome You all !!</p>
      </div>
    );
  }
}
export default App;
