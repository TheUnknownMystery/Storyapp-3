import firebase from 'firebase'
 require('@firebase/firestore')
 
 
  // Your web app's Firebase configuration
  var firebaseConfig = {
   apiKey: "AIzaSyASI44HWZgcAITlsg20nyYVYxyA05Nhawg",
   authDomain: "storyapp-2.firebaseapp.com",
   projectId: "storyapp-2",
   storageBucket: "storyapp-2.appspot.com",
   messagingSenderId: "801718721532",
   appId: "1:801718721532:web:58c313518334a88103f079"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase.firestore()