console.log("By using Anonymous Function.")

// 1. Print odd numbers in an array.
console.log("----------1. Print odd numbers in an array.----------");

let odd = function(arr){
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(odd(arr));

// 2. Convert all the strings to title caps in a string array
console.log("----------2. Convert all the strings to title caps in a string array.----------");

let str_caps = function(str_arr){
    for(let i = 0; i<str_arr.length; i++){
        str_arr[i] = str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1);
    }
    return str_arr;
}
let str_arr = ["the","gray","man"];
console.log(str_caps(str_arr));

// 3. Sum of all numbers in an array.
console.log("----------3. Sum of all numbers in an array.----------");

let sum = function(arr_num){
    let sum = 0;
    for(let i = 0; i<arr_num.length; i++){
        sum = sum + arr_num[i];
    }
    return sum;
}
let arr_num = [1,2,3,4,5];
console.log(sum(arr_num));

// 4. Return all the prime numbers in an array
console.log("----------4. Return all the prime numbers in an array----------");

let prime = function(num){
    let res = [];
    for(let i = 0; i<num.length; i++){
        let isprime = true;
        for(let j = 2; j<num[i]; j++){
            if(num[i] % j === 0){
                isprime = false;
            }
        }
        if(isprime == true){
            res.push(num[i]);
        }
    }
    return res;
}
let num = [21,22,23,24,25,26,2,3,7];
console.log(prime(num));

// 5. Return all the palindromes in an array
console.log("----------5. Return all the palindromes in an array----------");

let reverse = function(str){
    let arr_str = str.split("");
    let arr_rev = arr_str.reverse();
    let reversed = arr_rev.join("")

    return reversed;
}


let palindrome = function(arr){
    let result = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == reverse(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
let palin_arr = ['abc','aba','abcdcba']
console.log(palindrome(palin_arr));

// 6. Return median of two sorted arrays of the same size.
console.log("----------6. Return median of two sorted arrays of the same size.----------");

let sorted_array = function(arr1, arr2){
    let med1 = Math.floor(arr1.length / 2);
    let med2 = Math.floor(arr2.length / 2);

    let ans = (arr1[med1] + arr2[med2]) / 2

    return ans;
}
let arr1 = [1,7,9,10,11];
let arr2 = [2,3,4,12,15];
console.log("Median of two sorted array: " + sorted_array(arr1,arr2));

// 7. Remove duplicates from an array
console.log("----------7. Remove duplicates from an array----------");

let duplicates = function(array){
    let r = []
    for(let i = 0; i<array.length; i++){
        if(!(r.includes(array[i]))){
            r.push(array[i]);
        }
    }
    return r;
}
let array = [1,1,1,2,2,3,4,4,5];
console.log(duplicates(array));

// 8. Rotate an array by k times.
console.log("----------8. Rotate an array by k times.----------");

let rotate = function(arr3,k){
    for(let i = 0; i<k; i++){
        let num = arr3.shift()
        arr3.push(num);
    }
    return arr3;
}

let arr3 = [1,2,3,4];
let k = 4;
console.log(rotate(arr3,k));

console.log("-----------------------------------------------------------------------------------");
console.log("By using IIFE");

// 1. Print odd numbers in an array.
console.log("----------1. Print odd numbers in an array.----------");

(function(arr){
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            result.push(arr[i]);
        }
    }
    console.log(result);
})
([1,2,3,4,5,6,7,8,9,10])

// 2. Convert all the strings to title caps in a string array
console.log("----------2. Convert all the strings to title caps in a string array.----------");

(function(str_arr){
    for(let i = 0; i<str_arr.length; i++){
        str_arr[i] = str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1);
    }
    console.log(str_arr);
})(["the","gray","man"])

// 3. Sum of all numbers in an array.
console.log("----------3. Sum of all numbers in an array.----------");

(function(arr_num){
    let sum = 0;
    for(let i = 0; i<arr_num.length; i++){
        sum = sum + arr_num[i];
    }
    console.log(sum);
})([1,2,3,4,5])

// 4. Return all the prime numbers in an array
console.log("----------4. Return all the prime numbers in an array----------");

