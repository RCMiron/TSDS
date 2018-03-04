import {LinkedListNode} from './helper-classes';

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

    search(value: any): LinkedListNode {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value = value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    indexOf(value: any): any {
        let index = 0;
        let currentNode: LinkedListNode = this.head;
        let result: any[] = [];
        while (currentNode) {
            if (currentNode.value === value) {
                result.push(index);
            }
            index++;
            currentNode = currentNode.next;
        }
        if (result.length && result.length === 1) {
            return result[0];
        } else if (result.length && result.length > 1) {
            return result;
        } else {
            return -1;
        }
    }
 }


