//Création d'un overlay de chargement de requête par le biais de la fonction setOverlay()
function setOverlay(){
    $('body').append(`
    <div class="overlay"><img src="img/ajax-loader.svg"></div>
    `);
}
//Fonction permettant la suppression de l'overlay crée ci-dessus
function removeOverlay(){
    $('.overlay').remove();
}

//Création d'un écouteur d'événement permettant de faire une requête AJAX si toutes les conditions sont respectées
$('form').submit(function(e){
    //On empêche le formulaire d'agir normalement
    e.preventDefault();

    //Efface tous les messages d'erreurs et de succès eventuels
    $('form').find('.error').remove();
    $('form').find('.results').remove();


    //ville prendra la valeur du champ #form-ville
    let ville = $('#form-ville').val();

    //Si ville.length est inférieur à 1, la requête AJAX ne se fera pas
    if(ville.length < 1){
        $('.view').html('<p class="error">Vous devez écrire au moins 1 caractère</p>');
    } else{

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            dataType: 'json',
            data: $(this).serialize(),
            //Initialisation de l'overlay avant l'envoi du formulaire
            beforeSend: function(){
                setOverlay();
            },
            //En cas de succès
            success: function(data){
                //Création de l'en-tête du tableau
                let cityTables = $(`
                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Code Postaux</th>
                            <th>Population</th>
                            <th>Département</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>`);

                //Récupération des données json interprétées(city correspond à une seule donnée de l'objet récupéré)
                data.forEach(function(city){

                    //Création de la ligne tr du tableau cityTables
                    let newCity = $('<tr></tr>');

                    //Création de la td nom
                    let cityName = $('<td></td>');
                    cityName.text(city.nom);

                    //Création de la td code postal
                    let cityPostalCode = $('<td></td>');
                    cityPostalCode.html(city.codesPostaux.join('<br>'));

                    //Création de la td population
                    let cityPopulation = $('<td></td>');
                    cityPopulation.text(city.population);

                    //Création de la td code département
                    let cityDepartment = $('<td></td>');
                    cityDepartment.text(city.codeDepartement);

                    //Insertion des 4 td dans la tr
                    newCity.append(cityName);
                    newCity.append(cityPostalCode);
                    newCity.append(cityPopulation);
                    newCity.append(cityDepartment);

                    //Placer la ligne créée dans le tableau cityTables
                    cityTables.find('tbody').append(newCity);
                });
                $('form').append('<p class="results">Résultats:'+data.length+'</p>')
                //Affiche le tableau dans la div ".view"
                $('.view').html(cityTables);
            },
            //Efface l'overlay une fois la requête terminée
            complete: function(){
                removeOverlay();
            },
            //En cas de problème de connexion
            error: function(){
                $('.view').html('<p class="error">Problème de connexion</p>');
            }

        });
    }

});