(function(num){
    let res = [];
    for(let i = 0; i<num.length; i++){
        let isprime = true;
        for(let j = 2; j<num[i]; j++){
            if(num[i] % j === 0){
                isprime = false;
            }
        }
        if(isprime == true){
            res.push(num[i]);
        }
    }
    console.log(res);
})
([21,22,23,24,25,26,2,3,7])

// 5. Return all the palindromes in an array
console.log("----------5. Return all the palindromes in an array----------");

let reverse1 = function(str){
    let arr_str = str.split("");
    let arr_rev = arr_str.reverse();
    let reversed = arr_rev.join("")

    return reversed;
}


let palindrome1 = function(arr){
    let result = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == reverse(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
let palin_arr1 = ['abc','aba','abcdcba']
console.log(palindrome(palin_arr1));

// 6. Return median of two sorted arrays of the same size.
console.log("----------6. Return median of two sorted arrays of the same size.----------");

(function(arr1, arr2){
    let med1 = Math.floor(arr1.length / 2);
    let med2 = Math.floor(arr2.length / 2);

    let ans = (arr1[med1] + arr2[med2]) / 2

    console.log("Median of two sorted array: " + ans);
})
([1,7,9,10,11], [2,3,4,12,15])

// 7. Remove duplicates from an array
console.log("----------7. Remove duplicates from an array----------");

(function(array){
    let r = []
    for(let i = 0; i<array.length; i++){
        if(!(r.includes(array[i]))){
            r.push(array[i]);
        }
    }
    console.log(r);
})
([1,1,1,2,2,3,4,4,5])

// 8. Rotate an array by k times.
console.log("----------8. Rotate an array by k times.----------");

(function(arr3,k){
    for(let i = 0; i<k; i++){
        let num = arr3.shift()
        arr3.push(num);
    }
    console.log(arr3);
})
([1,2,3,4], 4)

console.log("----------------------------------------------------------------------------------------")
console.log("By Using Arrow Function");

// 1. Print odd numbers in an array.
console.log("----------1. Print odd numbers in an array.----------");

let odd_a = (arr) => {
    let result = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 != 0){
            result.push(arr[i]);
        }
    }
    return result;
}
let arr_a = [1,2,3,4,5,6,7,8,9,10];
console.log(odd_a(arr_a));

// 2. Convert all the strings to title caps in a string array
console.log("----------2. Convert all the strings to title caps in a string array.----------");

let str_caps_a = (str_arr) => {
    for(let i = 0; i<str_arr.length; i++){
        str_arr[i] = str_arr[i].charAt(0).toUpperCase() + str_arr[i].slice(1);
    }
    return str_arr;
}
let str_arr_a = ["the","gray","man"];
console.log(str_caps_a(str_arr_a));

// 3. Sum of all numbers in an array.
console.log("----------3. Sum of all numbers in an array.----------");

let sum_a = (arr_num) => {
    let sum = 0;
    for(let i = 0; i<arr_num.length; i++){
        sum = sum + arr_num[i];
    }
    return sum;
}
let arr_num_a = [1,2,3,4,5];
console.log(sum_a(arr_num_a));

// 4. Return all the prime numbers in an array
console.log("----------4. Return all the prime numbers in an array----------");

let prime_a = (num) => {
    let res = [];
    for(let i = 0; i<num.length; i++){
        let isprime = true;
        for(let j = 2; j<num[i]; j++){
            if(num[i] % j === 0){
                isprime = false;
            }
        }
        if(isprime == true){
            res.push(num[i]);
        }
    }
    return res;
}
let num_a = [21,22,23,24,25,26,2,3,7];
console.log(prime_a(num_a));

// 5. Return all the palindromes in an array
console.log("----------5. Return all the palindromes in an array----------");

let reverse_a = (str) => {
    let arr_str = str.split("");
    let arr_rev = arr_str.reverse();
    let reversed = arr_rev.join("")

    return reversed;
}


let palindrome_a = (arr) => {
    let result = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == reverse_a(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;
}
let palin_arr_a = ['abc','aba','abcdcba']
console.log(palindrome_a(palin_arr_a));