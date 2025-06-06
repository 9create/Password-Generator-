document.addEventListener('DOMContentLoaded', () => {
    const lengthInput = document.getElementById('length');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');
    const generateBtn = document.getElementById('generateBtn');
    const passwordDisplay = document.getElementById('passwordDisplay');
    const copyBtn = document.getElementById('copyBtn');

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=[]{}|;:,.<>?";

    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyPassword);

    function generatePassword() {
        const length = parseInt(lengthInput.value);
        let characters = "";
        let newPassword = "";

        if (includeUppercase.checked) {
            characters += uppercaseChars;
        }
        if (includeLowercase.checked) {
            characters += lowercaseChars;
        }
        if (includeNumbers.checked) {
            characters += numberChars;
        }
        if (includeSymbols.checked) {
            characters += symbolChars;
        }

        if (characters.length === 0) {
            passwordDisplay.value = "Select at least one character type!";
            return;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            newPassword += characters[randomIndex];
        }

        passwordDisplay.value = newPassword;
    }

    function copyPassword() {
        if (passwordDisplay.value) { // Ensure there's a password to copy
            passwordDisplay.select();
            passwordDisplay.setSelectionRange(0, 99999); // For mobile devices
            navigator.clipboard.writeText(passwordDisplay.value)
                .then(() => {
                    alert("Password copied to clipboard!");
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                });
        } else {
            alert("Nothing to copy!");
        }
    }

    // Generate a password on initial load
    generatePassword(); 
});
