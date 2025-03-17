// script.js
document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to be fully loaded
    const form = document.getElementById('survey-form'); // Get the form element
    const progressBar = document.getElementById('progress-bar'); // Get the progress bar element
    const progress = document.createElement('div'); // Create a new div element
    progressBar.appendChild(progress); // Append the new div element to the progress bar

    form.addEventListener('input', () => { // Listen for input events on the form
        const totalFields = form.elements.length; // Count the number of fields in the form
        const filledFields = Array.from(form.elements).filter(el => el.value).length; 
        const progressWidth = (filledFields / totalFields) * 100; // Calculate the progress width
        progress.style.width = `${progressWidth}%`; // Set the width of the progress bar
    });
});