let numero, saida;

function Gerar(){
    saida = "";
    numero = Number(document.getElementById("numero").value);
    //Pega o valor digitado no input = "numero"
    //e converte para número 

    if(numero < 0){
        saida = "Digite um número maior que zero."
    }else if(numero > 10)
    {
        saida = "<h3>digite um número menor que dez</h3>"
    }else{
        for(let i = 0; i <= 10; i++){
            saida += numero + " X "  + i + " = " + (numero * i) + "<br>";
        }
    }

   document.getElementById("resultado").innerHTML = saida;
    
}


function Mostrar(){

    let alunos = ["Ana", "Pedro", "Elvis", "Lucas"];

    let saida2 = "";
    for(let i = 0; i < alunos.length; i++){
        saida2 += alunos[i] + "<br>";
    }
    document.getElementById("alunos").innerHTML = saida2;   
}