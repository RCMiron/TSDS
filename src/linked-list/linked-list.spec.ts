import {LinkedList} from './linked-list';
import {expect} from 'chai';
import 'mocha';

let ll = new LinkedList();

describe('LinkedList: addToHead', () => {
    it('should add value to the head', () => {
        ll.addToHead(1);
        expect(ll.head.value).to.equal(1);
    })
});

describe('LinkedList: removeHead', () => {
    it('should remove head and return head value', () => {
        ll.addToHead(1);
        const result = ll.removeHead();
        expect(result).to.equal(1);
    })
});

describe('LinkedList: addToTail', () => {
    it('should add value to the tail', () => {
        ll.addToTail(1);
        expect(ll.tail.value).to.equal(1);
    })
});

describe('LinkedList: removeTail', () => {
    it('should remove head and return head value', () => {
        ll.addToTail(1);
        const result = ll.removeTail();
        expect(result).to.equal(1);
    })
});

describe('LinkedList: Has - existing value', () => {
    it('should check for input value and return first node that contains it or null', () => {
        ll.addToTail(100);
        const result = ll.has(100);
        expect(result.value).to.equal(100);
    })
});

describe('LinkedList: Has - non existing value', () => {
    it('should check for input value and return first node that contains it or null', () => {
        const result = ll.has(1000);
        expect(result).to.equal(null);
    })
});

describe('LinkedList: search', () => {
    it('should check for input value and return an array of nodes', () => {
        ll  = new LinkedList();
        ll.addToHead(100);
        ll.addToHead(100);
        const result = ll.search(100);
        expect(result.length).to.equal(2);
    })
});
