const allButton = document.getElementsByClassName("ticket");
const clickedTickets = new Set();

for (const btn of allButton) {
    btn.addEventListener('click', function handleClick(e) {
        if (clickedTickets.has(btn)) {
            alert("You have already selected this ticket.");
            return;
        }

        const totalSeat = document.getElementById('Total-seats');
        const totalSeatString = totalSeat.innerText;
        const totalSeatNum = parseInt(totalSeatString);

        const totalTicket = document.getElementById("totalTicket");
        const totalTicketString = totalTicket.innerText;
        const totalTicketNum = parseInt(totalTicketString);

        if (totalTicketNum >= 4) {
            alert("Sorry, you can select a maximum of 4 tickets.");
            return;
        }

        totalTicket.innerText = totalTicketNum + 1;
        totalSeat.innerText = totalSeatNum - 1;

        if (totalTicketNum === 3) {
            const btnApply = document.getElementById('apply-button');
            btnApply.disabled = false;
        }

        btn.classList.remove('bg-zinc-100');
        btn.classList.add('bg-green-400');

        const seats = document.getElementById("seats");
        const li = document.createElement('li');
        const p = document.createElement('p');
        const p2 = document.createElement('p');

        const ticketName = btn.innerText;

        li.innerText = ticketName;
        p.innerText = "Economy";
        p2.innerText = 550;
        seats.appendChild(li);
        seats.appendChild(p);
        seats.appendChild(p2);

        const totalPriceField = document.getElementById("total-price");
        const totalPriceFieldString = totalPriceField.innerText;
        const totalPriceFieldNumber = parseInt(totalPriceFieldString)
        totalPriceField.innerText = totalPriceFieldNumber + 550;

        const grandPriceField = document.getElementById("grand-total");
        const grandPriceFieldString = grandPriceField.innerText;
        const grandPriceFieldNumber = parseFloat(grandPriceFieldString)
        grandPriceField.innerText = grandPriceFieldNumber + 550;

        document.getElementById('apply-button').addEventListener('click', function () {
            const couponInput = document.getElementById('coupon-input');
            const couponInputField = couponInput.value;
            if (couponInputField == "NEW15") {
                grandPriceField.innerText = (85 * (grandPriceField.innerText)) / 100;
                const couponField = document.getElementById('coupon-field');
                couponField.style.display = 'none';
            }
            else if (couponInputField == "Couple 20") {
                grandPriceField.innerText = (80 * (grandPriceField.innerText)) / 100;
                const couponField = document.getElementById('coupon-field');
                couponField.style.display = 'none';
            }
            else {
                alert("Please use valid coupon");
            }
        })

        function checkFields() {
            const nameInput = document.getElementById('name').value.trim();
            const phoneInput = document.getElementById('phone').value.trim();
            const emailInput = document.getElementById('email').value.trim();
            const nextButton = document.getElementById('next');

            if (nameInput !== '' && phoneInput !== '' && emailInput !== '') {
                nextButton.disabled = false;
            } else {
                nextButton.disabled = true;
            }
        }

        document.getElementById('name').addEventListener('keyup', checkFields);
        document.getElementById('phone').addEventListener('keyup', checkFields);
        document.getElementById('email').addEventListener('keyup', checkFields);

        checkFields();
        clickedTickets.add(btn);
    });
}
