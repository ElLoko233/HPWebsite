$(document).ready(() => {
    //  getting all the matriculant cards
    const matriculant = $('#matric-results .matriculants .matriculant');

    // adding a click event to all of them
    matriculant.click(flipCard(this));

});

let flipCard