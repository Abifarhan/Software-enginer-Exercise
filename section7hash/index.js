class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    // _ meaning the object will be private
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      // console.log(hash);
    }
    return hash;
  }

  // set(key, value) {
  //   let address = this._hash(key);
  //   if (!this.data[address]) {
  //     this.data[address] = [];
  //     // console.log(this.data[address]);
  //     // this is the hashmap work
  //     // var c = this.data[address].push([key, value]);
  //     // console.log(c);
  //     // console.log(this.data);
  //     // console.log("this is the value", address);
  //   }
  //   this.data[address].push([key, value]);
  //   // console.log(this.data)
  //   return this.data
  // }

  set(key,value){
    let address = this._hash(key)
    if(!this.data[address]){
      this.data[address] = []

      this.data[address].push([key,value])
    }
    this.data[address].push([key,value])

    return this.data
  }
  // get() {
  //   var returnValue = this.set;
  // }

  get(key){
    let address = this._hash(key)
    const currentBucket = this.data[address]
    console.log(currentBucket)
    if(currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          console.log(currentBucket[i][1])
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys(){
    const keyArray = []
    for(let i=0; i < this.data.length; i++){
      if(this.data[i]){
        keyArray.push(this.data[i][0][0][1])
      }
    }
    console.log("ini bagian dari key",keyArray)
    return keyArray
  }
}

const myHashTable = new HashTable(50);
// var testing1 = myHashTable._hash("grapes");
// console.log(testing1);
// var a = myHashTable.set('grapes')
// var total = myHashTable.get
// console.log(total)

// myHashTable.set("apple", 54);
// myHashTable.set("grapes", 10000);
// myHashTable.set("orange", 53);
// myHashTable.set("apples", 54);

myHashTable.set("apple",54)
myHashTable.set("grape", 90)
myHashTable.set("coconut", 80)
myHashTable.get("grape")

var a = myHashTable.keys()
console.log(a)

// myHashTable.get('grapes')
// var a = myHashTable.keys()
// var getValue = myHashTable.get("apple")
// console.log(getValue)

