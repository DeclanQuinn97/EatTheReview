(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD07XUsubZBt2kGhyG2xPOfOq49UZTyaw4",
    authDomain: "eat-the-review.firebaseapp.com",
    databaseURL: "https://eat-the-review.firebaseio.com",
    projectId: "eat-the-review",
    storageBucket: "eat-the-review.appspot.com",
    messagingSenderId: "847435972429",
  };
  firebase.initializeApp(config);

  
  const signupemail = document.getElementById('signupemail');
  const signuppassword =document.getElementById('signuppassword');
  const btnLogin=document.getElementById('btnLogin');
  const btnSignup=document.getElementById('btnSignup');
  
  //Add login event 
  btnLogin.addEventListener('click',e=> {
	  //get email and pass
	  const email = signupemail.value;
	  const pass = signuppassword.value;
	  const auth = firebase.auth();
	  //sign in
	  const promise = auth.signInWithEmailAndPassword(email,pass);
	  promise.catch(e => console.log(e.message));
  });
    btnSignup.addEventListener('click',e=> {
	  //get email and pass
	  const email = signupemail.value;
	  const pass = signupassword.value;
	  const auth = firebase.auth();
	  //sign in
	  const promise = auth.createUserWithEmailAndPassword(email,pass);
	  promise.catch(e => console.log(e.message));
  });
  firebase.auth().onAuthStateChanged(firebaseUser => {
	  if(firebaseUser){
		  console.log(firebaseUser);
	  }else{
		  console.log('not logged in');
});
