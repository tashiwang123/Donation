function CalculatorDonation() {
    const amountInput = document.getElementById('amount');
    const percentageInput = document.getElementById('percentage');

    const amount = amountInput.value;
    const percentage = percentageInput.value;

    if(amount && percentage) {
        const donation = (amount * (percentage / 100)).toFixed(2);
        document.getElementById('result').textContent = You will donate $${donation}.;

        amountInput.value = '';
        percentageInput.value = '';

    }else{
        document.getElementById('result').textContent = "please enter valid values."
    }
}





