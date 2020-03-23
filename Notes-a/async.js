function add(x,y){
    return x+y                                       //    this function does instantly
}
function slowAdd(x,y){
    let after4Sec=new Date().getTime()+4000         //    this function is taking 4sec but JS won't process anything 
    while(after4Sec>new Date()){}                   //    other than this, it will wait 4sec and then give output
    return add(x,y)                                 //    and then proceed further. Synchronously.
}
function sayHiSlowly() {
    let greeting='hiii'
    setTimeout(function(){                          //    this takes 2sec to say hiii, JS will do other work here
        console.log(greeting,', The wait is over')  //    as it is creating an interrupt! which puts the callback
    },2000)                                         //    into the queue after 2sec
    console.log('i finished working')
}

//Output:

console.log(slowAdd(3,33))
sayHiSlowly()
console.log(slowAdd(3,53))
console.log(add(2,22))

// hence waits for 4sec nothing happens 36 prints, then we call async sayHiSlowly() it puts a function in queue after
// 2sec the next line 'i finsihed working prints before' then we have slowAdd(3,53) waiting for 4sec and then
// immediately after that is add(2,22) prints 24, then the queued function get called and 'hiii' is printed.