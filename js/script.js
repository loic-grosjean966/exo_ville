function setOverlay(){
    $('body').append(`
    <div class="overlay"><img src="img/ajax-loader.svg"></div>
    `);
}
function removeOverlay(){
    $('.overlay').remove();
}

$('form').submit(function(e){

    e.preventDefault();

    $('form').find('.error').remove();

    let ville = $('#form-ville');

    if(ville.val().length == 2 || ville.val().length < 2){
        $('form').prepend('<p class="error">Vous devez écrire au moins 3 caractères</p>');
    } else{
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            dataType: 'json',
            data: $(this).serialize(),
            beforeSend: function(){
                setOverlay();
            },
            success: function(data){
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
                data.forEach(function(city){

                    let newCity = $('<tr></tr>');
                    //Création de la td
                    let cityName = $('<td></td>');
                    cityName.text(city.nom);
                    //Création de la td
                    let cityPostalCode = $('<td></td>');
                    cityPostalCode.text(city.codesPostaux);
                    //Création de la td
                    let cityPopulation = $('<td></td>');
                    cityPopulation.text(city.population);
                    //Création de la td
                    let cityDepartment = $('<td></td>');
                    cityDepartment.text(city.codeDepartement);
                    //Insertion des 4 td dans la tr
                    newCity.append(cityName);
                    newCity.append(cityPostalCode);
                    newCity.append(cityPopulation);
                    newCity.append(cityDepartment);


                    cityTables.find('tbody').append(newCity);
                });
                $('.view').html(cityTables);
            },
            complete: function(){
                removeOverlay();
            }

        });
    }

});
