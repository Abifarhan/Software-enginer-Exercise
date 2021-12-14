
// class LinkedList{
//     constructor(value){
//         this.head = {
//             value: value,
//             next: {
//                 value: value + 1,
//                 next: {
//                     value: value + 1,
//                     next : null
//                 }
//             }
//         }
//     }
// }

// let instanceOne = new LinkedList(10)

// console.log(instanceOne);

class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value){
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    
    printList(){
        const array = []
        let currentNode = this.head
        while (currentNode !==null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }

        return array
    }

    insert(index, value){
        if (index === 0 ){
            this.prepend(value)
        }
    }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
var a = myLinkedList.printList()
var b = myLinkedList.insert(2,2)
// console.log(myLinkedList);
console.log(a);
console.log(b);