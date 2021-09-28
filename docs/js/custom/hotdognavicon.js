$(document).ready(function(){

    // adding an event handler to all link to close the hotdogicon 
    $("#navigation-toggler").click(function(event){
        toggleNav();
    });
});


const toggleNav = () => {
    // togggling #navigation-toggler isible state
    $("#navigation-toggler").toggleClass('opened');


    // togggling #navigationlinks visible state
    $("#navigationlinks").toggleClass('h-0 hidden');
}