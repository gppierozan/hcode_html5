//cria o array
let data = [];

//cria a lista
function renderTodo(){
    //limpa lista
    document.querySelector('.todo').innerHTML="";
    data.forEach(task =>{
        //cria a tarefa
        let li = document.createElement('li');

        //adiciona a tarefa
        li.innerHTML=`
            <input type="checkbox" id="task-${task.id}">
            <label for="task-${task.id}}">${task.title}</label>
            <button type="button">x</button>
        `;

        li.querySelector('input').addEventListener("change", e =>{
            if (e.target.checked){
                li.classList.add('complete');
            } else {
                li.classList.remove('complete');
            }
        })

        li.querySelector('button').addEventListener('click', e=>{

            let button = e.target; //seleciona o botao
            let li = button.parentNode; //seleciona o pai, que é o li
            let input = li.querySelector('input'); //seleciona o input
            let id = input.id; //seleciona o id
            let idArray = id.split('-'); //separa o id
            let todoId = idArray[1]; //guarda o id
            let title = li.querySelector('label').innerText;

            if (confirm(`Realmente deseja excluir a tarefa ${title} ?`)){
                data = data.filter(task => task.id !== parseInt(todoId)); //como só tem uma condição pode ser feito direto na funcao anonima
                renderTodo();
            }
        })

        document.querySelector('.todo').append(li);
    });
};

document.querySelector('#new-task').addEventListener('keyup', e =>{
    if (e.key === 'Enter'){
        //insere a tarefa
        data.push({
            id:data.length+1,
            title:e.target.value
        });
        //limpa o input
        e.target.value="";

        renderTodo();
    };
});
renderTodo();