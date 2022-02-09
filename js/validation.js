var button = document.getElementById("send");

var usernameMsg = document.getElementById("nameMsg");
var emailMsg = document.getElementById("emailMsg");
var messageMsg = document.getElementById("messageMsg");

var usernameRegex = /^[A-Z]\w+[._-]?\w+/;
var emailRegex = /^[A-Za-z]\w+[._-@]\w+[0-9]\d/;


button.addEventListener("click", function(event){
    var username = document.getElementById("name").value;
    var email = document.getElementById("e-mail").value;
    var message = document.getElementById("message").value;


    if(username == "" || username == null){
        usernameMsg.innerText="Fill Username field!";
        event.preventDefault();
    }else{
        if(usernameRegex.test(username)){
            usernameMsg.innerText="";
        }else{
            usernameMsg.innerText="Username Error!";
            event.preventDefault();
        }

    }

    if (email == "" || email == null){
        emailMsg.innerText = "Fill the E-mail field!"
        event.preventDefault();
    }
    else {
        if(emailRegex.test(email)){
            emailMsg.innerText = "";
        }
        else{
            emailMsg.innerText = "Email Error!!";
            event.preventDefault();
        }
    }

    // checking the Message field
    if(message == "" || message == null){
        messageMsg.innerHTML="Fill Message field!";
        event.preventDefault();
    }
})





// // message error
// var FirstNameMsg = document.getElementById("nameMsg");
// var emailMsg = document.getElementById("emailMsg");
// var messageMsg = document.getElementById("messageMsg");

// var button = document.getElementById("send");


// button.addEventListener("click", function(event){

//     // getting name, email, message values from the form
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("e-mail").value;
//     var message = document.getElementById("message").value;

//     var usernameRegex = /^[A-Z]\w+[._-]?\w+/;
//     var emailRegex = /^[A-Za-z]\w+[._-@]\w+[0-9]\d/;
//     var messageRegex = /^[A-Z]\w+[._-]?\w+/;

//     // checking the FirstName field
//     if(name == "" || name == null){
//         usernameMsg.innerHTML="Fill Firstname field!";
//         event.preventDefault();
//     }else{
//         if(usernameRegex.test(name)){
//             usernameMsg.innerHTML="";
//         }else{
//             usernameMsg.innerHTML="Username Error!";
//             event.preventDefault();
//         }
//     }

//     // checking the E-mail field
//     if(email == "" || email == null){
//         emailMsg.innerHTML="Fill E-mail field!";
//         event.preventDefault();
//     }else{
//         if(emailRegex.test(email)){
//             emailMsg.innerHTML="";
//         }else{
//             emailMsg.innerHTML="E-mail Error!";
//             event.preventDefault();
//         }
//     }

//     // checking the Message field
//     if(message == "" || message == null){
//         messageMsg.innerHTML="Fill Message field!";
//         event.preventDefault();
//     }else{
//         if(messageRegex.test(email)){
//             messageMsg.innerHTML="";
//         }else{
//             messageMsg.innerHTML="E-mail Error!";
//             event.preventDefault();
//         }
//     }

// })
