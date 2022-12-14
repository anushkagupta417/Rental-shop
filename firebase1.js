// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

   document.querySelector("#btn").addEventListener("click",()=>{
       register();
   });

   const register = () => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#pwd").value;
    const pwd2 = document.querySelector("#pwd2").value;
            digflag=0;
            for(i=0;i<password.trim().length;i++){
                if (password[i]>'0'&&password[i]<'9'){
                    digflag=1;
                    break;
                }
            }
            if (email.trim() == ""){
                alert("Enter email.");
            }
            else if (password.trim() == ""){
                alert("Enter password.");
            }
            else if (password.trim().length < 8 || password.trim().length > 16){
                alert("Password length must be between 8 and 16 characters.");
            }
            else if (digflag==0){
                alert("Password must contain at least 1 digit.");
            }
            else if (pwd2.trim() == ""){
                alert("Enter confirmation password.");
            }
            else if (pwd2.trim() != password.trim()){
                alert("Confirmation password does not match with password.");
            }

     else {
        auth
        .createUserWithEmailAndPassword(email, password)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
            // ...
        });
        alert("Account Created!");
            //   if(window.confirm){
                 // window.open("login.html");
            //   }
    }
    };

    const showLoginpage = () => {
        document.querySelector("#registration-page").classList.add("hide");
        document.querySelector("#login-page").classList.add("hide");
        document.querySelector("#homepage").classList.remove("hide");
      };

    // document.querySelector("#loginbutton").addEventListener("click",()=>{
    //     login();
    // });
    // const login = () => {
    //     const email = document.querySelector("#email").value;
    //     const password = document.querySelector("#pwd").value;
        
    //     if (email.trim() == "") {
    //         alert("Enter Email");
    //     } else if (password.trim() == "") {
    //         alert("Enter Password");
    //     } else {
    //         authenticate(email, password);
    //     }
    //     };

    //     const authenticate = (email, password) => {
    //         const auth = firebase.auth();
    //         auth.signInWithEmailAndPassword(email, password);
    //         firebase
    //             .auth()
    //             .signInWithEmailAndPassword(email, password)
    //             .catch(function (error) {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             alert(errorMessage);
    //             });
    //         };
  //   const analytics = firebase.getAnalytics(app);
  
  
//     var messagesRef = firebase.database()
//               .ref('Customer Data');
  
//     document.getElementById("register").addEventListener("submit",create_acc)
  
//    function create_acc(e)
//           {
//               e.preventDefault();
//               alert("Account Created!");
//               if(window.confirm){
//                   window.open("login.html");
//               }
//               var name=document.getElementById('namee').value;
//               var phno=document.getElementById('phno').value;
//               var username=document.getElementById('username').value;
//               var pwd=document.getElementById('pwd').value;
//               console.log(name,phno,username,pwd);
//               saveData(name, phno, username, pwd);
//               document.getElementById('register').reset();
              
//           }
  
//   function saveData(name,phno,username,pwd)
//   {
//       var newMessageRef = messagesRef.push();
//               newMessageRef.set({
//                   name: name,
//                   phone_no: phno,
//                   username: username,
//                   password: pwd,
//               });
//   }