document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
    
    form.addEventListener('submit', event => {
        event.preventDefault();
        
        // Get input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        
        // Create validation messages without push()
        const messages = [
            username.length < 3 ? 'Username must be at least 3 characters long' : null,
            (!email.includes('@') || (!email.includes('.')) ? 'Email must contain both "@" and "."' : null,
            password.length < 8 ? 'Password must be at least 8 characters long' : null
        ].filter(message => message !== null);
        
        const isValid = messages.length === 0;
        
        // Display feedback
        feedbackDiv.style.display = "block";
        
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = "#d4edda";
            feedbackDiv.style.border = "1px solid #c3e6cb";
            form.reset();
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = "#f8d7da";
            feedbackDiv.style.border = "1px solid #f5c6cb";
        }
    });
});