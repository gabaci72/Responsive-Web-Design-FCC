// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Progress Bar
    const form = document.getElementById('survey-form');
    const progressBar = document.getElementById('progress-bar');
    const progress = document.createElement('div');
    progressBar.appendChild(progress);

    form.addEventListener('input', () => {
        const totalFields = form.elements.length;
        const filledFields = Array.from(form.elements).filter(el => el.value).length;
        const progressWidth = (filledFields / totalFields) * 100;
        progress.style.width = `${progressWidth}%`;
    });

    // Real-time Email Validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    emailInput.addEventListener('input', () => {
        if (emailInput.validity.valid) {
            emailError.style.display = 'none';
        } else {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.display = 'block';
        }
    });

    // Dynamic Fields
    const dropdown = document.getElementById('dropdown');
    const otherField = document.getElementById('other-field');

    dropdown.addEventListener('change', () => {
        if (dropdown.value === 'other') {
            otherField.style.display = 'block';
        } else {
            otherField.style.display = 'none';
        }
    });
});