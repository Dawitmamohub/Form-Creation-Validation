document.addEventListener('DOMContentLoaded', function() {
  
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
       
        event.preventDefault();

        
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long');
        } else if (username.length > 20) {
            isValid = false;
            messages.push('Username cannot exceed 20 characters');
        }

        
        if (!email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            isValid = false;
            messages.push('Please enter a valid email address');
        }

       
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long');
        } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
            isValid = false;
            messages.push('Password must contain both letters and numbers');
        }

       
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
        
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.className = 'success';
            
            
            form.reset();
            

            setTimeout(() => {
                feedbackDiv.style.display = 'none';
            }, 3000);
        } else {
        
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.className = 'error';
        }
    });
});