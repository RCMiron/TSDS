import {TraverseOrder} from "../../dist/binary-search-tree/binary-search-tree";

export type TraverseOrder = 'inOrder' | 'preOrder' | 'postOrder';

export class BinarySearchRoot<T> {

}

export class BinarySearchTree<T> {
    private _left: BinarySearchTree<T> = null;
    private _right: BinarySearchTree<T> = null;
    private _condition: (value: T) => void = null;
    private _compareField: any = null;

    constructor(public value: T) {}

    get left(): BinarySearchTree<T> {
        return this._left;
    }

    get right(): BinarySearchTree<T> {
        return this._right;
    }

    get condition(): (value: T) => void {
        return this._condition;
    }

    get compareField(): any {
        return this._compareField;
    }

    setInsertCondition(cb: (value: T) => void): void {
        this._compareField = null;
        this._condition = cb;
    }

    setCompareField(compareField: any) {
        if (compareField !== null && this.value.hasOwnProperty(compareField)) {
            this._compareField = compareField;
            this._condition = null;
        }
    }
}



