let arrOdd = [];
let arrEven = [];

function sepNum(arr) {
    for (num of arr) {
        if (num % 2 === 0) {
            arrEven.push(num);
        }  else {
            arrOdd.push(num);
        }
    }
    
}
sepNum([10, 15, 20, 25, 30]);

console.log(arrOdd);
console.log(arrEven);