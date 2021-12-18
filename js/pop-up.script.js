$(document).ready(function () {

    //Evento click en botón submit
    $('#submit-button').click(function(event) {

        //Evito comportamiento por defecto
        event.preventDefault();

        //Muestro pop-up
        $('.popup').show();
        
    });

    

    //Evento click en botón X de pop-up
    $('.caption i').click(function() {

        //Oculto pop-up
        $('.popup').hide();

    });



    //Si se apreta fuera de .caption, se cierra pop-up
    $('.popup').click(function(event) {

        //Guardamos el elemento clickado
        let elementClicked = event.target;

        //Si el elemento clickado no está dentro del recuadro del popup, cerramos el popup
        if (!$.contains(document.getElementById('pop-up'), elementClicked)) {
            $('.popup').hide();
        }

    }); 
    
});