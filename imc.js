let altura = document.getElementById("Input_altura")


let peso = document.getElementById("Input_peso")

let clasificacao = document.getElementById("Classi")

let printIMC = document.getElementById("Mostra")




function calcular_imc(){

    let altura_certa =Number(altura.value.replace(",", "."))

let peso_certo = Number(peso.value.replace(",","."))

    

    if (altura_certa > 3){
        altura_certa = altura_certa/100
        
    }
    let imc_primeiro = altura_certa * altura_certa

    let IMC = peso_certo/imc_primeiro

    
    



    if (IMC < 18.5){
        clasificacao.innerHTML = "Você está abaixo do peso"
}
    else if (IMC > 18.5 && IMC < 24.9){
        clasificacao.innerHTML = "Seu peso é ideal! Parabéns!"
}
    else if (IMC > 24.9 && IMC < 29.9){
        clasificacao.innerHTML = "Você está sobre peso! Cuidado!"
}
    else if (IMC > 29.9 && IMC < 34.9){
        clasificacao.innerHTML ="Você tem Obesidade grau I. Procure ajuda!"
}
    else if (IMC > 34.9 && IMC < 39.9){
        clasificacao.innerHTML = "Você tem Obesidade grau II. Procure ajuda urgentemente."

}
    else if (IMC > 39.9){
        clasificacao.innerHTML = "Você tem Obesidade Grau III. Procure ajuda, você corre risco de vida."

}
    
    printIMC.innerHTML = "Seu imc é de " + IMC.toFixed(2) +"."



}

