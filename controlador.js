let calcular = document.getElementById("calcular");
calcular.addEventListener("click",verificar);
let gif=document.getElementById("gif");

function verificar(){
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;

    let calcularResultado=Number(numero1)+Number(numero2);

    if(resultado==calcularResultado){
        gif.classList.remove("invisible");
        gif.classList.add("visible");
    }else{

    }
}