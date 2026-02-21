// Get references to the input fields and result elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const bmiValue = document.getElementById('bmiValue');
const category = document.getElementById('bmiCategory');
// Function to calculate BMI
function calculateBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        bmiValue.textContent = 'Please enter valid weight and height.';
        category.textContent = '';
        return;
    }
    const bmi = weight / (height * height);
    bmiValue.textContent = `Your BMI: ${bmi.toFixed(2)}`;
    if (bmi < 18.5) {
        category.textContent = 'Category: Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category.textContent = 'Category: Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category.textContent = 'Category: Overweight';
    } else {
        category.textContent = 'Category: Obesity';
    }
}
// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateBMI);
