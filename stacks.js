/*Stack implementation in JS is possible using arrays */

class Stack {
    constructor(){
        this.items = [];
    }

    /*adding elements*/

    add(item){
        return this.items.push(item);
    }

    delete(){
        if(this.items.length>0){
            return this.items.pop();
        }
        else{
            console.log("Stack is empty");
        }
    }
    peek(){
        return this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length==0;
    }

    size(){
        return this.items.length;
    }

}

let stack = new Stack();

console.log(stack.isEmpty()) //true
stack.add(1);
stack.add(3);
stack.add(5);
stack.add(8);
stack.add(12);
stack.add(6);
stack.add(24);
stack.add(16);
console.log(stack.items);

stack.delete();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty()); /*returns false */
console.log(stack.size());/* 7 */