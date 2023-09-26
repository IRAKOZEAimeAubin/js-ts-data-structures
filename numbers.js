const LinkedList = require( './LinkedList' );

const numbers = new LinkedList();

numbers.addToHead( 2 )
numbers.addToHead( 1 )
numbers.addToTail( 4 )
numbers.addToTail( 5 )
numbers.addToHead( 6 )
numbers.addToTail( 4 )
numbers.printList()
console.log( numbers.indexOf( 4 ) )
numbers.removeNode( 4 )
numbers.printList();
console.log( numbers.indexOf( 4 ) );
