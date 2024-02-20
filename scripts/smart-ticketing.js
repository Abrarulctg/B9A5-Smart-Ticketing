
function findSeat(targetSeat) {
    // const selectedSeat = document.getElementById(targetSeat);
    // console.log()
    const seats = ['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
    if (seats.includes(targetSeat)) {
        console.log(targetSeat.classList)
    }
    else {
        console.log('not found', targetSeat)
    }

}


// Removing Background color from the seat button
// function removeBackgroundColorById(elementId) {
//     const element = document.getElementById(elementId);
//     element.classList.remove('bg-[#F7F7F7');
// }


// Set and Remove Background color to the seat button
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#F7F8F8]');
    element.classList.add('bg-[#1dd100]');
}

// Get and Set Seat Quantity
function updateTotalSeat() {
    const totalSeatElement = document.getElementById('total-seat');
    const totalSeatText = totalSeatElement.innerText;
    const totalSeat = parseInt(totalSeatText);

    const totalSeatCount = totalSeat - 1;
    totalSeatElement.innerText = totalSeatCount;
}


// create child element to purchase table
function createTableRowInPurchaseForm(selectedSeat) {
    const tr = document.createElement("tr");
    const tdSeat = document.createElement("td");
    const tdClass = document.createElement("td");
    const tdPrice = document.createElement("td");
    tdSeat.innerText = selectedSeat;
    tdClass.innerText = "Economy";
    tdPrice.innerText = 550;
    tdPrice.classList.add('text-right');

    // append td to the table row
    tr.appendChild(tdSeat)
    tr.appendChild(tdClass)
    tr.appendChild(tdPrice)
    document.getElementById("selected-seat-container").appendChild(tr);
}



// function updateTotal(){
//     const 
// }

// Update Selected Seat Count
function updateSelectedSeatCountById(elementId) {
    let selectedSeatCountElement = document.getElementById('selected-seat');
    const selectedSeatCountText = parseInt(selectedSeatCountElement.innerText);
    selectedSeatCountElement.innerText = elementId;
    return elementId;
}





// ============================ New Function Starting here ============================

let seatList = document.getElementsByClassName('sit-button');
// console.log(seatList)

let selectedSeats = [];
let seatCounter = 0;
let totalPrice = 0;
// const ticketPrice = 550;


for (const seat of seatList) {
    // console.log(seat.className)
    seat.addEventListener('click', function (seatEvent) {
        console.log(seatEvent)
        // seatCounter = seatCounter + 1;

        // console.log("clicked btn")
        if (seatCounter < 4) {
            if (selectedSeats.includes(seat)) {
                alert("You can't select a seat multiple time;")
                return;
            }
            else {
                seatCounter = seatCounter + 1;
                console.log("clicked btn", seat);
                updateTotalSeat();
                setBackgroundColorById(seat.id);
                createTableRowInPurchaseForm(seat.id);

                updateSelectedSeatCountById(seatCounter);


                // getting Total Price element
                const totalPriceElement = document.getElementById('total-price');
                const totalPriceText = parseInt(totalPriceElement.innerText);
                const totalPrice = seatCounter * 550;

                totalPriceElement.innerText = totalPrice;

                console.log(totalPrice)

            }
        }
        else {
            alert("You can not select more than 4 seats.")
            return;
        }
        selectedSeats.push(seat);
        console.log(selectedSeats)
    })
}





