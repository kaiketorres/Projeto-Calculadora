let numeros = [0,1,2,3,4,5,6,7,8,9]
let total = []
let tela = document.querySelector("main")

function numero_0(){  
    tela.innerHTML += 0
}

function numero_1(){  
    tela.innerHTML += 1  
}

function numero_2(){  
    tela.innerHTML += 2
}

function numero_3(){  
    tela.innerHTML += 3
}

function numero_4(){  
    tela.innerHTML += 4
}

function numero_5(){  
    tela.innerHTML += 5
}

function numero_6(){  
    tela.innerHTML += 6
}

function numero_7(){  
    tela.innerHTML += 7
}

function numero_8(){  
    tela.innerHTML += 8
}

function numero_9(){  
    tela.innerHTML += 9
}

function mais(){
    tela.innerHTML += "+"  
}

function teste(){
    tela.innerHTML += "-" 
}

function virgula(){
    tela.innerHTML += ","  
}

function dividir(){
    tela.innerHTML += "/"  
}

function multi(){
    tela.innerHTML += "*"  
}


function apagar(){
    tela.innerHTML = ""
}

function enter(){

let expresao = tela.innerHTML

let resultado = eval(expresao)

tela.innerHTML = resultado

}

function apagarUmValor(){

let expresao = tela.innerHTML

let novaExpresao = expresao.slice(0, -1);

tela.innerHTML = novaExpresao



}
    

    


