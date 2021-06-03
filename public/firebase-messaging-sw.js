importScripts("https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCLBdi8T3qTgMX_fbVATWVg8KkD1JcVysk",
    authDomain: "react-push-notification-4e917.firebaseapp.com",
    projectId: "react-push-notification-4e917",
    storageBucket: "react-push-notification-4e917.appspot.com",
    messagingSenderId: "851586532012",
    appId: "1:851586532012:web:0d20acc2f8b6840e499509",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
      body: payload.data.body,
    };
    return self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  
  self.addEventListener('notificationclick', event => {
    console.log(event)
    return event;
  });
