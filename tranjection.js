document.getElementById('btn-deposite').addEventListener('click', function () {
    const newDepositeAmount = getInputFieldValueById('deposite-field');
    const previousDepositeTotal = getElementValueById('deposite-total');

    const AllDepositeTotal = newDepositeAmount + previousDepositeTotal;
    setTextElementValueById('deposite-total', AllDepositeTotal);

    const balancePrevious = getElementValueById('balace-total');
    const nowBalanceTotal = balancePrevious + newDepositeAmount;
    setTextElementValueById('balace-total', nowBalanceTotal)
})