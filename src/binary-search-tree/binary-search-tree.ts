export type Condition = (value: any) => boolean;

export class BinarySearchTree {
    private left: BinarySearchTree = null;
    private right: BinarySearchTree = null;
    private condition: Condition = null;

    constructor(public value: any) {}

    setInsertCondition(cb: Condition): void {
        this.condition = cb;
    }

    insert(value: any): void {
        if (this.condition === null) {
            this.condition = () => {
                return value > this.value;
            };
        }
        if (!this.condition(value)) {
            if (!this.left) {
                this.left = new BinarySearchTree(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new BinarySearchTree(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}



