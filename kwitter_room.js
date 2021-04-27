var firebaseConfig = {
      apiKey: "AIzaSyCU7OuYJoBxcYeEaIYLr0iMkJfLU0vL6m4",
      authDomain: "kwitter-c9701.firebaseapp.com",
      databaseURL: "https://kwitter-c9701.firebaseio.com",
      projectId: "kwitter-c9701",
      storageBucket: "kwitter-c9701.appspot.com",
      messagingSenderId: "925409004823",
      appId: "1:925409004823:web:86cb1af542dac27b6afb52"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user")

    function Add_room(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"room name added",
                room:room_name
            
          });
          localStorage.setItem("room",room_name);

          window.location="kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names)
       row=`<div class='room_name' id=${Room_names} onclick='gotoroom(this.id)'>${Room_names}</div>
       <hr>`
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
           function gotoroom(room){
console.log(room)
localStorage.setItem("room",room)
window.location="kwitter_page.html"
           }
           function logout(){
           localStorage.removeItem("room")
           window.location="index.html"    
           }
