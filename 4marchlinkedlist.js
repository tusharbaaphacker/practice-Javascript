// class Node {
//     constructor (val = 0, next = null){
//         this.val=val
//         this.next=null
//     }
// }

// let a = new Node (1);
// let b = new Node (2);
// let c = new Node (3);
// let d = new Node (4);
// a.next = b;
// b.next = c;
// c.next = d;
// let l1 = a;


// let e = new Node(5);
// let f = new Node(6);
// e.next = f;
// let l2 = e;

// let temp = new Node()
// let t = temp
 
//  while(l1!= null && l2 != null){
//      if(l1.val < l2.val)
//      {t.next = l1
//      l1=l1.next}
//  else{
//      t.next=l2
//      l2=l2.next}
//      t=t.next
     
//       t.next = l1 || l2
//  }
//      let head = temp.next
//      let res = ""
//      while(head){
//          res += head.val + "->"
//          head= head.next
//      }
//      console.log(res + "null")




     class Node {
        constructor (val = 0, next = null){
            this.val=val
            this.next= next
        }
    }
    
    let a = new Node (1);
    let b = new Node (2);
    let c = new Node (3);
    let d = new Node (4);
    a.next = b;
    b.next = c;
    c.next = d;
    let head =a
    let n = 2;
    
    let dummy = new Node(0, head)
    let f = dummy
    let s = dummy
    
    for (let i = 0; i <= n; i++) {
        f = f.next
    }
    
    while (f !== null) {
        f = f.next;
        s = s.next;
    }
    
    s.next = s.next.next;
    
    let temp = dummy.next;
    let res = "";
    while (temp) {
        res += temp.val + " -> ";
        temp = temp.next;
    }
    console.log(res + "null");
    
    