const Node = require( './Node' );

class LinkedList {
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
        }
        this.length++;
    }

    // Adds a node at the end('Tail') of the list
    addToTail ( data ) {
        let tail = this.head;
        if ( !tail ) {
            this.head = new Node( data );
        } else {
            while ( tail.getNextNode() != null ) {
                tail = tail.getNextNode();
            }
            tail.setNextNode( new Node( data ) );
        }
        this.length++;
    }

    // Adds a node at a given index in the list
    addToIndex ( data, index ) {
        if ( index < 0 || index > this.length ) {
            return;
        } else {
            if ( index === 1 ) {
                this.addToHead( data );
            } else if ( index === this.length ) {
                this.addToTail( data );
            } else {
                let node = new Node( data );
                let current = this.head;
                let previous;
                let i = 0;

                while ( i < index ) {
                    i++;
                    previous = current;
                    current = current.getNextNode();
                }

                node.setNextNode( current );
                previous.setNextNode( node );
                this.length++;
            }
        }
    }

    // Removes a node to the beginning('Head') of the list
    removeHead () {
        const removedHead = this.head;
        if ( !removedHead ) {
            return;
        }
        this.head = removedHead.getNextNode();
        this.length--;
        return removedHead.data;
    }

    // Removes a node at the end('Tail') of the list
    removeTail () {
        let removedTail = this.head;
        let previous;
        if ( !removedTail ) {
            return;
        } else {
            while ( removedTail.getNextNode() !== null ) {
                previous = removedTail;
                removedTail = removedTail.getNextNode();
            }
            previous.setNextNode( null );
            this.length--;
            return removedTail.data;
        }
    }

    // Removes a node at a given index in the list
    removeFromIndex ( index ) {
        if ( index < 0 || index >= this.length ) {
            return;
        } else if ( index === 0 ) {
            this.removeHead();
        } else if ( index === this.length ) {
            this.removeTail();
        } else {
            let current = this.head;
            let previous;
            let i = 0;

            while ( i < index ) {
                i++;
                previous = current;
                current = current.getNextNode();
            }

            previous.setNextNode( current.getNextNode() );
            this.length--;
        }
    }

    // Removes 
    removeNode ( data ) {
        let current = this.head;
        let previous = null;

        while ( current !== null ) {
            if ( current.data === data ) {
                if ( previous === null ) {
                    this.head = current.getNextNode();
                } else {
                    previous.setNextNode( current.getNextNode() );
                }
                this.length--;
                return current.data;
            }
            previous = current;
            current = current.getNextNode();
        }
        return -1;
    }

    // Returns the index of the first occurence of a given item if it exists in the list
    indexOf ( data ) {
        let count = 0;
        let current = this.head;

        while ( current !== null ) {
            if ( current.data === data ) {
                return count;
            }
            count++;
            current = current.getNextNode();
        }
        return -1;
    }

    // Prints the list
    printList () {
        if ( !this.head ) {
            console.log( 'The provided list is empty.' );
            return;
        }

        let currentNode = this.head;
        let output = 'Head--> ';

        while ( currentNode !== this.head ) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }

        output += '<--Tail';
        console.log( output );
    }

    // Prints the size of the list
    printSize () {
        console.log( 'Number of items:', this.length );
    }
}

module.exports = LinkedList;