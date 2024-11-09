function getInputValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField.value);
    const inputValue = inputField.value;
    return inputValue;
}

function TakeMassage(event){

    event.preventDefault()
// take sms
    const TakeSms = getInputValueId('MassageBox');
    console.log("My Response :", TakeSms);

    // show sms

    const ShowSms = document.getElementById('ResponseMassage');
    ShowSms.innerText = TakeSms;

    // hide display

    const SmsWriteSection = document.getElementById('WriteSms');
    SmsWriteSection.classList.add('hidden');

    // show display

    const ShowResponse = document.getElementById('ShowResponse');
    ShowResponse.classList.remove('hidden');

}