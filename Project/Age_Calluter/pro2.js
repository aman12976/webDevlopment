function calculateTip() {
    // Get input values
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let serviceQuality = parseFloat(document.getElementById("serviceQuality").value);
    let persons = parseInt(document.getElementById("persons").value);

    // Validation
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    if (isNaN(persons) || persons <= 0) {
        alert("Please enter a valid number of persons.");
        return;
    }

    // Calculate tip
    let tipAmount = billAmount * serviceQuality;

    // Calculate total bill including tip
    let totalBill = billAmount + tipAmount;

    // Calculate amount per person
    let perPersonAmount = totalBill / persons;

    // Display result
    document.getElementById("perPersonAmount").innerText =
        "₹" + perPersonAmount.toFixed(2);

    document.getElementById("result").style.display = "block";
}