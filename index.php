<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exo ville API</title>
    <style>
    .error{
        color:red;
    }
    .view{
        border: 1px solid black;
        min-height: 200px;
        width: 80%;
        margin:auto;
        padding: 25px;
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
    <form action="https://geo.api.gouv.fr/communes/" method="GET">
        <input type="text" name="nom" id="form-ville">
        <input type="submit" value="Envoyer">
    </form>

    <div class="view"></div>

    <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>