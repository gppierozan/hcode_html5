function calculaTabuada(){
    //recebe o DOM do tbody
    let tabuada = document.querySelector("#tabuada tbody");
    //limpa o site
    tabuada.innerHTML='';
    //recebe o valor para ser usado na tabuada
    let valorA = parseInt(document.querySelector("#valorA").value);
    //preenche a tabela com a tabuado do valor recebido
    for (let valorB = 0; valorB<=10; valorB++){
        let resultado = valorA*valorB;
        let template = `
            <td>${valorA}</td>
            <td>x</td>
            <td>${valorB}</td>
            <td>=</td>
            <td>${resultado}</td>
        `;
        //cria a linha da tabela
        let tr = document.createElement('tr');
        //insere as celulas na linha da tabela
        tr.innerHTML = template;
        //adiciona a linha na tabela
        tabuada.append(tr);
    }
}
//chama a função
calculaTabuada();
//"escutador" para receber o valor novo para ser calculado
document.querySelector("#valorA").addEventListener('change', calculaTabuada)