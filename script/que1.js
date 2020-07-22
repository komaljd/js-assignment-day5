console.log("Question: 1")

console.log("high order fucnction ")

// 1) positive number
let numneg = prompt("enter negative number");
let result = Math.abs(numneg);
console.log(`First Test Value:${result} ` )


// 2 array of number
let num=prompt("enter the number of ur choice");
let int = parseInt(num);
console.log(int);
let arr=[];
// let n;
for(let i=1;i<int;i++)
{   
    arr.push(i);
    console.log(arr[i]);
}


// 3)filter oddnumber

// console.log("filter oddnumber");
// let arr =["1","2","4","5","6","7","8"]
// take input from user
let asknum = prompt("Enter randonm 10 numbers:",0)

 let covnertarray = asknum.split('');
console.log(covnertarray);

let oddnumresult = covnertarray.filter(el=>el%3==0)

console.log(oddnumresult)



// 4)array of cubes
console.log("array of cubes");
let cubes = oddnumresult.map(el=>el**2)
console.log(cubes);


