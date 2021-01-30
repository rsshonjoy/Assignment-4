function handleTicketChange(ticket, isIncrease){
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    document.getElementById(ticket + "-count").value = ticketNewCount;

    let ticketTotal = 0;
    if (ticket == "firstClass") {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticket == "economy") {
        ticketTotal = ticketNewCount * 100;
    }
    document.getElementById(ticket + "-total").innerText = "$" + ticketTotal;
    calculateTotal();
}
function calculateTotal(){
    const firstClassCount = getInputValue("firstClass")
    const economyCount = getInputValue("economy")

    const ticketTotal = firstClassCount * 150 + economyCount * 100;
    document.getElementById("sub-total").innerText = "$" + ticketTotal;

    const tax = Math.round(ticketTotal * 0.1);
    document.getElementById("tax-amount").innerText = "$" + tax;

    const grandTotal = ticketTotal + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
}

function getInputValue(ticket){
    const ticketInput = document.getElementById(ticket + "-count");
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
const bookNow = document.getElementById("book-now");
bookNow.addEventListener("click", function(){
    const ticketCounter = document.getElementById("header-container");
    if (confirm("You want to buy this ticket")) {
        ticketCounter.style.display="none"
        const transactionArea = document.getElementById("success-message");
        transactionArea.style.display = "block"
    }else{
        ticketCounter.style.display="none"
        const transactionArea = document.getElementById("ooops-message");
        transactionArea.style.display = "block"
    }
})