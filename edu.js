function getInputValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField.value);
    const inputValue = inputField.value;
    return inputValue;
}

function SeeClasses(event){

    event.preventDefault()


    const showPrimarySecondary = document.getElementById('primary-secondary');
    showPrimarySecondary.classList.remove('hidden');
}

function SeeCollege(event){
    event.preventDefault()


    const showPrimarySecondary = document.getElementById('college');
    showPrimarySecondary.classList.remove('hidden');
}
