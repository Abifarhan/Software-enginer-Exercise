let obj1 = {a: true, b: false}
let obj2 = obj1

obj1.a = "booya"

console.log(obj1);

delete obj1

console.log(obj2);