// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBtgKvUA7oOZDXzx38SDBTgzXmaSCa9rx4",
    authDomain: "result-app-dd051.firebaseapp.com",
    databaseURL: "https://result-app-dd051.firebaseio.com",
    projectId: "result-app-dd051",
    storageBucket: "",
    messagingSenderId: "547201524699",
    appId: "1:547201524699:web:2169664972289320"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
     window.location.assign('./result.html');
    
     
console.log(user)
  } else {
    // No user is signed in.
 
  }
});
   
document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
  console.log("click me");
   var Email=document.getElementById('emailForm').value;
    var passWord=document.getElementById('passForm').value;
    //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
      console.log("online");
    }else{
      var myLoad = document.getElementById("loading");
      myLoad.style.display="none";
        Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
      console.log("offline");
    }
    //form validation



    //loader
    var myDiv = document.getElementById("loading");
    myDiv.setAttribute("style", `display: block; position: absolute;top: 0;left: 0;z-index: 100;width: 100vw;
     height: 100vh; background-color: rgba(192, 192, 192, 0.5);background-image: url("css/loader2.gif");
     background-repeat: no-repeat; background-position: center; `);
     
      function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 9000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
  setVisible('#loading', false);
});

    
    firebase.auth().signInWithEmailAndPassword(Email, passWord).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  document.getElementById('inputPass').innerHTML="wrong email/password"
  var myLoad = document.getElementById("loading");
      myLoad.style.display="none";

  console.log('invalid')
  // ...
    
});
});

 
 



 