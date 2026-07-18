// function myfunc(){
//     console.log("Hello")
// }

// myfunc()
// above one is common way to write a fucntion and call but theres anotehr way to prevent pollution caused by global scope by using concept like IIFE(Immediately Invoked Functions Expression)

//rather do this
(function myfunc(){
    console.log("Hello")
})();
//notice that the first ( ) has the function definition and second () is used when function is called 
// after write IIFE fucntion try end it with ; to end the scope or it will keep on running and wont read next code
(()=>{
    console.log("world")
})();

((name)=>{
    console.log(`My name is ${name}`)
})(`karan`);

