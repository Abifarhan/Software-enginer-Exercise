class Stack{

    constructor(){
        this.array = []
    }

    peek(){
        return this.array[this.array.length-1]
    }

    push(value){
        this.array.push(value)
        return this
    }

    pop(){
        this.array.pop()
        return this
    }


}

var myStack = new Stack()
myStack.push("abi")
myStack.push("brian")
myStack.push("villa")
myStack.push("siti")
myStack.pop()
console.log(myStack.peek())