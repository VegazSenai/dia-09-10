// Estrutura de decisão if, else if e else

//     REVISÃO
//    O que é uma variável?
//    Quais são os tipos de variáveis
//    Comando de entrada e saída de dados
try{
    while(true){
    let idade = Number (prompt("Digite sua idade: "));
    

if(idade <= 0){
    alert("Erro! Idade inválida");
    break;
}
else if(idade >= 1 && idade <= 12){
    alert("Você é uma criança");
    break;
}
else if(idade >= 13 && idade <= 17){
    alert("Você é um adolescente");
    break;
}
else if(idade >= 18 && idade <= 59){
    alert("Você é um adulto");
    break;
}
else if(idade >= 60){
    alert("Você é um idoso");
    break;

}
}
} catch(error){
    alert("Erro! Idade inválida");
}