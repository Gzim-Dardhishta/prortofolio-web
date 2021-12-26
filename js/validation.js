// message error
var FirstNameMsg = document.getElementById("nameMsg");
var emailMsg = document.getElementById("emailMsg");
var messageMsg = document.getElementById("messageMsg");

var button = document.querySelector("send");


button.addEventListener("click", function(event){

    // getting name, email, message values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("e-mail").value;
    var message = document.getElementById("message").value;

    var usernameRegex = /^[A-Za-z]\w/;
    var emailRegex = /^[A-Za-z]\w+[._-@]\w+[0-9]\d/;
    var messageRegex = /^[A-Za-z]\w/;

    // checking the FirstName field
    if(name == "" || name == null){
        usernameMsg.innerText="Fill Firstname field!";
        event.preventDefault();
        return false;
    }else{
        if(usernameRegex.test(name)){
            usernameMsg.innerText="";
        }else{
            usernameMsg.innerText="Username Error!";
            // event.preventDefault();
            return false;
        }
    }

    // // checking the E-mail field
    // if(email == "" || email == null){
    //     emailMsg.innerText="Fill E-mail field!";
    //     event.preventDefault();
    // }else{
    //     if(usernameRegex.test(email)){
    //         emailMsg.innerText="";
    //     }else{
    //         emailMsg.innerText="E-mail Error!";
    //         event.preventDefault();
    //     }
    // }

    // // checking the Message field
    // if(message == "" || message == null){
    //     messageMsg.innerText="Fill Message field!";
    //     event.preventDefault();
    // }else{
    //     if(usernameRegex.test(email)){
    //         messageMsg.innerText="";
    //     }else{
    //         messageMsg.innerText="E-mail Error!";
    //         event.preventDefault();
    //     }
    // }

})
