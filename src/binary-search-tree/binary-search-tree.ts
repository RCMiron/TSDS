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

    insert(value: T): void {
        if (value === Object(value) && this._condition === null && this._compareField === null) {
            try {
                throw new Error('To insert non-primitive values, first set an insertCondition or a compareField');
            } catch(e) {
                console.error(e);
            }
            return;
        } else if (value !== Object(value) && this._condition === null && this._compareField === null) {
            this._condition = () => {
                return value > this.value;
            };
        } else if (this._compareField) {
            this._condition = () => {
                return value[this._compareField] > this.value[this._compareField];
            };
        }

        if (!this._condition(value)) {
            if (!this._left) {
                this._left = new BinarySearchTree(value);
            } else {
                this._left.insert(value);
            }
        } else {
            if (!this._right) {
                this._right = new BinarySearchTree(value);
            } else {
                this._right.insert(value);
            }
        }
    }
}



