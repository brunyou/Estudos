"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Como criar função!");
//Criar a função para receber duas variáveis do tipo string e retornar a string
function getUser(name, lastName) {
    return `${name} ${lastName}`;
}
console.log(getUser("Bruno", "Freitas"));
//Criar a função para receber duas variáveis do tipo número e retornar um numero
function getSpeed(current, add) {
    return current + add;
}
console.log(getSpeed(9, 3));
//Criar uma função para receber uma variavel do tpo numero e retornar boolean
function getSituation(current) {
    return (current >= 7 ? true : false);
}
console.log(getSituation(9));
//Criar uma função para receber uma variável do tipo any e retornar string
function getValue(value) {
    if (typeof value === "string") {
        return "Valor do tipo string.";
    }
    else {
        return "Valor diferente de string.";
    }
}
console.log(getValue(true));
// Função para receber somente stirng ou number e retornar string
function getType(valueType) {
    if (typeof valueType === "number") {
        return "A variável é do tipo number";
    }
    else {
        return "A variável é do tipo string";
    }
}
console.log(getType("Bruno"));
//# sourceMappingURL=functions.js.map