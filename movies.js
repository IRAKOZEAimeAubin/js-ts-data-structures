const LinkedList = require( './LinkedList' );

const movies = new LinkedList();

// movies.addToHead( 'Terminator' );
// movies.addToHead( 'The Hobbit' );
// movies.addToTail( 'Avengers' );
// movies.addToHead( 'Titanic' )
// movies.printList();
// movies.printSize();
movies.removeHead();
movies.printList();
movies.printSize();