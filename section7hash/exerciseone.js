// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

// function firstRecurringCharacted(input) {
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]) {
//         console.log(input[i]);
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }


function firstRecurringCharacted(input) {
  for (let i = 0; i < input.length; i++) { // 0(n)
    for (let j = i + 1; j < input.length; j++) {//0(n)
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}


const array1 = [2, 5, 5, 2, 3, 5, 1, 2, 4];

function firstRecurringCharacted2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    // console.log(map[input[i]]);
    if (map[input[i]] !== undefined) {
      //   console.log("ini hasil nya",map);
      return input[i];
    } else {
      // 
      map[input[i]]  = i;

      console.log("ini hasil nya input", map[input[i]]);
      console.log("ini hasil nya input iterasi", input[i]);
      console.log("ini hasil nya second", i);
      console.log("ini hasil nya map", map);
    }
  }
  return undefined;
}

var a = firstRecurringCharacted(array1);
var b = firstRecurringCharacted2(array1);
// console.log("nilai function pertama",a);
console.log("nilai function kedua",b);
