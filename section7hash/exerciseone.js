// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1

// Given an array = [2,3,4,5]
// It should return undefined


const array1 = [2,5,1,2,3,5,1,2,4]
const array2 = [2,1,1,2,3,5,1,2,4]

function findRecurring(arr){
    // const value1 = []
    // const value2 = []
    // for(let i = 0; i < arr.length; i++){
    //     value1.push(arr[i])
    //     value2.push(arr[i])
    // }


    let counts = {}

    for(let i = 0; i < arr.length; i++){
        if(counts[arr[i]]){
            var a = counts[arr[i]] +=1
            // console.log()
        } else {
            counts[arr[i]] =1
        }
    }
    // for(let prop in counts){
    //     if(counts[prop] >= 2){
    //         console.log(prop + " counted: " + counts[prop] + " times.")
    //     }
    // }
    console.log(counts)
}

findRecurring(array1)
// class Recurring