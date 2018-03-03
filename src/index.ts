import {LinkedListNode} from './helper-classes';

export class LinkedList {
    private head: LinkedListNode = null;
    private tail: LinkedListNode = null;

    addToHead(value: any) {
        const newNode = new LinkedListNode(value, this.head, null);
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
    }

    addToTail(value: any) {
        const newNode = new LinkedListNode(value, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    removeHead() {
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

    removeTail() {
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
}


