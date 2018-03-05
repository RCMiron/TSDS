import {Condition, LinkedListNode} from './helper-classes';

export class LinkedList {
    private head: LinkedListNode = null;
    private tail: LinkedListNode = null;

    addToHead(value: any): void {
        const newNode = new LinkedListNode(value, this.head, null);
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    addToTail(value: any): void {
        const newNode = new LinkedListNode(value, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    removeHead(): any {
        if (!this.head) {
            return null;
        }
        const val = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        return val;
    }

    removeTail(): any {
        if (!this.tail) {
            return null;
        }
        const val = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        return val;
    }

    has(value: any): LinkedListNode {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value = value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    search(value: any): LinkedListNode[] {
        let currentNode: LinkedListNode = this.head;
        let result: LinkedListNode[] = [];
        while (currentNode) {
            if (currentNode.value === value) {
                result.push(currentNode);
            }
            currentNode = currentNode.next;
        }
        return result.length ? result : null;
    }
}

export class BinarySearchTree {
    private left: BinarySearchTree = null;
    private right: BinarySearchTree = null;
    private condition: Condition = null;

    constructor(public value: any) {}

    setInsertCondition(cb: Condition): void {
        this.condition = cb;
    }

    insert(value: any): void {
        if (this.condition === null) {
            this.condition = () => {
                return value > this.value;
            };
        }
        if (!this.condition(value)) {
            if (!this.left) {
                this.left = new BinarySearchTree(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new BinarySearchTree(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}



