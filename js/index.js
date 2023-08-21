window.onload=()=>{
    "use strick"
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js")
    }
}

function calculadoraIMC() {
    var altura = Number(document.getElementById("altura").value)
    var peso = Number(document.getElementById("peso").value)
    

    var calcularIMC = (peso /(altura*altura))

    //document.getElementById("resposta").innerHTML= calcularIMC

if (calcularIMC < 18.5) {
    document.getElementById("resposta1").innerHTML= " Seu IMC é" + calcularIMC 
    document.getElementById("resposta2").innerHTML= " sua classificação é magro ou abaixo do peso"
    document.getElementById("resposta3").innerHTML= " você apresenta risco moderado a sua saude, coma mais"
    
} else if(calcularIMC > 18.5 && calcularIMC < 25) {
    document.getElementById("resposta1").innerHTML= "Seu IMC é " + calcularIMC 
    document.getElementById("resposta2").innerHTML= " sua classificação é normal  ou eutrófico"
    document.getElementById("resposta3").innerHTML= " nenhum risco a sua saude"

}else if(calcularIMC >=  25 && calcularIMC < 30) {
    document.getElementById("resposta1").innerHTML= "Seu IMC é " + calcularIMC
    document.getElementById("resposta2").innerHTML= " sua classificação é sobrepeso  ou pré-obeso"
    document.getElementById("resposta3").innerHTML= " apresenta um risco moderado a saude, vá para uma academia"

}else if(calcularIMC >=  30) {
    document.getElementById("resposta1").innerHTML= "Seu IMC é " + calcularIMC 
    document.getElementById("resposta2").innerHTML= " OBESO DEMAIS, FECHE A BOCA GORDÃO COMA SALADA ROLIÇO"
    document.getElementById("resposta3").innerHTML= " MUITO GORDO, FAÇA LOW CARB, RISCO ALTO A SAÚDE"
}
    
}