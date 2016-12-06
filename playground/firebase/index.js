console.log('Entra');
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDhh9CBmpN_36CcxY1n881ncmWMwQ3c0rc",
    authDomain: "mead-todo-app-d139f.firebaseapp.com",
    databaseURL: "https://mead-todo-app-d139f.firebaseio.com",
    storageBucket: "mead-todo-app-d139f.appspot.com",
    messagingSenderId: "542788114398"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Gonzalo',
    age: 49
  }
});

firebaseRef.update({
  isRunning: false,
  app: {
    name: 'Todo Application'
  }
});
