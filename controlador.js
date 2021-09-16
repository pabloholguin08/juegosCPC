
let contador=0;

let calcular=document.getElementById("calcular");
calcular.addEventListener("click",verificarRespuesta);

let numeroA=document.getElementById("siguiente");
numeroA.addEventListener("click",aleatorio)

let puntuacion=document.getElementById("puntuacion");
puntuacion.addEventListener("click",mostrarPuntos)

let gif=document.getElementById("gif");

function verificarRespuesta(){
    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let operacion=document.getElementById("operacion").value;
   
    if(operacion=="1"){
        let calcularResultado=Number(numero1)+Number(numero2);
        console.log("Estoy sumando");
        if(resultado==calcularResultado){
            gif.classList.remove("invisible");

            gif.src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU"
            setTimeout(function(){
                gif.src="";
                gif.classList.add("invisible");
            },5000)
            contador++;
        }else{
            gif.classList.remove("invisible");
            gif.src="https://giphy.com/embed/3jmqIaBE8x86xwbSbD";
            setTimeout(function(){
                gif.src="https://giphy.com/embed/3jmqIaBE8x86xwbSbD";
            })
        }
    }else if(operacion=="2"){
        let calcularResultado=Number(numero1)-Number(numero2);
        console.log("Estoy restando");
        if(resultado==calcularResultado){
            gif.classList.remove("invisible");

            gif.src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU"
            setTimeout(function(){
                gif.src="";
                gif.classList.add("invisible");
            },5000)
            contador++;
        }else{
            gif.classList.remove("invisible");
            gif.src="https://giphy.com/embed/3jmqIaBE8x86xwbSbD";
            setTimeout(function(){
                gif.src="https://giphy.com/embed/3jmqIaBE8x86xwbSbD";
            })
        }
    }else if(operacion=="3"){
        let calcularResultado=Number(numero1)*Number(numero2);
        console.log("Estoy multiplicando");
        if(resultado==calcularResultado){
            gif.classList.remove("invisible");

            gif.src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU"
            setTimeout(function(){
                gif.src="";
                gif.classList.add("invisible");
            },5000)
            contador++;
        }else{
            gif.classList.remove("invisible");
            gif.src="https://giphy.com/embed/3jmqIaBE8x86xwbSbD";
            setTimeout(function(){
                gif.src="https://giphy.com/embed/3jmqIaBE8x86xwbSbD";
            })
        }
        
    }
}

function aleatorio(){

    let numero1=document.getElementById("numero1");
    let numero2=document.getElementById("numero2");
    let resultado=document.getElementById("resultado")

    numero1.value=numeroAleatorio(1,10);
    numero2.value=numeroAleatorio(1,10);
    resultado.value="";

    gif.classList.add("invisible");

    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
}

function mostrarPuntos(){
    
    let trofeo=document.getElementById("imagen");
    trofeo.classList.remove("invisible");

    let titulo1=document.getElementById("buenas");
    titulo1.textContent=("Buenas: "+contador);

    let titulo2=document.getElementById("malas");
    setTimeout(function(){
        trofeo.classList.add("invisible");
        titulo1.textContent="";
    },5000)
}






