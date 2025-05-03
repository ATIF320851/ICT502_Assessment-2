// This function will run when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Get the BMI form from the page
    const bmiForm = document.getElementById('bmiForm');
    
    // Add an event listener for when the form is submitted
    bmiForm.addEventListener('submit', function(e) {
        // Prevent the form from submitting the traditional way
        e.preventDefault();
        
        // Get the height and weight values from the form
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        
        // Check if the inputs are valid numbers
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values.');
            return;
        }
        
        // Calculate BMI: weight (kg) / (height (m) * height (m))
        // First convert height from cm to m by dividing by 100
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Round BMI to 1 decimal place
        const roundedBMI = Math.round(bmi * 10) / 10;
        
        // Determine the BMI category
        let category = '';
        let advice = '';
        
        if (bmi < 18.5) {
            category = 'Underweight';
            advice = 'You may need to gain some weight. Consider consulting with a nutritionist.';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Normal weight';
            advice = 'Great job maintaining a healthy weight! Keep up the good habits.';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
            advice = 'Consider making some lifestyle changes to reach a healthier weight.';
        } else {
            category = 'Obesity';
            advice = 'It would be beneficial to consult with a healthcare provider about weight management.';
        }
        
        // Display the results on the page
        document.getElementById('bmi-value').textContent = roundedBMI;
        document.getElementById('bmi-category').textContent = category;
        
        // Create and display additional advice
        const infoDiv = document.getElementById('bmi-info');
        infoDiv.innerHTML = `
            <p><strong>Health Advice:</strong> ${advice}</p>
            <p>Remember that BMI is just one indicator of health. Factors like muscle mass, 
            bone density, and overall lifestyle also play important roles.</p>
        `;
    });
});