<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</head>
<body class="bg-dark">
    
    <header>

    </header>
    <main>
        <div class="container mt-5">
            <div class="row">
                <div class="col-8">
                    <h1 class="text-white">DIVIERTETE Y APRENDE</h1>
                    <form class="p-5">
                        <div class="row">
                            <div class="col">
                                <input type="number" class="form-control caja" id="numero1" value="1">
                            </div>
                            <div class="col">
                                <input type="text" class="form-control caja" id="operación" value="+" readonly>
                            </div>
                            <div class="col">
                                <input type="number" class="form-control caja" id="numero2" value="1">
                            </div>
                            <div class="col">
                            <input type="text" class="form-control caja" id="igual" value="=" readonly>
                            </div>
                            <div class="col">
                            <input type="number" class="form-control caja" id="resultado">
                            </div>
                            <button type="button" class="btn btn-primary mt-5" id="calcular">CALCULAR</button>
                        </div>
                    </form>
                </div>
                <div class="col-4">

                </div>
            </div>
            <div class="row">
                <div class="col-8">
                <iframe src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU" width="480" height="480" frameBorder="0" class="giphy-embed invisible" id="gif" allowFullScreen></
                </div>
            </div>
        </div>
    </main>
    <footer>

    </footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
<script src="controlador.js"></script>
</body>

</html>