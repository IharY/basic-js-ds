const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}


const stack = new Stack();

console.log("    push 1-st element");
stack.push("1-st element");
console.log("    push 2-nd element");
stack.push("2-nd element");
console.log("    push 3-rd element");
stack.push("3-rd element");
console.log("    push 4-th element");
stack.push("4-th element");

console.log("  Execute fake call stack:");

while (stack.stack.length - 1) {
  let operation = stack.pop();
  console.log("    execute -", operation);
}

console.log(stack.peek());

module.exports = {
  Stack
};
