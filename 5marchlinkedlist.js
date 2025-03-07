class ListNode {                                         ////सवाल 1
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // **Step 1: Linked List बनाना (नाम A, B, C... रखे हैं)**
  let a = new ListNode(1);
  let b = new ListNode(3);
  let c = new ListNode(2);
  let d = new ListNode(3);
  let e = new ListNode(1);
  
  // **Nodes को जोड़ रहे हैं भाई!**  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  // **Step 2: Linked List का बीच वाला हिस्सा ढूंढ रहे हैं (Slow-Fast Pointer से)**
  let slow = a, fast = a;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;     // Slow एक कदम चलता है
    fast = fast.next.next; // Fast दो कदम चलता है
  }
  
  // **Step 3: लिस्ट का आधा हिस्सा उल्टा कर रहे हैं (Reverse करना है भाई!)**
  let prev = null, current = slow;
  while (current !== null) {
    let nextNode = current.next; // अगले वाले को संभाल के रखना
    current.next = prev; // उल्टा कर दिया
    prev = current; // अगला बढ़ाओ
    current = nextNode;
  }
  
  // **Step 4: अब पहले और उल्टे वाले हिस्से को compare8 करेंगे**
  let first = a, second = prev;
  let isPalindrome = true;
  
  while (second !== null) { // जब तक आधी लिस्ट खत्म न हो जाए
    if (first.value !== second.value) { // अगर mismatch हुआ तो भाई ये palindrome नहीं है!
      isPalindrome = false;
      break;
    }
    first = first.next; // आगे बढ़ाओ
    second = second.next; // आगे बढ़ाओ
  }
  
  // **जो भी निकले, छाप दो! 😆**
  console.log(isPalindrome); // Output: true (अगर palindrome है)
  
  // sir comments bhi mere ha 😂😂😂
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ////////////////////////////
  
  
  
  
  
  
  
  ///सवाल 2
  
  
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let h = new ListNode(8);
  let i = new ListNode(10);
  h.next = i;
  
  let a = new ListNode(3);
  let b = new ListNode(6);
  let c = new ListNode(9);
  a.next = b;
  b.next = c;
  c.next = h;
  
  let d = new ListNode(4);
  let e = new ListNode(7);
  d.next = e;
  e.next = h;
  
  let pA = a, pB = d;
  
  while (pA !== pB) {
    pA = (pA === null) ? d : pA.next;
    pB = (pB === null) ? a : pB.next;
  }
  
  console.log(pA ? pA.value : -1); // Output: 8 (common node)