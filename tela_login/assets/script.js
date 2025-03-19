document.getElementById('btn-submit').addEventListener('click', e =>{
    alert("O botão foi clicado.");
})

document.getElementById('form-login').addEventListener('mouseenter', e =>{
    console.log("O mouse entrou no formulário.");
})

document.querySelector('#form-login').addEventListener('mouseleave', e =>{
    console.log("O mouse saiu da área do formulário.");
})

document.querySelector('#form-login').addEventListener('submit', e =>{
    e.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    alert(`Formulário enviado! ${email} e ${password}`); //tem que ser crase para colocar as variaveis dentro sem concatenar

    let json = {
        email, //quando forem iguais não precisa colocar chave : valor
        password
    }
    alert(json);
    /*
    let stringJSON = JSON.stringify(json); //transforma em string
    alert(stringJSON);

    let jsonParse = JSON.parse(stringJSON); //recebe a string e transforma em objeto
    alert(jsonParse);
    */
    if (!json.email){
        alert("O campo E-MAIL precisa ser preenchido.");
    } else if (!json.password){
        alert("O campo SENHA precisa ser preenchido.");
    }
})