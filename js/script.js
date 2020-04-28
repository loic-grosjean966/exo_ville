$('form').submit(function(e){

    e.preventDefault();

    let ville = $('#form-ville');

    if(ville.val().length == 2 || ville.val().length < 2){
        $('form').prepend('Vous devez écrire au moins 3 caractères');
    } else{

    }

});
