export class LinkedListNode {
    constructor (
        public value: any,
        public next: LinkedListNode,
        public prev: LinkedListNode
    ) {}
}

export type Condition = (value: any) => boolean;
