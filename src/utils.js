// Working with arrays

export function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

export function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

export function addUniqueIem(arr, value) {
    let index = arr.indexOf(value);

    if (index !== -1) {
        arr.splice(index, 1);
    }

    arr.push(value);

    if (arr.length > 10) {
        arr.shift();
    }
    return arr;
}
