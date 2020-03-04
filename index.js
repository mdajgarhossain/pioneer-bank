//login button event handler
const loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('click', () => {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', () => {
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
});

//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', () => {
    const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = '';

});

const getInputNumber = (id) => {
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
};

const updateSpanText = (id, amountNumber) => {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + amountNumber;
    document.getElementById(id).innerText = totalAmount;
};