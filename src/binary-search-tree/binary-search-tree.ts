export type TraverseOrder = 'inOrder' | 'preOrder' | 'postOrder';

export class BinarySearchTree<T> {
    private _left: BinarySearchTree<T> = null;
    private _right: BinarySearchTree<T> = null;

    constructor(public value: T,
                public condition?: (value: T) => void,
                public compareField?: any) {
    }

    get left(): BinarySearchTree<T> {
        return this._left;
    }

    get right(): BinarySearchTree<T> {
        return this._right;
    }

    setInsertCondition(cb: (value: T) => void): void {
        this.compareField = null;
        this.condition = cb;
    }

    setCompareField(compareField: any) {
        if (compareField !== null && this.value.hasOwnProperty(compareField)) {
            this.compareField = compareField;
            this.condition = null;
        }
    }

    insert(value: T): void {
        if (value === Object(value) && !this.condition && !this.compareField) {
            try {
                throw new Error('To insert non-primitive values, first setInsertCondition or setCompareField');
            } catch (e) {
                console.error(e);
            }
            return;
        } else if (value !== Object(value) && !this.condition && !this.compareField) {
            this.condition = function(val) {
                return val > this.value;
            };
        } else if (!this.condition && this.compareField) {
            this.condition = function(val) {
                return val[this.compareField] > this.value[this.compareField];
            };
        }

        if (!this.condition(value)) {
            if (!this._left) {
                this._left = new BinarySearchTree(value, this.condition, this.compareField);
            } else {
                this._left.insert(value);
            }
        } else {
            if (!this._right) {
                this._right = new BinarySearchTree(value, this.condition, this.compareField);
            } else {
                this._right.insert(value);
            }
        }
    }

    traverseDepth(cb: (node: BinarySearchTree<T>) => any, order?: TraverseOrder) {
        if (order && order === 'preOrder') {
            cb(this);
        }
        if (this.left) {
            this._left.traverseDepth(cb, order);
        }
        if (!order || order === 'inOrder') {
            cb(this);
        }
        if (this.right) {
            this._right.traverseDepth(cb, order);
        }
        if (order && order === 'postOrder') {
            cb(this);
        }
    }

    traverseBreadth(cb: (node: BinarySearchTree<T>) => any) {
        let queue: BinarySearchTree<T>[] = [this];
        while(queue.length) {
            let node = queue.shift();
            cb(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
}








