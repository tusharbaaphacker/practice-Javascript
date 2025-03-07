document.getElementById("name").addEventListener("copy", function(event) {
    event.preventDefault(); 
    navigator.clipboard.writeText("abey sale") 
        .then(() => alert("Naam mat copy kar bhai!"));
});





































// function throttle(func, limit) {
//     let lastCall = 0; 

//     return function (...args) {
//         let now = Date.now();
//         if (now - lastCall >= limit) {
//             lastCall = now;
//             func(...args);
//         }
//     };

    
// }


// function onScroll() {
//     console.log("User is scrolling...", Date.now());
// }

// window.addEventListener("scroll", throttle(onScroll, 5000));

