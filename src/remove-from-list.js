const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(l, k) {
//   let current = l.head;
//   let prev = null;
//   // let index = 0;
//   while(current.next){
//     prev = current;
//     if(current.value === k){
//       prev.next = current.next;
//       l.length--;
//     }
//     current = current.next;
//   }

//   return l;

// }

function removeKFromList(l, k) {
  let prev = l;
  let current = prev.next;

  if (prev.value === k) {
    l = current;
  }

  while (current.next) {
    if (current.value === k) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  if (current.value === k) {
    prev.next = null;
  }
  return l;
}

module.exports = {
  removeKFromList
};
