// Get Input Value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    return inputValue;
}

// Set Input Value
function setInputValue(elementId, newValue) {
    const pastValue = document.getElementById(elementId);
    pastValue.value = newValue;
}

// Generate Pin
document.getElementById('pin-btn').addEventListener('click', function () {
    const pin = Math.round(Math.random() * 1000000) + '';
    if (pin.length === 6) {
        setInputValue('pin-input', pin);
    }
})

// Calculator
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number === 'C') {
            setInputValue('match-input', '');
        }
        else if (number === '<') {
            let numbers = getInputValue('match-input');
            const numbersArray = numbers.split('');
            numbersArray.pop();
            numbers = numbersArray.join('');
            setInputValue('match-input', numbers);
        }
    }
    else {
        const inputValue = getInputValue('match-input');
        const newValue = inputValue + number;
        setInputValue('match-input', newValue);
    }
})

// Compare
document.getElementById('submit').addEventListener('click', function () {
    const pinInput = getInputValue('pin-input');
    const matchInput = getInputValue('match-input');
    if (pinInput === matchInput) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('unmatched').style.display = 'none';
    }
    else {
        document.getElementById('unmatched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
})