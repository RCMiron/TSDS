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
        const newNode2: TestNode = {idx: 3, score: 20};
        const newNode3: TestNode = {idx: 3, score: 30};
        const newNode4: TestNode = {idx: 3, score: 15};
        const condition = (value: TestNode) => {
            return value.score > 50;
        };
        bst.setCompareField('score');
        expect(bst.compareField).to.be.equal('score');

        bst.insert(newNode);
        expect(bst.right.value).to.be.equal(newNode);
        bst.insert(newNode2);
        expect(bst.left.value).to.be.equal(newNode2);
        bst.insert(newNode3);
        expect(bst.left.right.value).to.be.equal(newNode3);
    });
});
/*
describe('BinarySearchTree: traverseDepth', () => {
    it('should traverse tree least to greatest', () => {
        const tree: BinarySearchTree<number> = new BinarySearchTree<number>(10);
        const numbers = [100, 5, 66, 72, 55, 3, -50];
        let result = [];
        numbers.forEach((number) => {
            tree.insert(number);
        });
        tree.traverseDepth((value) => {
            console.log(value);
        }, 'inOrder');

    })
});*/
