class Node {
    constructor ( data ) {
        this.data = data;
        this.next = null;
    }

    setNextNode ( node ) {
        if ( !( node instanceof Node ) && node !== null ) {
            throw new Error( 'Next node must a member of the node class or null.' );
        }
        this.next = node;
    }

    getNextNode () {
        return this.next;
    }
}

module.exports = Node;