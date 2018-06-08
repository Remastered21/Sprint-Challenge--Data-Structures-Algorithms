class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /* post order */
  // depthFirstForEach(cb) {
  //   /* Your code here */
  //   function recurse(currentNode) {
  //     if (currentNode.left && currentNode.right) {
  //       recurse(currentNode.left);
  //       recurse(currentNode.right);
  //     } else if (currentNode.left) {
  //       console.log("left");
  //       recurse(currentNode.left);
  //     } else if (currentNode.right) {
  //       console.log("right");
  //       recurse(currentNode.right);
  //     }
  //     cb(currentNode.value);
  //   }
  //   recurse(this);
  // }

  /* pre order */
  // depthFirstForEach(cb) {
  //   /* Your code here */
  //   function recurse(currentNode) {
  //     if (currentNode.left && currentNode.right) {
  //       cb(currentNode.value);
  //       console.log("left first");
  //       recurse(currentNode.left);
  //       console.log("right next");
  //       recurse(currentNode.right);
  //     } else if (currentNode.left) {
  //       console.log("left");
  //       cb(currentNode.value);
  //       recurse(currentNode.left);
  //     } else if (currentNode.right) {
  //       console.log("right");
  //       cb(currentNode.value);
  //       recurse(currentNode.right);
  //     } else {
  //       cb(currentNode.value);
  //     }
  //   }
  //   recurse(this);
  // }

  /* optimized recursive depthfirst search */
  depthFirstForEach(cb) {
    function recurse(currentNode) {
      cb(currentNode.value);
      if (currentNode.left) {
        console.log("left");
        recurse(currentNode.left);
      }
      if (currentNode.right) {
        console.log("right");
        recurse(currentNode.right);
      }
    }
    recurse(this);
  }

  breadthFirstForEach(cb) {
    /* Your code here */
    function recurse(currentNode) {
      if (currentNode.left && currentNode.right) {
        cb(currentNode.left.value);
        cb(currentNode.right.value);
        console.log("left first");
        recurse(currentNode.left);
        console.log("right next");
        recurse(currentNode.right);
      } else if (currentNode.left) {
        cb(currentNode.left.value);
        console.log("left");
        recurse(currentNode.left);
      } else if (currentNode.right) {
        cb(currentNode.right.value);
        console.log("right");
        recurse(currentNode.right);
      }
    }
    cb(this.value);
    recurse(this);
  }

  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;
