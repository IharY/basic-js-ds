const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeNode = null;
  }

  root() {
    return this.treeNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.treeNode === null) this.treeNode = newNode;
    else this.insertNode(this.treeNode, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if(node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }

    else {
      if(node.right === null)
        node.right = newNode;
      else this.insertNode(node.right,newNode);
    }
}

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return findWithIn(this.treeNode, data);

    function findWithIn(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      return node.data <= data
        ? findWithIn(node.right, data)
        : findWithIn(node.left, data);
    }
  }

  remove(data) {
    this.treeNode = removeNode(this.treeNode, data);

    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    let node = this.treeNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    let node = this.treeNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};