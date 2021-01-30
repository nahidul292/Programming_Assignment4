const firstMinusBtn = document.querySelector('.first-class-minus');
const firstPlusBtn = document.querySelector('.first-class-plus');
const economyMinusBtn = document.querySelector('.economy-minus');
const economyPlusBtn = document.querySelector('.economy-plus');
const firstClassTicket = document.querySelector('.first-class-ticket-amount');
const economyTicket = document.querySelector('.economy-ticket-amount');

// First Class Plus Button Click Event
firstPlusBtn.addEventListener('click', function () {
    increaseSpinner(firstClassTicket);
    grandTotal();
});

// First Class Minus Button Click Event
firstMinusBtn.addEventListener('click', function () {
    decreaseSpinner(firstClassTicket);
    grandTotal();
});

// Economy Plus Button Click Event
economyPlusBtn.addEventListener('click', function () {
    increaseSpinner(economyTicket);
    grandTotal();
});

// Economy Minus Button Click Event
economyMinusBtn.addEventListener('click', function () {
    decreaseSpinner(economyTicket);
    grandTotal();
});

// Increse Spinner
function increaseSpinner(itemPlus) {
    itemPlus.value++;
    itemPlus.value * 150;
}
// Decrease Spinner
function decreaseSpinner(itemMinus) {
    let numberOfTicket = Number(itemMinus.value);

    if (numberOfTicket <= 0) {
        itemMinus.classList.add('error');
    } else {
        itemMinus.value--;
        itemMinus.value * 150;
    }
}

// Total Price Count
function grandTotal() {
    let getFirstClassPrice = firstClassTicket.value * 150;
    let getEconomyPrice = economyTicket.value * 100;
    let subTotal = (document.querySelector('.subtotal').textContent = getFirstClassPrice + getEconomyPrice);
    let userSubTotal = (document.querySelector('.user-subtotal').textContent = subTotal);
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat = (document.querySelector('.user-vat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal + vat);
    let userTotal = (document.querySelector('.user-total').textContent = total);
}

// Booking confirmation 
document.querySelector('.book-now').addEventListener('click', function () {
    const flyingFrom = document.querySelector('.flying-from').value;
    const flyingTo = document.querySelector('.flying-to').value;
    const flyingDeparture = document.querySelector('.flying-departure').value;
    const flyingReturn = document.querySelector('.flying-return').value;
    const firstClassTicket = document.querySelector('.first-class-ticket-amount').value;
    const economyTicket = document.querySelector('.economy-ticket-amount').value;

    if (!flyingFrom || !flyingTo || !flyingDeparture || !flyingReturn || !firstClassTicket || !economyTicket) {
        // 
        alert('To Place an order,Please complete all the required fields')
    } else {
        document.querySelector('.booking-form').style.display = 'none';
        document.querySelector('.booking-details').style.display = 'block';
        document.querySelector('.user-flying-from').textContent = flyingFrom;
        document.querySelector('.user-flying-to').textContent = flyingTo;
        document.querySelector('.user-departure-date').textContent = flyingDeparture;
        document.querySelector('.user-return-date').textContent = flyingReturn;
        document.querySelector('.user-first-class').textContent = firstClassTicket;
        document.querySelector('.user-economy-class').textContent = economyTicket;
        grandTotal();
    }
});
