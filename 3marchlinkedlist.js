class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let a = new ListNode(1);
  let b = new ListNode(2);
  let c = new ListNode(3);
  let d = new ListNode(4);
  let e = new ListNode(5);
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  function reverseLinkedList(head) {
    let prev = null, current = head;
  
    while (current) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    return prev;
  }
  
  function printList(head) {
    let result = [];
    while (head) {
      result.push(head.value);
      head = head.next;
    }
    console.log(result.join(" -> "));
  }
  
  console.log("Original List:");
  printList(a);
  
  let reversedHead = reverseLinkedList(a);
  
  console.log("Reversed List:");
  printList(reversedHead);
  
  // Output:    
  // Original List: 1 -> 2 -> 3 -> 4 -> 5
  
  // Reversed List: 5 -> 4 -> 3 -> 2 -> 1






  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let f = new ListNode(1);
  let g = new ListNode(2);
  let h = new ListNode(3);
  let i = new ListNode(4);
  let j = new ListNode(5);
  
  f.next = g;
  g.next = h;
  h.next = i;
  i.next = j;
  
  function findMiddleNode(head) {
    let slow = head, fast = head;
  
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return slow;
  }
  
  let middleNode = findMiddleNode(f);
  console.log("Middle Node Value:", middleNode.value);
  
  // Output: Middle Node Value: 3  