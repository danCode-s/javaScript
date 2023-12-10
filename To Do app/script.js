let toDoList = ['make dinner'];


saveList();

renderToDo();

function takeToDo(){
    saveList();
    
    
    const inputElement = document.querySelector('.js-input');
    const dateElement = document.querySelector('.js-due-date');
    const name = inputElement.value;
    const dueDate = dateElement.value;
    
    toDoList.push({
        name,
        dueDate,
    });
    
    
    getList();
    
    
    inputElement.value = '';
    
    renderToDo();
    
}


function renderToDo(){
    
    let finalToDo = '';

    toDoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;

        const list = `
        <div>${name}</div>
        <div>${dueDate}</div>
            <button
            class="red-btn delete-btn">
            Delete</button>
        
        `;
        finalToDo += list;
    });

    document.querySelector('.js-output')
        .innerHTML = finalToDo;
    


    document.querySelectorAll('.delete-btn')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                toDoList.splice(index, 1);
                renderToDo();
                getList();
                
            });

        });
    
        
}
document.querySelector('.add-btn')
.addEventListener('click', () => {
    takeToDo();
});


    

function saveList(){
    toDoList = JSON.parse(localStorage.getItem('list'));
}
function getList(){
    localStorage.setItem('list', JSON.stringify(toDoList));
}