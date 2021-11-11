class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    // _ meaning the object will be private
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
      console.log(hash);
    }
    return hash;
  }

  set(key, value) {}
}

const myHashTable = new HashTable(50);
var testing1 = myHashTable._hash("grapes");
console.log(testing1);
