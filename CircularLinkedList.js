const Node = require( './Node' );

class CircularLinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    // Adds a node at the beginning('Head') of the list
    addToHead ( data ) {
        const newHead = new Node( data );
        const currentHead = this.head;
        this.head = newHead;
        if ( currentHead ) {
            this.head.setNextNode( currentHead );
            let currentNode = currentHead;
            while ( currentNode.getNextNode() !== currentHead ) {
                currentNode = currentNode.getNextNode();
            }
            currentNode.setNextNode( this.head );
        } else {
            this.head.setNextNode( this.head );
        }
        this.length++;
    }

    // Prints the list
    printList () {
        if ( !this.head ) {
            console.log( 'The provided list is empty.' );
            return;
        }

        let currentNode = this.head;
        let output = 'Head--> ';

        do {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        } while ( currentNode != this.head );

        output += '<--Tail';
        console.log( output );
    }

    // Prints the size of the list
    printSize () {
        console.log( 'Number of items:', this.length );
    }
}

module.exports = CircularLinkedList;