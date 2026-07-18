let obj={
    fname:"Karan",
    lname:"Malik",
    age  : 21,
    ht:175,
}

const {age}=obj;
console.log(age);

// APIs are in JSON format which are objects in itself and remember that in JSON even key are under "" along with the values 
const user1 = {
    name: "Karan",
    age: 20
};

const user2 = {
    name: "Rahul",
    age: 25
};

function printUser({ name, age }) {
    console.log(name, age);
}

printUser(user1);
printUser(user2);