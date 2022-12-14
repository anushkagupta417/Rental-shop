const firebaseConfig = {
    apiKey: "AIzaSyDi2WQiTD9x1eNNWpjzVSBlumOaCIHl_7s",
    authDomain: "rental-store-c57f5.firebaseapp.com",
    databaseURL: "https://rental-store-c57f5-default-rtdb.firebaseio.com",
    projectId: "rental-store-c57f5",
    storageBucket: "rental-store-c57f5.appspot.com",
    messagingSenderId: "790349888993",
    appId: "1:790349888993:web:2638cd19178f6b9785a6a0",
    measurementId: "G-4MCHGZ5VH1"
  };
    
    //initialize firebase 
   firebase.initializeApp(firebaseConfig);
   const auth=firebase.auth();

   document.querySelector("#loginbutton").addEventListener("click",()=>{
    login();
});
const login = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#pwd").value;
    
    if (email.trim() == "") {
        alert("Enter Email");
    } else if (password.trim() == "") {
        alert("Enter Password");
    } else {
        authenticate(email, password);
    }
    };

    const authenticate = (email, password) => {
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            });
        };