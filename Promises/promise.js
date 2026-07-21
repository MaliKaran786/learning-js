const promiseOne=new Promise(function(resolve,reject){

  setTimeout(function(){
    console.log('Promise made(Async 1)');
    resolve();// linked with then()
  },1000);
})

promiseOne.then(()=>{
  console.log('promise kept');
})

new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log('Inside promise(Async 2)');
    resolve()
  },1000)
}).then(()=>{
  console.log('Inside then when promise kept');
})

new Promise((resolve,reject)=>{

  setTimeout(()=>{
    resolve({user:"Karan",age: 20})
  },1000)
}).then((user)=>{
  console.log(user);
})


const promiseFour=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let err=false;
    if(!err){
      resolve({username:"Karan", age:20})
    }else{
      reject("ERROR: There was an unexpected error!")
    }
  },1000)
})

promiseFour
.then((user)=>{
  console.log(user);
  return user.username;
})
.then((username1)=>{//this takes above then return value as parameter
  console.log(username1);
})
.catch((er)=>{
  console.log(er)
})
.finally(()=>{
  console.log("Either worked or not");
})

const promiseFive=new Promise((response,reject)=>{
  setTimeout(()=>{
    let error=true;
    if(!error){
      response({user:"Karan",age:20});
    }else{
      reject("Error:An error occured!");
    }
  },1000);
})

async function promiseNumFive(){
  try{
    const response=await promiseFive;
    console.log(response)
  }catch(e){
    console.log(e)
  }
}

promiseNumFive();

async function getAllusers(){
  try{
  const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json()
    console.log(data)
  }catch(e){
    console.log("Error:",e);
  }
}
getAllusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
  return res.json();
})
.then((val)=>{
  console.log(val);
})
.catch((err)=>{
  console.log(err);
})