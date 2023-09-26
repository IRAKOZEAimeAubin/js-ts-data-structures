const CircularLinkedList = require( './CircularLinkedList' );

const numbers = new CircularLinkedList();

numbers.addToHead( 2 );
numbers.addToHead( 1 );
numbers.addToHead( 3 );

numbers.printList()