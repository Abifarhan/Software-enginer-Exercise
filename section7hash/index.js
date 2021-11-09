class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
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
  const myHashTable = new HashTable(50);
//   myHashTable.set('grapes', 10000)

//   myHashTable.get('grapes')
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')