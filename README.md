# TSDS - TypeScript Data Structures

## A collection of TypeScript classes to create and use common data structures

### Installing

 ```
 npm install typescript-data-structures
 ```
### General Usage
Import the desired data structure in your file

```
import { LinkedList } from 'typescript-data-structures'
```

Instantiate class 

```
private linkedList: LinkedList = new LinkedList();
```

Use class methods

```
this.linkedList.addToHead('new head');
```
## API
### LinkedList

Method | Parameters | Returns | What it does
--- | --- | --- | ---
addToHead | value: any | void | adds new node and sets the head pointer to it, the old head becomes the new head's next
addToTail | value: any | void | adds new node and sets the tail pointer to it, the old tail becomes the new tail's prev
removeHead | value: any | head.value | removes head and sets new head to old head's next
removeTail | value: any | tail.value | removes tail and sets new tail to old tail's prev
has | value: any | LinkedListNode | returns first node that contains the value or null
search | value: any | LinkedListNode[] | returns array of nodes that contain the value or null

### BinarySearchTree

Method | Parameters | Returns | What it does
--- | --- | --- | ---
setInsertCondition | (value) => boolean | void | sets insertion rule
insert | value: any | void | inserts new node according to insert condition; if condition is not set, insertion will be done by simple comparison



## Contributing

Contributing rules will follow
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RCMiron/TSDS/tags). 

## Authors

[Radu Miron](https://github.com/RCMiron)

## Aknowledgements

[Eric Traub - Data Structures in Javascript](https://www.udemy.com/learning-data-structures-in-javascript-from-scratch)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

