/*
The data structure you're describing, where each object holds a reference to the next one forming a linked list, is indeed a linked list. Linked lists have several applications in computer science and software engineering due to their flexibility and efficiency in certain scenarios. Here are some common applications:

Dynamic Memory Allocation:
Linked lists are used in memory management systems to allocate memory dynamically. When a new block of memory is requested, a linked list of free memory blocks is traversed to find a suitable space.

Implementing Stacks and Queues:
Linked lists can be used to implement stack and queue data structures. In a stack, items are added and removed from the same end (LIFO - Last In, First Out), while in a queue, items are added at one end and removed from the other (FIFO - First In, First Out).

Sparse Arrays:
Linked lists are efficient for representing sparse arrays where most elements are empty. Instead of wasting memory to represent empty elements, linked lists only allocate memory for the elements that have values.

Undo Functionality:
Linked lists are used in applications that require undo functionality. Each operation performed is stored as a node in a linked list, allowing users to undo operations by traversing the list backward.

Symbol Tables:
Linked lists are used in symbol tables to represent a collection of key-value pairs, where each key-value pair is stored as a node in the list.

Polynomial Manipulation:
Linked lists can represent polynomials efficiently. Each node in the linked list represents a term in the polynomial, with pointers to the next term.

Hash Table Collision Handling:
In hash table implementations, linked lists are used to handle collisions. When two keys hash to the same index, a linked list of key-value pairs is maintained at that index.

Task Scheduling:
Linked lists are used in task scheduling algorithms, such as Round Robin scheduling, where each task is represented as a node in the list, and tasks are scheduled based on their priority or arrival time.

Graph Algorithms:
Linked lists are used to represent adjacency lists in graph algorithms. In an adjacency list representation, each vertex of the graph is stored as a node in the list, and the list contains references to its neighboring vertices.

File Systems:
Linked lists are used in file systems to maintain the directory structure. Each directory entry contains a reference to the next directory entry, forming a linked list of directory entries.
These are just a few examples of the many applications of linked lists in computer science and software engineering. They are particularly useful in situations where efficient insertion and deletion operations are required and the size of the data structure may change dynamically.

*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node (acts like unshift method in arrays)
  insertFirst(data) {
    //We added the this.head as the second parameter of the Node class so that the next property of subsequent node that would added would point the existing node e.g we have a node {data: 100, next: null} when we add another one, it should be {data:200, next: {data: 100, next: null}} and so on. The first added node becomes the tail eventually
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert first node (acts like push method in array)
  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  //Insert last node
  insertLast(data) {
    let node = new Node(data);

    let current;

    //If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head; //The actual linkedList object is on this property hence we set the binding current to it so that we can loop through the nested objects
      while (current.next) {
        //This while loop will continue to loop through the nested object until it gets to the last node whose next property value is null and it would exit the loop
        current = current.next;
      }
      current.next = node; //After exiting the loop, it would now set the last node
    }

    this.size++;
  }
  //Insert at index like an array(zero indexing)
  insertAt(data, index) {
    //If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //If first index
    if (index == 0) {
      this.head = new Node(data, this.head);
      //   this.insertFirst(data);
      return;
    }

    //The other conditions
    const node = new Node(data);
    let current, previous;

    //Set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //Node before index
      count++;
      current = current.next; //Node after index
    }
    node.next = current;
    previous.next = node;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  //Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head;
    let previous;
    let count = 0;

    //Remove at first index
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
  //Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Checks if a data is in the linked list
  contains(data) {
    let current = this.head;
    while (current != null) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  //Print list data
  printListData() {
    //save the head node is found on the head property of the linkedList with the current binding
    let current = this.head;
    while (current) {
      //While a this.head property exist, enter the loop block
      console.log(current.data); //print the data property of the object attached to the head property
      current = current.next; //update the current binding to the next property of the object attached to the head property and if there exist object on the next property, enter the while loop again until the next property value is null
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100); //This would become the head at first but as we add moore nodes, it would be the tail
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400); //This would be the last until we use the insertLast again and that method will set the next one to the last
ll.insertLast(500);

ll.insertAt(700, 2);

// ll.getAt(2);
ll.removeAt(2);
ll.printListData();

console.log("----------------");
const newLL = new LinkedList();
newLL.append(100);
newLL.append(200);
newLL.append(300);

newLL.printListData();
console.log(newLL.contains(300));
