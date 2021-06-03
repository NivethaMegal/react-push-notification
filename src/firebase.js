import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCLBdi8T3qTgMX_fbVATWVg8KkD1JcVysk",
  authDomain: "react-push-notification-4e917.firebaseapp.com",
  projectId: "react-push-notification-4e917",
  storageBucket: "react-push-notification-4e917.appspot.com",
  messagingSenderId: "851586532012",
  appId: "1:851586532012:web:0d20acc2f8b6840e499509",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    Notification
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  })
