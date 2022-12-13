const firebaseConfig = {
    apiKey: "AIzaSyC9Qr4V2LDY73hHeIvStThWaZ6zUt5QkbE",
    authDomain: "sl-project-faa93.firebaseapp.com",
    projectId: "sl-project-faa93",
    storageBucket: "sl-project-faa93.appspot.com",
    messagingSenderId: "848946589045",
    appId: "1:848946589045:web:019717ddaeab1f29e7b73c",
    measurementId: "G-L77N9P29BH"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var messagesRef = firebase.database()
            .ref('Customer Data');

 function create_acc()
        {
            alert("Account Created!");
            if(window.confirm){
                window.open("login.html");
            }
            var name=document.getElementById('namee').value;
            var phno=document.getElementById('phno').value;
            var username=document.getElementById('username').value;
            var pwd=document.getElementById('pwd').value;
            saveData(name, phno, username, pwd);
            document.getElementById('register').reset();
            
        }

function saveData(name,phno,username,pwd)
{
    var newMessageRef = messagesRef.push();
            newMessageRef.set({
                name: name,
                phone_no: phno,
                username: username,
                password: pwd,
            });
}