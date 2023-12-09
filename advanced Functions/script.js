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