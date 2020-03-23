function add(x,y){
    return x+y
}
function slowAdd(x,y){
    let after4Sec=new Date().getTime()+4000
    while(after4Sec>new Date()){}
    return add(x,y)
}
function sayHiSlowly() {
    let greeting='hiii'
    setTimeout(function(){
        console.log(greeting,', The wait is over')
    },2000)
    console.log('i finished working')
}

//Output:

console.log(slowAdd(3,33))
sayHiSlowly()
console.log(slowAdd(3,53))
console.log(add(2,22))