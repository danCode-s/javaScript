
function removeEgg(foods){
    let counter = 1;
    let finalArr = [];
    for (let i = 0; i < foods.length; i++){


        // finalArr.push(foods[i]);
        if(foods[i] === 'egg' && counter <= 2){
            counter++;
            continue;
        } else {
            finalArr.push(foods[i]);
        }

    
    }
        return finalArr;

    
    // console.log(finalArr);

    
}
console.log(removeEgg(['egg', 'egg', 'egg', 'chicken', 'egg', 'egg']));