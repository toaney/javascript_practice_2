/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  // let newHead;
  
  const getNum = (head) => {
      let numArray = []
      while (head !== null) {
          numArray.push(head.val);
          head = head.next;
      }
      return(parseInt(numArray.reverse().join('')));
  }
  
  
  class LinkedList {
      constructor() {
          this.head = null;
      }
      
      insertAtHead(data) {
          const newNode = new LinkedListNode(data, this.head);
          this.head = newNode
      }
  }
  
  class LinkedListNode {
      constructor(val, next) {
          this.val = val;
          this.next = next;
      }
  }
  
  const linkify = (num) => {
      let numberArray = num.toString().split("");
      console.log("sum" + numberArray);

      let outputLinkedList = new LinkedList();
      
      for (let i = 0; i < numberArray.length; i++) {
          outputLinkedList.insertAtHead(numberArray[i]);
      }
      return outputLinkedList.head;
      
  }
  
  let sum = getNum(l1) + getNum(l2);
  return linkify(sum);
};