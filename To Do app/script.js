const toDoList = [];
function takeToDo(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    toDoList.push(name);

    inputElement.value = '';

    
    let finalToDo = '';
    for (let i = 0; i < toDoList.length; i++){
        console.log(i);
        const list = `<p>${toDoList[i]}</p>`;
        finalToDo += list;
    }

    document.querySelector('.js-output')
        .innerHTML = finalToDo;
}
    