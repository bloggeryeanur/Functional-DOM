function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const elementValue = document.getElementById(elementId);
    const elementValueString = elementValue.innerText;
    const getElementValeu = parseFloat(elementValueString);
    return getElementValeu;
}

function setTextElementValueById(elementID, newValue) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}