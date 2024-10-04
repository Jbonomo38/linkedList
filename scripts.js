class Node{
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    };

    append(value) {
        const newNode = new Node(value);
        if(this.head === null) { 
            this.head = newNode 
        } else { 
            this.tail().nextNode = newNode 
        };
    };

    prepend(value) {
        const newNode = new Node(value, this.head.nextNode);
        this.head = newNode;
    };

    size() {
        if(!this.head) {
            return 0;
        }
        
        const toReturn = 1;
        const currentNode = this.head;
        while(currentNode.nextNode) {
            toReturn ++;
            currentNode = currentNode.nextNode;
        }

        return toReturn;
    };

    head() {
        return this.head;
    };

    tail() {
        if(!this.head) {
            return null;
        }
        let currentNode = this.head;
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    };

    at(index) {
        let counter = 0;
        if(!this.head) { return null };
        let currentNode = this.head;
        while(currentNode.nextNode) {
            if(counter === index) { return currentNode };
            currentNode = currentNode.nextNode;
            counter++;
        }
        return null;
    };

    pop() {
        let currentNode = this.head;
        while(currentNode.nextNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
    };

    contains(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) { return true };
            currentNode = currentNode.nextNode;
        }
        return false;
    };

    find(value) {
        if(!this.contains()) { return null };
        let index = 0;
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value === value) { return index };
            index++;
            currentNode = currentNode.nextNode;
        }
        return index;
    };

    toString() {
        let toReturn = ``;
        let currentNode = this.head;
        while(currentNode) {
            toReturn += `( ${currentNode.value} ) --> `;
            currentNode = currentNode.nextNode;
        }
        toReturn += `null`;
        return toReturn;
    };

    insertAt(value, index) {
        let currentIndexNode = this.at(index);
        let prevNode = this.at(index - 1);
        let newNode = new Node(value, currentIndexNode);
        prevNode.nextNode = newNode;
    };

    removeAt(index) {
        let nextIndexNode = this.at(index).nextNode;
        let prevNode = this.at(index - 1);
        prevNode.nextNode = nextIndexNode;
    };
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// console.log(list.contains("snake"));

// console.log(list.at(3));

// console.log(list.at(2));
list.removeAt(2);
console.log(list.toString());


