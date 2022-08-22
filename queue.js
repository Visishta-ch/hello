class Queue{
    constructor(){
        this.items = [];
    }

    push(item){
        return this.items.push(item);
    }
    pop(){
        if(this.items.length>0){
            return this.items.shift();
        }
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length==0;
    }
}

var queue = new Queue();

console.log(queue.isEmpty());

queue.push('vish');
queue.push('Shiny');
queue.push('Sonali');
queue.push('Siri');
queue.push('Kavya');
queue.push('Satya');

console.log(queue.items); //[ 'vish', 'Shiny', 'Sonali', 'Siri', 'Kavya', 'Satya' ]
queue.pop();
console.log(queue.items);//[ 'Shiny', 'Sonali', 'Siri', 'Kavya', 'Satya' ]
console.log(queue.peek()); //Satya
queue.pop();
console.log(queue.items); /* [ 'Sonali', 'Siri', 'Kavya', 'Satya' ] */


class Queue1{
    constructor(){
        this.items = [];
        this.minIndex = 0;
        this.maxIndex = 0;
    }
    Enqueue(item){
        this.items.push(item);
        this.maxIndex++;
    }
    Dequeue(){
        if(this.minIndex < this.maxIndex){
            const value = this.items[this.minIndex];
            this.items[this.minIndex] = undefined;
            this.minIndex = this.minIndex + 1;
            return value;
        }
       
    }
    
    displayQueue(){
        console.log("Queue: " + this.items);
        console.log("minIndex: " + this.minIndex);
        console.log("maxIndex: " + this.maxIndex);
        console.log("size of queue: "+this.items.length);
    }
    Peek(){
        if(this.maxIndex != 0)
          return this.items[this.items.length-1];
    }
}

const q = new Queue1();
q.Enqueue(1);
q.Enqueue(2);
q.Enqueue(4);
q.Enqueue(5);

q.displayQueue();
console.log(q.Peek());

console.log(q.Dequeue());
q.displayQueue();
q.Enqueue(42);
q.Enqueue(25);
q.displayQueue();