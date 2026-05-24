
const firebaseConfig = {
  apiKey: "AIzaSyB49YxFvc57mveYjvB0mxazNQMSGqMQgGY",
  authDomain: "new1-de450.firebaseapp.com",
  projectId: "new1-de450",
  storageBucket: "new1-de450.firebasestorage.app",
  messagingSenderId: "903777737386",
  appId: "1:903777737386:web:d9d89c7f2298c080da4ed3",
  measurementId: "G-PBN6XXLS8E"
};

firebase.initializeApp(firebaseConfig);

function signup(){
firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
.then((u)=>{
u.user.sendEmailVerification();
alert('Verification email sent');
})
.catch((e)=>alert(e.message));
}

function login(){
firebase.auth().signInWithEmailAndPassword(email.value,password.value)
.then((u)=>{
if(u.user.emailVerified){
window.location='dashboard.html';
}else{
alert('Verify email first');
}
})
.catch((e)=>alert(e.message));
}

function googleLogin(){
const provider=new firebase.auth.GoogleAuthProvider();
firebase.auth().signInWithPopup(provider)
.then(()=>window.location='dashboard.html')
.catch((e)=>alert(e.message));
}
