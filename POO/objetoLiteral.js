const user = {
    nome: "Bruno Jebedaya",
    email: "hipocondroc3@getway.com",
    nascimento: "2002/04/25",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log("Infos:\n","Nome:", this.nome,"\nEmail:", this.email);
    }
}


// user.exibirInfos();
// const exibir = user.exibirInfos;
// exibir();

const exibir = function(){
    console.log(this.nome)
}

const exibirNome = exibir.bind(user);

exibirNome
