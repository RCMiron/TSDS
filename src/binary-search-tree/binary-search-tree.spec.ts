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
        const newNode: TestNode = {idx: 3, score: 60};
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

        bst = new BinarySearchTree({idx: 2, score: 40});
        bst.setInsertCondition(function(val) {
            return val.score > 50;
        });
        expect(bst.compareField).to.be.equal(null);

        bst.insert(newNode);
        expect(bst.right.value).to.be.equal(newNode);
        bst.insert(newNode2);
        expect(bst.left.value).to.be.equal(newNode2);
        bst.insert(newNode3);
        expect(bst.left.left.value).to.be.equal(newNode3);
    });
});

describe('BinarySearchTree: traverseDepth inOrder', () => {
    it('should traverse tree least to greatest', () => {
        const tree: BinarySearchTree<number> = new BinarySearchTree<number>(10);
        const numbers = [100, 5, 66, 72, 55, 3, -50];
        let result = [];
        numbers.forEach((number) => {
            tree.insert(number);
        });
        numbers.push(10);
        const sortNumbers = numbers.sort((a, b) => a - b);

        tree.traverseDepth((node) => {
            result.push(node.value);
        }, 'inOrder');
        sortNumbers.forEach((n, i) => {
            expect(n).to.be.equal(result[i]);
        });

    })
});

describe('BinarySearchTree: traverseDepth preOrder', () => {
    it('should traverse tree greatest to least', () => {
        const tree: BinarySearchTree<number> = new BinarySearchTree<number>(10);
        const numbers = [100, 5, 66, 72, 55, 3, -50];
        let result = [];
        numbers.forEach((number) => {
            tree.insert(number);
        });
        numbers.push(tree.value);
        const expectedResult =[ -50, 3, 5, 55, 72, 66, 100, 10 ];
        tree.traverseDepth((node) => {
            result.push(node.value);
        }, 'postOrder');
        expectedResult.forEach((n, i) => {
            expect(n).to.be.equal(result[i]);
        });

    })
});

describe('BinarySearchTree: traverseBreadth', () => {
   it('should traverse level by level', () => {
       const tree: BinarySearchTree<number> = new BinarySearchTree<number>(10);
       const numbers = [100, 5, 66, 72, 55, 3, -50];
       let result = [];
       numbers.forEach((number) => {
           tree.insert(number);
       });
       const expectedResult = [10, 5, 100, 3, 66, -50, 55, 72];
       tree.traverseBreadth((node) => {
          result.push(node.value);
       });
       expectedResult.forEach((r, i) => {
           expect(r).to.be.equal(result[i]);
       });
   });
});

