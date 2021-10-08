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

    // adding event listener that will close when click outside
    if($("#navigation-toggler").hasClass('opened') && !$("#navigationlinks").hasClass('h-0 hidden')){
        $('main').click(event => {
            if((!$("#navigationlinks").hasClass('h-0 hidden') && $("#navigation-toggler").hasClass('opened'))){
                // turning off #navigation-toggler visible state
                $("#navigation-toggler").toggleClass('opened');
    
                // turning off #navigationlinks visible state
                $("#navigationlinks").toggleClass('h-0 hidden'); 
            }
        });
    }
};