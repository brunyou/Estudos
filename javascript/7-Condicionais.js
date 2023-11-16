console.log("Trabalhando com Condicionais");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
    'Itajaí'
);


const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = false;


console.log("Destinos possíveis:");
console.log(listaDeDestinos);



// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo um item
// }
// else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo um item
// }
// else {
//     console.log("Comprador não é maior de idade, venda proibida");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
        console.log("Comprador maior de idade ou está acompanhado");
        listaDeDestinos.splice(1, 1); //removendo um item
    }
    else {
        console.log("Comprador não é maior de idade, venda proibida");
    }

console.log("Embarque: \n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem.");
}else{
    console.log("Você não pode embarcar.");
}

console.log(listaDeDestinos);


// console.log(idadeComprador < 18);
// console.log(idadeComprador > 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);