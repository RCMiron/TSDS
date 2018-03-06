### LinkedList

Method | Parameters | Returns | What it does
--- | --- | --- | ---
addToHead | value: any | void | adds new node and sets the head pointer to it, the old head becomes the new head's next
addToTail | value: any | void | adds new node and sets the tail pointer to it, the old tail becomes the new tail's prev
removeHead | value: any | head.value | removes head and sets new head to old head's next
removeTail | value: any | tail.value | removes tail and sets new tail to old tail's prev
has | value: any | LinkedListNode | returns first node that contains the value or null
search | value: any | LinkedListNode[] | returns array of nodes that contain the value or null