// function takeData() {
//     // first name
//     const takeFirstName = document.getElementById('first-name');
//     const takeFirstNameValue = takeFirstName.value;
//     console.log("First Name:", takeFirstNameValue)

//     // last name
//     const takeLastName = document.getElementById('last-name');
//     const takeLastNameValue = takeLastName.value
//     console.log("Last Name:", takeLastNameValue)

// }

function takeData(event) {

    event.preventDefault()
// take all input
    const firstName = getInputValueId('first-name');
    // const firstName = require('first-name');
    console.log("First Name :", firstName);

    const lastName = getInputValueId('last-name')
    console.log("Last Name :", lastName);

    const email = getInputValueId('email');
    console.log("Email :", email);

    const password = getInputValueId('password');
    console.log("Password :", password);

    const ConfirmPassword = getInputValueId('verify-password');
    console.log("Confirm Password :", ConfirmPassword);

    // show data in other section

    const ShowFirstName = document.getElementById('Take-first-name');
    ShowFirstName.innerText = firstName;

    const ShowLastName = document.getElementById('Take-last-name');
    ShowLastName.innerText = lastName;

    const ShowEmail = document.getElementById('Take-Email');
    ShowEmail.innerText = email;

    const ShowPass = document.getElementById('Take-pass');
    ShowPass.innerText = password;

    const ShowConPass = document.getElementById('Take-confirm-pass');
    ShowConPass.innerText = ConfirmPassword;

    // change section functionality

    // hide reg form

    const regFormSection = document.getElementById('reg-form-section');
    regFormSection.classList.add('hidden');

    // show profile info

    const userProfileSection = document.getElementById('user-info');
    userProfileSection.classList.remove('hidden')



}

function getInputValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField.value);
    const inputValue = inputField.value;
    return inputValue;
}



