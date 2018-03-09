import {BinarySearchTree} from './binary-search-tree';
import {expect, should} from 'chai';

import 'mocha';

interface TestNode {
    idx: number,
    score: number
}
let bst = new BinarySearchTree({idx: 2, score: 40});

describe('BinarySearchTree: setInsertCondition', () => {
    it('should set insertion rule', () => {
        const condition = (value: any) => {
            return value.score > 50
        };
        bst.setInsertCondition(condition);
        expect(bst.condition).to.be.equal(condition);
    });
});

describe('BinarySearchTree: setCompareField', () => {
    it('should set compareField', () => {
        bst.setCompareField('idx');
        expect(bst.compareField).to.be.equal('idx');
        expect(bst.condition).to.be.equal(null);
    });
});

describe('BinarySearchTree: insert by condition or compareField', () => {
    it('should insert by initially set condition or compareField', () => {
        bst = new BinarySearchTree({idx: 2, score: 40});
        const newNode: TestNode = {idx: 3, score: 45};
        const condition = (value: TestNode) => {
            return value.score > 50;
        };
        bst.setCompareField('idx');
        expect(bst.compareField).to.be.equal('idx');
        bst.insert(newNode);
        expect(bst.right.value).to.be.equal(newNode);

        bst.setInsertCondition(condition);
        expect(bst.compareField).to.be.equal(null);
        expect(bst.condition).to.be.equal(condition);

        bst.insert(newNode);
        expect(bst.left.value).to.be.equal(newNode);
    });
});

