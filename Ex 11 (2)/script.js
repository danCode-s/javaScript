
function removeEgg(foods){
    let counter = 0;
    let finalArr = [];
    const food = foods.reverse();
    for (let i = 0; i < foods.length; i++){
        // finalArr.push(foods[i]);
        if(food[i] === 'egg' && counter <= 2){
            counter++;
            continue;
        } else {
            finalArr.push(food[i]);
        }
        
        
    }
    console.log(food);
    return finalArr;

    
    // console.log(finalArr);

    
}
console.log(removeEgg(['egg', 'egg', 'egg', 'chicken', 'egg', 'egg']));