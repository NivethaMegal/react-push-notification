import React, { Component } from "react";
// import Notification from 'react-web-notification';
// import { requestFirebaseNotificationPermission } from "./firebase";
import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
import NotificationSystem from 'react-notification-system';
import addNotification from 'react-push-notification';
import WebNotification from 'react-web-notifications'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  notificationSystem = React.createRef();

  addNotification = event => {
    event.preventDefault();
    const notification = this.notificationSystem.current;
    notification.addNotification({
      message: 'Notification message',
      level: 'error'
    });
  };
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
        default:
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

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
    // const showNotification = () => {
    //   console.log('hello');
    //   const notify = () => {
    //     navigator.serviceWorker.ready.then((registration) => {
    //       registration.showNotification('Adva Missions !! ', {
    //         body: 'Buzz! Buzz! There is a new message for you...',
    //         vibrate: [200, 100, 200, 100, 200, 100, 200],
    //       });
    //     });
    //   };
    //   if (Notification.permission === 'granted') {
    //     notify();
    //   } else if (Notification.permission !== 'denied') {
    //     Notification.requestPermission();
    //   }
    //   Notification.requestPermission().then((permission) => {
    //     if (permission === 'granted') {
    //       notify();
    //     }
    //   });
    // }
    // requestFirebaseNotificationPermission()
    //   .then((firebaseToken) => {
    //     // eslint-disable-next-line no-console
    //     console.log(firebaseToken);
    //   })
    //   .catch((err) => {
    //     return err;
    //   });
    const buttonClick = () => {
      addNotification({
        title: 'Warning',
        subtitle: 'This is a subtitle',
        message: 'This is a very long message',
        theme: 'darkblue',
        native: true // when using native, your OS will handle theming.
      });
    };
    return (
      <div>
        <h1>Adva Missions...!</h1>
        <p>Welcome You all !!</p>
        <div>
          <button className='btn btn-info'
            onClick={this.createNotification('info')}>Info
        </button>
          <hr />
          <button className='btn btn-success'
            onClick={this.createNotification('success')}>Success
        </button>
          <hr />
          <button className='btn btn-warning'
            onClick={this.createNotification('warning')}>Warning
        </button>
          <hr />
          <button className='btn btn-danger'
            onClick={this.createNotification('error')}>Error
        </button>

          <NotificationContainer />
        </div>
        <div>
          <button onClick={this.addNotification}>Add notification</button>
          <NotificationSystem ref={this.notificationSystem} />
        </div>
        <button onClick={buttonClick} className="button">
          Hello world.
          </button>
        <WebNotification
          title="Hello, World!" // the title prop is required
          icon="path/to/image.jpg"
          body="This is a web notification"
          timeout={9000}
          onClickFn={() => window.open('http://www.google.com/', '_blank')} // open your own site on notification click
        />
        {/* <button type='button' onClick={() => showNotification()}>
          Get Notify !
      </button> */}
      </div>
    );
  }
}
export default App;
