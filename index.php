<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo ville API</title>
    <style>
    body{
        text-align: center;
    }
    .error{
        color:red;
    }
    .view{
        border: 2px solid black;
        min-height: 300px;
        width: 50%;
        margin:auto;
        margin-top: 30px;
        padding: 15px;
    }
    .overlay{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,0.6);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>

<h1>Récupérer les infos d'une ville à partir de l'api :<br><a href="https://api.gouv.fr/api/api-geo.html">https://api.gouv.fr/api/api-geo.html</a></h1>
    <p style="font-size: 2rem;">URL de base :<br>https://geo.api.gouv.fr/communes/?nom=VILLE</p>

    <form action="https://geo.api.gouv.fr/communes/" method="GET">
        <input type="text" name="nom" id="form-ville" placeholder="Ville">
        <input type="submit" value="Envoyer">
    </form>

    <div class="view"></div>

    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>