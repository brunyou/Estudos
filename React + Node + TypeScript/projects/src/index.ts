//Criar uma variável do tipo string
const user: string = "BrunoCPX";
console.log(user);

//Criar uma variável do tipo number
const idade: number = 18;
console.log(`Idade: ${idade}`);

//Criar variável do tipo boolean
const situation: boolean = true;
console.log(`Situação: ${situation}`);

//Criar variável do tipo array de strings
const courses: string[] = ["Curso de React", "Curso de Node.js"];
console.log(`Cursos: ${courses}`);

//Criar variável do tipo array de números
const amount: number[] = [5, 2, 7];
console.log(`Quantidade: ${amount}`);

//Criar variável do tipo "tuple" array com tipos diferentes
var person: [string, number, boolean];
person = ["BrunoCPX", 18, true];
console.log(`Usuário: ${person[0]}`);
console.log(`Idade: ${person[1]}`);
console.log(`Situação: ${person[2]}`);

//Criar variável do tipo enum. Representa um conjunto de valores nomeados
enum DayOfTheWeek {
    Sunday = 1,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday 
}
console.log(`Número que representa domingo: ${DayOfTheWeek.Sunday}`);
console.log(`Número que representa quarta-feira: ${DayOfTheWeek.Wednesday}`);

//Criar variável do tipo any e atribuir a ela qualquer valor
let randomValue: any = 10;
console.log(`Valor: ${randomValue}`);
randomValue = 'Brunão';
console.log(`Valor: ${randomValue}`);

//Criar variável do tipo null e undefined
let u: undefined = undefined;
let n: null = null;
console.log(`Valor indefinido: ${u}`);
console.log(`Valor nulo: ${n}`);

//Criar variável do tipo object
interface Client{
    name:string,
    amount:number,
}

let client:Client = {
    name: "BrunoCPX",
    amount: 100
}
console.log(`Cliente: ${client.name}`);
console.log(`Valor do cliente: ${client.amount}`);

//Criar uma variável utilizando union indicando um ou mais tipos
const value: string | boolean = "BrunoCPX";
console.log(`Valor pode ser string ou boolean: ${value}`);