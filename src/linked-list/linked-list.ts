export class LinkedListNode {
    constructor (
        public value: any,
        public next: LinkedListNode,
        public prev: LinkedListNode
    ) {}
}

export class LinkedList {
    private _head: LinkedListNode = null;
    private _tail: LinkedListNode = null;

    get head(): LinkedListNode {
        return this._head;
    }

    get tail(): LinkedListNode {
        return this._tail;
    }

    addToHead(value: any): void {
        const newNode = new LinkedListNode(value, this._head, null);
        if (this._head) {
            this._head.prev = newNode;
        } else {
            this._tail = newNode;
        }
        this._head = newNode;
    }

    addToTail(value: any): void {
        const newNode = new LinkedListNode(value, null, this._tail);
        if (this._tail) {
            this._tail.next = newNode;
        } else {
            this._head = newNode;
        }
        this._tail = newNode;
    }

    removeHead(): any {
        if (!this._head) {
            return null;
        }
        const val = this._head.value;
        this._head = this._head.next;
        if (this._head) {
            this._head.prev = null;
        } else {
            this._tail = null;
        }
        return val;
    }

    removeTail(): any {
        if (!this._tail) {
            return null;
        }
        const val = this._tail.value;
        this._tail = this._tail.prev;
        if (this._tail) {
            this._tail.next = null;
        } else {
            this._head = null;
        }
        return val;
    }

    has(value: any): LinkedListNode {
        let currentNode = this._head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    search(value: any): LinkedListNode[] {
        let currentNode: LinkedListNode = this._head;
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