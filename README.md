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
###LinkedList
Method | Paramenters | Returns 
--- | --- | ---
addToHead | value: any | void
addToTail | value: any | void
removeHead | value: any | head.value
removeTail | value: any | tail.value
has | value: any | first node that contains the value
search | value: any | array of nodes that contain the value or -1


## Contributing

Contributing rules will follow
## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Radu Miron** - *Initial work* - [RCMiron](https://github.com/RCMiron)

## Aknowledgements

[Eric Traub - Data Structures in Javascript](https://www.udemy.com/learning-data-structures-in-javascript-from-scratch)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

