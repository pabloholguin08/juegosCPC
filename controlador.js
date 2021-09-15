let calcular=document.getElementById("calcular");
calcular.addEventListener("click",verificarRespuesta);

let numeroA=document.getElementById("siguiente");
numeroA=addEventListener("click",aleatorio)

let gif=document.getElementById("gif");

function verificarRespuesta(){

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;

    let calcularResultado=Number(numero1)+Number(numero2);
    console.log("hice click");

    if(resultado==calcularResultado){
        gif.classList.remove("invisible");
        gif.src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU"
    }else{
        gif.classList.remove("invisible");
        gif.src="https://giphy.com/embed/3jmqIaBE8x86xwbSbD"
    }
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function aleatorio(){
    numero1.value=numeroAleatorio(1,10);
    numero2.value=numeroAleatorio(1,10);
}

