const pswdField = document.querySelector('#password');
const pswdConfField = document.querySelector('#confirm-password');
const pswdMessage = document.querySelector('#password-message');
const createBtn = document.querySelector('#create-button');
const form = document.querySelector('#form');

const passwords = {new: '', conf: ''};

pswdField.addEventListener('change', function() {updatePassword('new', pswdField.value);});
pswdConfField.addEventListener('change', function() {updatePassword('conf', pswdConfField.value);});
// createBtn.addEventListener('click', function() {createAccount();});

function updatePassword(pwdType, pwdText) {
    // Update the password or confirm password text to content of text field
    console.log(`Updating ${pwdType} password to "${pwdText}"`)
    passwords[pwdType] = pwdText;
    matchPasswords();
};

function matchPasswords() {
    // Check if passwords match
    if (passwords.new != '' && passwords.conf != '' && passwords.new != passwords.conf) {
        pswdMessage.textContent = "Passwords do not match";
        createBtn.disabled = true;
    } else if (passwords.new != '' && passwords.conf != '' && passwords.new === passwords.conf) {
        pswdMessage.textContent = "";
        createBtn.disabled = false;
    } else if (passwords.new === '' && passwords.conf === '') {
        pswdMessage.textContent = "";
        createBtn.disabled = false;
    };
};