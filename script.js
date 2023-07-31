const pswdField = document.querySelector('#password');
const pswdConfField = document.querySelector('#confirm-password');
const createBtn = document.querySelector('#create-button');
const form = document.querySelector('#form');

const passwords = {new: '', conf: ''};

pswdField.addEventListener('input', function() {updatePassword('new');});
pswdConfField.addEventListener('input', function() {updatePassword('conf');});
createBtn.addEventListener('click', function() {createAccount();});

function updatePassword(pwdType, pwdText) {
    // Update the password or confirm password text to content of text field
    passwords[pwdType] = pwdText;
    console.log(passwords[pwdType]);
};

function matchPasswords() {
    // Check if passwords match
    let isMatch = false;
    if (passwords.new === passwords.conf) {
        isMatch = true;
    };
    return isMatch;
};

function createAccount() {
    // Complain if passwords don't match, otherwise reset form
    if (matchPasswords() === true) {
        form.reset();
        console.log("The passwords match somehow.");
    } else if (matchPasswords() === false) {
        console.log("Nice try, bucko.");
    };
};