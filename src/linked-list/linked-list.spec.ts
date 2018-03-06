import {LinkedList} from './linked-list';
import {expect} from 'chai';
import 'mocha';

const ll = new LinkedList();

describe('Add to head method', () => {
    it('should add value to the head', () => {
        ll.addToHead(1);
        expect(ll.head.value).to.equal(1);
    })
});

describe('Remove head method', () => {
    it('should remove head and return head value', () => {
        const result = ll.removeHead();
        expect(result).to.equal(1);
    })
});

describe('Add to tail method', () => {
    it('should add value to the tail', () => {
        ll.addToTail(1);
        expect(ll.tail.value).to.equal(1);
    })
});