function getLastValue(array){
    const lastValue = array.length - 1;
    console.log(array[lastValue]);
}

getLastValue([2,3,43,32]);

function arraySwap(array){
    const firstValue = array[0];
    const lastValue = array[array.length - 1];

    array[0] = lastValue;
    array[array.length - 1] = firstValue;

    return array;
}

console.log(arraySwap([1, 2, 323, 434, 4]));


function addNum(arr_1, num){
    let newArr = [];
    for (let i = 0; i < arr_1.length; i++){
        newArr.push(arr_1[i] + num);
    }
    return newArr;
}

console.log(addNum([1, 2, 3], 2));

function addArrays(arr_1, arr_2){
    let newArr = [];
    for (let i = 0; i < arr_1.length; i++){
        newArr.push(arr_1[i] + arr_2[i]);
    }
    return newArr;
}
console.log(addArrays([1, 2, 3], [1, 1, 3]));

function minMax(num){
    let result = {
        min: null,
        max: null
    };
    for (let i = 0; i < num.length; i++){
        const value = num[i]
        if (result.min === null || value < result.min) {
            result.min = value;
          }

          if (result.max === null || value > result.max) {
            result.max = value;
          }
    }

    return result;
}

console.log(minMax([]));

function countWords(words) {
    const result = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (!result[word]) {
        result[word] = 1;
      } else {
        result[word]++;
      }
    }

    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));


const arr1 = ['hello', 'search', 'new', 'search'];
function findIndex(array, word){
    let final = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === word){
            final = i;
            break;
        } else {
            final = -1;
        
            
        }
    }
    console.log(final);
}

findIndex(arr1, 'new');



function removeEgg(foods){
    let counter = 0;
    let finalArr = [];
    for (let i = 0; i < foods.length; i++){

        if (foods[i] == 'egg'){
            counter++;

            continue;
        }else {
            finalArr.push(foods[i]);
        }
    
    }
    console.log(counter);
    console.log(finalArr);

}

removeEgg(['pasta', 'egg', 'egg', 'chicken', 'egg']);
