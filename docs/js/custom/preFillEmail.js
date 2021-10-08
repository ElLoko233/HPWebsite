$(document).ready(function (){
    const EmailForm = document.querySelector('#emailForm');
    $("#emailForm").submit(function(e) {
        // preventing form from refreshing page
        e.preventDefault();

        // creating the email

        // accessing subject
        const subject = EmailForm['Contact-Subject'].value;

        // acccesing name
        const name = EmailForm['Contact-Name'].value;

        // accessing phone number
        const phonenumber = EmailForm['Contact-Telephone'].value;

        // accessing message
        const message = EmailForm['Contact-Message'].value;

        // creating the email body
        const body = `Greetings, my name is ${name}%0D%0A %0D%0A %0D%0A${message}%0D%0A %0D%0AMy phone number: ${phonenumber}`;

        // opening the email
        window.open(`mailto:info@shps.education?subject=${subject}&body=${body}`);
    });
})