function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const Compare = { LESS_THAN: -1, BIGGER_THAN: 1 };

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function bubbleSort(arr, compare = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) { // refer to note below
            if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

//==============================================================

let unsortedArr = [10,5,9,7,10,1,2,5,4]
let swapped;

function bubbleSort(arr) {
    swapped = false;
    let end = arr.length - 1;
    for (let i = 0, j = 1; i < end; i++, j++) {
        if (arr[i] > arr[j]) {
            swapped = true;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
}

do {
   // bubbleSort(unsortedArr);
} while (swapped)

console.log(unsortedArr)
//======================================================

function myBubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
           if(arr[i] > arr[j]) {
               [arr[i],arr[j]] = [arr[j],arr[i]]
           }
        }
    }
    console.log("my function:::")
    return arr;
}

console.log(myBubbleSort(unsortedArr))