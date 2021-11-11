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
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      console.log(this.data[address]);
      var c = this.data[address].push([key, value]);
      console.log(c);
      console.log(this.data);
      console.log("this is the value", address);
    }
  }

  get() {
    var returnValue = this.set;
  }
}

const myHashTable = new HashTable(50);
// var testing1 = myHashTable._hash("grapes");
// console.log(testing1);
// var a = myHashTable.set('grapes')
// var total = myHashTable.get
// console.log(total)

myHashTable.set("grapes", 10000);
myHashTable.set("apple", 10000);
