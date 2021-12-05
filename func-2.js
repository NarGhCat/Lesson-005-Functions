let result = 0;

function calculate(sign, arr) {
    if (sign === "+") {
        for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        }
    }   else if (sign === "*") {
        result = 1;
        for (let i = 1; i < arr.length; i++) {
            result *= arr[i];
            }
    }   else if (sign === "/") {
        result = arr[0] / arr[1];
        for (let i = 1; i < arr.length; i++) {
            result /= arr[i];
            }
    }   else if (sign === "-") {
        for (let i = 0; i < arr.length; i++) {
            result -= arr[i];
            }
        }
    return result;
}
calculate("*", [5, 7, 14, 20]);
console.log(result);