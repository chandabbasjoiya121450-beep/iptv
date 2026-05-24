
const firebaseConfig = {
  apiKey: "AIzaSyB49YxFvc57mveYjvB0mxazNQMSGqMQgGY",
  authDomain: "new1-de450.firebaseapp.com",
  projectId: "new1-de450",
  storageBucket: "new1-de450.firebasestorage.app",
  messagingSenderId: "903777737386",
  appId: "1:903777737386:web:d9d89c7f2298c080da4ed3",
  measurementId: "G-PBN6XXLS8E"
};

if(!firebase.apps.length){firebase.initializeApp(firebaseConfig);}

firebase.auth().onAuthStateChanged((user)=>{
if(user){
name.innerHTML=user.displayName || 'Galaxy User';
mail.innerHTML=user.email;
if(user.photoURL){photo.src=user.photoURL;}
}else{
window.location='login.html';
}
});

function logout(){
firebase.auth().signOut().then(()=>window.location='login.html');
}
