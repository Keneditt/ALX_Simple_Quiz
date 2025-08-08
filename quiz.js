// Define the checkAnswer function
function checkAnswer() {
    // 1. Identify the correct answer
    const correctAnswer = "4";
    
    // 2. Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // 3. Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // 4. Check if an option was selected
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer first!";
        feedbackElement.style.color = "#dc3545";
        feedbackElement.style.backgroundColor = "#f8d7da";
        return;
    }
    
    // 5. Get the user's answer value
    const userAnswer = selectedOption.value;
    
    // 6. Compare answers and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745";
        feedbackElement.style.backgroundColor = "#d4edda";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545";
        feedbackElement.style.backgroundColor = "#f8d7da";
    }
}

// Add event listener to the submit button
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-answer');
    submitButton.addEventListener('click', checkAnswer);
});