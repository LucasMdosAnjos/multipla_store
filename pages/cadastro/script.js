function gravarFormularioCadastro() {
    // Variaveis que pegam o id de cada input
    var nome = document.getElementById("name");
    var email = document.getElementById("email");
    var senha = document.getElementById("password");

    if (nome.value == "" || email.value == "" || senha.value == "") {
        alert("Todos os campos devem ser preenchidos!");
        // print('Todos os campos devem ser preenchidos!');

        return;
    } else {
        alert("Os dados foram gravados com sucesso");
        // print('Os dados foram gravados com sucesso');
        // envia o formulário
    }
}