const toDoList = [];

renderToDo();

function takeToDo(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    toDoList.push(name);

    inputElement.value = '';
    renderToDo();

    
}
function renderToDo(){

    let finalToDo = '';
    for (let i = 0; i < toDoList.length; i++){
        console.log(i);
        const list = `
        <p>${toDoList[i]}
            <button onclick="
            toDoList.splice(${i}, 1);
            renderToDo();
            ">
            Delete</button>
        </p>
        `;
        finalToDo += list;
    }

    document.querySelector('.js-output')
        .innerHTML = finalToDo;
}
    