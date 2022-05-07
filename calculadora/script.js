function insert(num){
    var numero=document.querySelector("#resultado").innerHTML
        document.querySelector("#resultado").innerHTML=numero+num
}

function clean(){
    document.querySelector("#resultado").innerHTML=""
}

function apagar(){
    var del=document.querySelector("#resultado").innerHTML
        document.querySelector("#resultado").innerHTML = del.substring(0, del.length -1)
}

function calcular(){
    var resultado=document.querySelector("#resultado").innerHTML
    if(resultado){
        document.querySelector("#resultado").innerHTML=eval(resultado)
    }else{
        document.querySelector("#resultado").innerHTML="0"
    }
}
    
