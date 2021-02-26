const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(element => {
  console.log(element);
})

for (element in detailedBasket) {
  console.log(element);
}

for (element of basket) {
  console.log(element);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let max = 0;
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
   }
 }
 return max;
}

function biggestNumberInArray2(arr) {
  let max = 0;
  arr.forEach(element > {
    if(max < element) {
       max = element;
   }
  return max;
}

function biggestNumberInArray3(arr) {
   let max = 0;
   for(element of arr) {
      if(max < element) {
       max = element;
     }
     return max;
  }
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
   for(element in basket) {
    if(element === lookingFor) {
     return "the item is in the basket";
    }
    return "the item is not in the basket";
  }
}