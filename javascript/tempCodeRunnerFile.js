console.log("Trabalhando com Loops");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
    'Itajaí'
);


const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Itajaí";


console.log("Destinos possíveis:");
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador <= 4){
    if(listaDeDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);
