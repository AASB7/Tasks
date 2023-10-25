function determineRaceDetails() {
    const age = parseInt(document.getElementById("age").value);
    const early = document.getElementById("early").checked;
    let raceDetails = "";

    if (age > 18) {
        if (early) {
            raceDetails = `You will race at 9:30 am. Your race number is ${getRaceNumber(1000)}`;
        } else {
            raceDetails = `You will race at 11:00 am. Your race number is ${getRaceNumber(0)}`;
        }
    } else if (age < 18) {
        raceDetails = `Youth registrants will race at 12:30 pm. Your race number is ${getRaceNumber(0)}`;
    } else {
        raceDetails = "Please see the registration desk.";
    }

    document.getElementById("raceDetails").textContent = raceDetails;
}

function getRaceNumber(offset) {
    // Generate a random race number
    return Math.floor(Math.random() * 1000) + offset;
}
