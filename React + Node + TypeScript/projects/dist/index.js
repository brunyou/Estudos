"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Criar uma variável do tipo string
const user = "BrunoCPX";
console.log(user);
//Criar uma variável do tipo number
const idade = 18;
console.log(`Idade: ${idade}`);
//Criar variável do tipo boolean
const situation = true;
console.log(`Situação: ${situation}`);
//Criar variável do tipo array de strings
const courses = ["Curso de React", "Curso de Node.js"];
console.log(`Cursos: ${courses}`);
//Criar variável do tipo array de números
const amount = [5, 2, 7];
console.log(`Quantidade: ${amount}`);
//Criar variável do tipo "tuple" array com tipos diferentes
var person;
person = ["BrunoCPX", 18, true];
console.log(`Usuário: ${person[0]}`);
console.log(`Idade: ${person[1]}`);
console.log(`Situação: ${person[2]}`);
//Criar variável do tipo enum. Representa um conjunto de valores nomeados
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["Sunday"] = 1] = "Sunday";
    DayOfTheWeek[DayOfTheWeek["Monday"] = 2] = "Monday";
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 3] = "Tuesday";
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 4] = "Wednesday";
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 5] = "Thursday";
    DayOfTheWeek[DayOfTheWeek["Friday"] = 6] = "Friday";
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 7] = "Saturday";
})(DayOfTheWeek || (DayOfTheWeek = {}));
console.log(`Número que representa domingo: ${DayOfTheWeek.Sunday}`);
console.log(`Número que representa quarta-feira: ${DayOfTheWeek.Wednesday}`);
//Criar variável do tipo any e atribuir a ela qualquer valor
let randomValue = 10;
console.log(`Valor: ${randomValue}`);
randomValue = 'Brunão';
console.log(`Valor: ${randomValue}`);
//Criar variável do tipo null e undefined
let u = undefined;
let n = null;
console.log(`Valor indefinido: ${u}`);
console.log(`Valor nulo: ${n}`);
let client = {
    name: "BrunoCPX",
    amount: 100
};
console.log(`Cliente: ${client.name}`);
console.log(`Valor do cliente: ${client.amount}`);
//Criar uma variável utilizando union indicando um ou mais tipos
const value = "BrunoCPX";
console.log(`Valor pode ser string ou boolean: ${value}`);
//# sourceMappingURL=index.js.map