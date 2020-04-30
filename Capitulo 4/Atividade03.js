function arrayToList(arr) {
    let list = null;
    let obj = {};

    for(let i = arr.length - 1; i >= 0; i--) {
        obj = {};
        obj.value = arr[i];
        obj.rest = list;
        list = obj;
    }

    return list;
}

function listToArray(list) {
    let arr = [];

    let rest;

    while(rest !== null) {
        arr.push(list.value);
        list = list.rest;
        rest = list;
    }

    return arr;
}

function prepend(element, list) {
    const newList = {
        value: element,
        rest: list
    };
    return newList;
}

function nth(list, i) {
    if(i === 0)
        return list.value;
    if(list.rest === null)
        return undefined;

    return nth(list.rest, i - 1);
}

console.log(arrayToList([10, 20]));

console.log(arrayToList([10, 20, 30]));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));