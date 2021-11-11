class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) { // _ meaning the object will be private
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }

    getFunction = get(_hash())
  }
  

  function get(p1){
      console.log("Anda masukkan ", p1)
  }
  const myHashTable = new HashTable(50)