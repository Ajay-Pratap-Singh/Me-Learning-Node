const s = new Date().getSeconds();

setTimeout(function() {
  // prints out "4", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 4) {
     console.log("Good, looped for 4 seconds");
    break;
  }
}

while(true) {
  if(new Date().getSeconds() - s >= 8) {
     console.log("Good, looped for 4 seconds again");
    break;
  }
}

// this example shows the queue thing clearly the setTimeout must have print after 500ms but it took 4sec to do so
// as before that while loop was being executed. which takes 4sec so output came after 4sec.