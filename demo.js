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
   const database = firebase.database();

   function register () {
    // Get all our input fields
    Name = document.getElementById('namee').value;
    phno = document.getElementById('phno').value;
    email = document.getElementById('email').value;
    password = document.getElementById('pwd').value;
    password2 = document.getElementById('pwd2').value;

    if (validate_field(Name) == false || validate_field(phno) == false || validate_field(email) == false || validate_field(pwd) == false || validate_field(pwd2) == false) {
        alert('One or More fields empty');
        return
      }
    if (validate_password(password)== false)
    {
        alert('Incorrect password format');
    }
    if ( confirm_password(password,password2) == false) {
        alert('Confirmation password does not match with password.');
        return 
        // Don't continue running the code
      }
    if( validate_phno(phno)==false)
      {
          alert('Incorrect phno')
          return
      }
    
    // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    // var database_ref = firebase.database().ref()

    // Create User data
    var user_data = {
      email : email, 
      Name : Name,
      Phone_no : phno,
      last_login : Date.now()
    }

    // Push to Firebase Database
    firebase.database().ref('users/' + user.uid).set(user_data);

    // DOne
    alert('User Created!!')
    if(window.confirm){
        window.location="login.html";
     }
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  });
}

// Set up our login function
function login () {
  // Get all our input fields
  email1 = document.getElementById('email_login').value;
  password1 = document.getElementById('pwd_login').value;
//   document.getElementById('r').innerHTML=email;
  if (validate_field(email1) == false || validate_field(password1) == false) {
    alert('One or More fields empty');
    return
  }

  if (validate_password(password1)== false)
    {
        alert('Incorrect password format');
        return;
    }

    auth.signInWithEmailAndPassword(email1, password1)
  .then(function() {
    //Declare user variable
    var user = auth.currentUser

    //Add this user to Firebase Database
    var database_ref = database.ref()

    //Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    firebase.database().ref('users/' + user.uid).update(user_data)

    alert('User Logged In!!')
    if(window.confirm){
        window.location="main.html";
    }
})

    // DOne
    .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      });
    }
    



  


      function validate_password(password)
      {
        digflag=0;
        for(i=0;i<password.trim().length;i++){
            if (password[i]>'0'&&password[i]<'9'){
                digflag=1;
                break;
            }
        }
        if (password.trim().length < 8 || password.trim().length > 16){
            return false;
        }
        else if (digflag==0){
            return false;
        }
        else return true;
      }
    

      function confirm_password(password,pwd2)
      {
        if (pwd2.trim() != password.trim()){
            return false;
        }
        else return true;
      }

      function validate_field(field) {
        if (field == null) {
          return false
        }
      
        if (field.length <= 0) {
          return false
        } else {
          return true
        }
      }

      function validate_phno(phno)
       {
           if(phno.length==10)
           return true
           else
           return false
       }
    

      
