const toDoList = [];

renderToDo();

function takeToDo(){
    const inputElement = document.querySelector('.js-input');
    const dateElement = document.querySelector('.js-due-date');
    const name = inputElement.value;
    const dueDate = dateElement.value;

    
    toDoList.push({
        name,
        dueDate
    })
    
    console.log(toDoList);
    inputElement.value = '';
    
    renderToDo();
    
}
function renderToDo(){

    let finalToDo = '';
    for (let i = 0; i < toDoList.length; i++){
        const todoObject = toDoList[i];

        const { name, dueDate } = todoObject;
        
        const list = `
        <p>${name}${dueDate}
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
    