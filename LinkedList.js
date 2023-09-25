const Node = require( './Node' );

class LinkedList {
    constructor () {
        this.head = null;
        this.length = 0;
    }

    addToHead ( data ) {
        const newHead = new Node( data );
        const currentHead = this.head;
        this.head = newHead;
        if ( currentHead ) {
            this.head.setNextNode( currentHead );
        }
        this.length++;
    }

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

    addToIndex ( data, index ) {
        if ( index < 0 || index > this.length ) {
            return;
        } else {
            if ( index == 0 ) {
                this.addToHead( data );
            } else if ( index == this.length ) {
                this.addToTail( data );
            } else {
                let toAdd = this.head;
                let i = 0;
            }
        }
    }

    removeHead () {
        const removedHead = this.head;
        if ( !removedHead ) {
            return;
        }
        this.head = removedHead.getNextNode();
        this.length--;
        return removedHead.data;
    }

    removeTail () { }

    removeFromIndex () { }

    printList () {
        let currentNode = this.head;
        let output = 'Head--> ';
        while ( currentNode !== null ) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }

        output += '<--Tail';
        console.log( output );
    }

    printSize () {
        console.log( 'Number of items:', this.length );
    }
}

module.exports = LinkedList;