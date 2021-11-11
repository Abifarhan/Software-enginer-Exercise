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

  set(key, value) {
    let setValue  = 1

    var a = this._hash(key)
    value = a 
    // console.log(value)
    return value
  }

  get(){
    var returnValue = this.set
  }
}

const myHashTable = new HashTable(50);
// var testing1 = myHashTable._hash("grapes");
// console.log(testing1);
var a = myHashTable.set('grapes')
var total = myHashTable.get
console.log(total)
