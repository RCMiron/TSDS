### BinarySearchTree

Instantiate tree
```typescript
const exampleNode = {idx: 1, score: 45}
const bst: BinarySearchTree = new BinarySearchTree(exampleNode);
```
This will take the type of the first node and enforce it upon all subsequent nodes. This type will be referred to as T in this readme

Method | Parameters | Returns | What it does
--- | --- | --- | ---
setCompareField | (value: any) | void | sets the compare field for insertion; nullifies insertCondition
setInsertCondition | (value: T) => boolean | void | sets insertion rule; nullifies compareField
insert | value: T | void | inserts new node according to insertCondition, compareField or simple comparison in the case of primitives
