$(document).ready(function (){
    // preventing form from refreshing page
    $("#emailForm").submit(function(e) {
        e.preventDefault();

        // creating the email
        CreateEmail();
    });

    let CreateEmail = () => {
        // accessing subject
        const subject = $('#Contact-Subject').val();

        // acccesing name
        const name = $('#Contact-Name').val();

        // accessing phone number
        const phonenumber = $('#Contact-Telephone').val();

        // accessing
        const message = $('#Contact-Message').val();

        // creating the email body
        const body = `Greetings, my name is ${name}%0D%0A %0D%0A %0D%0A${message}%0D%0A %0D%0AMy phone number: ${phonenumber}`;
        
        // opening the email
        window.open(`mailto:info@shps.education?subject=${subject}&body=${body}`)
    };
})