var BSTIterator = function(root) {
  this.stack = []
  this.pointer = 0
  this.traverse(root)
};

BSTIterator.prototype.traverse = function(node) {
  if (!node) return
  this.traverse(node.left)
  this.stack.push(node.val)
  this.traverse(node.right)
}

BSTIterator.prototype.next = function() {
  return this.stack[this.pointer++]
};

BSTIterator.prototype.hasNext = function() {
  return this.stack.length !== this.pointer
};


// Alternate Approach

var BSTIterator = function(root) {
  this.stack = [];
  this._leftmostInorder(root)
};

BSTIterator.prototype._leftmostInorder = function(node) {
    while (node !== null) {
        this.stack.push(node);
        node = node.left;
    }
}

BSTIterator.prototype.next = function() {
  let topmostNode = this.stack.pop();
  
  if (topmostNode.right !== null) {
      this._leftmostInorder(topmostNode.right);
  }

  return topmostNode.val;
};

BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};