function reverseArray(arr) {
    let newArr = [];

    for(let i = arr.length -1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    let arrCopy = [];
    for(number of arr) 
        arrCopy.push(number);

    
    let reverseArray = [];
    for(let i = 0; i < arr.length; i++) {
        let value = arrCopy.pop();
        reverseArray.push(value);
    }

    for(let i = 0; i < arr.length; i++) {
        arr[i] = reverseArray[i];
    }
}

console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);