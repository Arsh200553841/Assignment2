// Constants for query selector
const customNumberInput = document.getElementById('customNumber'); // Input field for custom number
const myStudentId = document.getElementById('myStudentId'); // Element to display student ID
const imageSelect = document.getElementById('imageSelect'); // Select dropdown for images
const images = document.getElementById('images'); // Image element to display selected image

// Function to change background color based on user input and display student ID
function changeCustomColor() {
    const userInput = parseInt(customNumberInput.value); // Get user input from custom number input field
    myStudentId.textContent = "Student ID: 200553841 "; // Display student ID
    document.body.style.backgroundColor = getColor(userInput); // Set background color based on user input
}

// Function to change background color using a random number
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    myStudentId.textContent = "Student ID: 200553841 "; // Display student ID
    document.body.style.backgroundColor = getColor(randomNumber); // Set background color based on random number
}

// Function to generate options for the select dropdown
function addList() {
    const imagesArray = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"]; // Array containing image names
    for (let i = 0; i < imagesArray.length; i++) {
        const option = document.createElement('option'); // Create a new option element
        option.text = imagesArray[i]; // Set the text of the option to the image name
        option.value = imagesArray[i]; // Set the value of the option to the image name
        imageSelect.appendChild(option); // Append the option to the select dropdown
    }
}

// Function to change the displayed image based on the selected option
function changeImage() {
    const selectedImage = imageSelect.value; // Get the value of the selected option
    images.src = "./img/" + selectedImage; // Set the src attribute of the image element to display the selected image
}

// Helper function to get color based on input
function getColor(input) {
    if (input < 0 || input > 100) return "red"; // If input is out of range, return red
    else if (input >= 0 && input <= 20) return "green"; // If input is between 0 and 20, return green
    else if (input > 20 && input <= 40) return "blue"; // If input is between 20 and 40, return blue
    else if (input > 40 && input <= 60) return "orange"; // If input is between 40 and 60, return orange
    else if (input > 60 && input <= 80) return "purple"; // If input is between 60 and 80, return purple
    else return "yellow"; // If input is between 80 and 100, return yellow
}

// Add event listeners and generate image options on page load
window.onload = function() {
    addList(); // Generate image options for select dropdown on page load
};
