// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined

const array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
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

function firstRecurringCharacted2(input){
    let map = {}
    for (let i = 0; i < input.length; i++){
        console.log(undefined)
        if(map[input[i]])
    }
    // adding then
    // testing adding
    // adding part 2
}

firstRecurringCharacted(2);