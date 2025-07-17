// This file contains JavaScript code to handle button interactions, including changing button colors on mouse hover and managing navigation between pages.

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.querySelector('.start-button');

    // Change button color on mouse over
    startButton.addEventListener('mouseover', function() {
        startButton.classList.add('btn-light'); // Change to a lighter color
    });

    startButton.addEventListener('mouseout', function() {
        startButton.classList.remove('btn-light'); // Revert to original color
    });

    // Navigate to another page on button click
    startButton.addEventListener('click', function() {
        window.location.href = 'register.html'; // Change this to the desired page
    });
});