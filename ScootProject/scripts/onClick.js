$(document).ready(function() {
    console.log('hey');

    // Utilisation d'un délégué d'événements pour le clic sur l'élément .burger
    $(document).on('click', '.burger', function() {
        $(this).toggleClass('active');
        $('nav').toggleClass('switch');
    });
});