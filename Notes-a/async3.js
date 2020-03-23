(function() {

    console.log(0.1 + 0.2 == 0.30000000000004);

    console.log('this is the start');
    
    setTimeout(function cb() {
      console.log('Callback 1: this is a msg from call back');
    }); 
  
    console.log('this is just a message-1');
  
    setTimeout(function cb1() {
      console.log('Callback 2: this is a msg from call back');
    }, 4);

    console.log('this is just a message-2');

    setTimeout(function cb() {
        console.log('Callback 3: this is a msg from call back');
    },0)
  
    console.log('this is the end');
  
})();