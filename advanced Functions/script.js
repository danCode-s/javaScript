/*
const add = function(){
    console.log(2 + 3);
};



function runTwice(func){
    func();
    func();
    
}

runTwice(add);


function added(){
    const change = document.querySelector('.js-add');
    change.innerHTML = `Loading...`;
    setTimeout(function(){
        change.innerHTML = `Finished`;
    }, 1000);
};


let timeoutId;
const addCart = function(){
    const toAdd = document.querySelector('.cart-add')
    toAdd.innerHTML = `Added`;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function(){
        toAdd.innerHTML = ``;
    }, 2000);
    
};
let intervalId;

let messages = 0;
function increment(){
    messages++;
}
function decrement(){
    messages--;
}

const titleChange = function (){
    
        
    
    
    intervalId = setInterval(function(){
        if(messages <= 0){
            document.title = 'App';
        } else {
             if(document.title === 'App'){
             document.title = `(${messages}) new messages`;
         } else {
             document.title = 'App';
         }
        }
    }, 1000);

}
titleChange();
*/

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 4));

const countPositive = (arr) => {
    let counter = 0;
    arr.forEach((element) => {
        if (element > 0){
            counter++;
        }

    }) 
    return counter;
} 

console.log(countPositive([1, -2, 2, 5,  5]));

const addNum = (array, num) => {
    return array.map(value => value + num);
}

console.log(addNum([1, 3, 3], 10));

const removeEgg = function (egg){
    let counter = 0;
    return egg.filter((value, index) => {
        if (value === 'egg' && counter < 2){
            counter++;
            return false;
        } 
        return true;
        }
        
        
    )
}

console.log(removeEgg(['egg', 'egg', 'new', 'hey', 'egg', 'chicken', 'egg']));