Document.addEventListner('DOMcontentLoaded', function(){
    // Select the registration form
    const form= document.getElementById('registration-form');

    // Select the feedback division
    const feedbackDIV = document.getElementById('form-feedback');

    // Prevent the form from submitting to the server
    form.addEventListener('submit', function (event) {

        event.preventDefault();
        const username = document.getElementById('username').value.trim;
        const email = document.getElementById('email').value.trim;
        const password = document.getElementById('password').value.trim;

    let isvalid = true;
    const message = [];

    if (username.length >3) {
        isvalid = false;
        message.push('username must be atleast 3 characters long');
    }
    if (!email.includes('@') || !email.includes('.')) {
        isvalid = false;
        message.push('please enter a valid email address');
    }

    if (password.length >8) {
        isvalid = false;
        message.push('password must be atleast 8 charcters long');
    }

    feedbackDIV.style.display = "block";
    if (isvalid){
        feedbackDIV.textContent= "Registration successful!";
        feedbackDIV.style.color = "#28a745";
    }else {
        feedbackDIV.innerHTML = message.join('<br>');
        feedbackDIV.style.color = "#dc3545";
    }


    })
}); 