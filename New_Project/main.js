var cardType = '';

document.querySelectorAll('.debitCard').forEach(ele => ele.style.display = 'none')
const handleRadioChange = (event) => {
    cardType = event.target.value;

    if (event.target.value === 'checking') {
        document.querySelectorAll('.checking').forEach(ele => ele.style.display = 'block')
        document.querySelectorAll('.debitCard').forEach(ele => ele.style.display = 'none')
    } else {
        document.querySelectorAll('.checking').forEach(ele => ele.style.display = 'none')
        document.querySelectorAll('.debitCard').forEach(ele => ele.style.display = 'block')
    }
}

function validateNumber(input) {
    // Remove non-numeric characters using a regular expression
    input.classList.remove('invalid');    

    input.value = input.value.replace(/[^0-9]/g, '');
}

function validateCVV() {
    var cvvInput = document.getElementById('cvvInput').value;
    var cvvPattern = /^[0-9]{3,4}$/; // Regular expression to match 3 digits
    
    if (cvvPattern.test(cvvInput)) {
        return true;
    } else {
        return false
    }
}

function validateForm() {
    var form = document.querySelector('.form');
    var isValid = true;

    var loan_account_number = document.getElementById('loan_account_number').value.trim();
    if(cardType === 'debitCard') {
        isValid = validateCVV();
        var requiredInputs = form.querySelectorAll('.debit_input input[required]');
    } else {
        var requiredInputs = form.querySelectorAll('.checking_input input[required]');
    }

    if(!loan_account_number) {
        document.getElementById('loan_account_number').classList.add('invalid');

    } else {
        document.getElementById('loan_account_number').classList.remove('invalid');    
    }
    

    
    requiredInputs.forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('invalid');
        }else {
            input.classList.remove('invalid');
        }
    });



    if (isValid && loan_account_number) {
        // Proceed with form submission
        alert('Form is valid. Proceeding with payment...');
        // Uncomment the following line to submit the form
        // form.submit();
    } else {
        alert('Please fill in all required fields.');
    }
}



