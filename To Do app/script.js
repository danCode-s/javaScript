const toDoList = [];
function takeToDo(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    console.log(toDoList);
    toDoList.push(name);

    inputElement.value = '';

    document.querySelector('.js-output')
    .innerHTML = `${toDoList}`;
}