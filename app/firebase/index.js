import firebase from 'firebase';

try{
  var config = {
      apiKey: "AIzaSyDhh9CBmpN_36CcxY1n881ncmWMwQ3c0rc",
      authDomain: "mead-todo-app-d139f.firebaseapp.com",
      databaseURL: "https://mead-todo-app-d139f.firebaseio.com",
      storageBucket: "mead-todo-app-d139f.appspot.com",
      messagingSenderId: "542788114398"
    };
  firebase.initializeApp(config);
}catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
