
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDK0mW9curwZIZv08e4QMuEdYOH9aEL_5I",
      authDomain: "kwitter-b8741.firebaseapp.com",
      databaseURL: "https://kwitter-b8741-default-rtdb.firebaseio.com",
      projectId: "kwitter-b8741",
      storageBucket: "kwitter-b8741.appspot.com",
      messagingSenderId: "119070809176",
      appId: "1:119070809176:web:9170459c39908da92e7e2d"
    };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
