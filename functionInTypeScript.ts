//basic function
function mySum(a, b) {
  return a + b;
}

console.log(mySum(1, 3));

//how to declare a function in typescript
function signup(
  fullName: string,
  email: string,
  password: string,
  phoneNumber: number
) {
  return (
    fullName +
    " , Email: " +
    email +
    " , Password: " +
    password +
    ", Phone Number: " +
    phoneNumber
  );
}
console.log(signup("bidur", "bidur@mail.com", "password", 123));

//how to pass default values
let checkUser = (
  email: string,
  password: string,
  statusOfPerson: boolean = true
) => {
    return email+" is loggined in with password: "+password+" and the status is : "+statusOfPerson;
};
console.log(checkUser("bidur" , "password"));
//overriding the default value
console.log(checkUser("bidur" , "password" , false));

//how to define return type in function 
let checkVal= (
    email: string,
    password: string,
    statusOfPerson: boolean = true
  ):string => {
      return email+" is loggined in with password: "+password+" and the status is : "+statusOfPerson;
  };
  console.log(checkVal("bidur" , "password"));

//return type as void 

let testVoid = (str: string = "helo"):void =>{
    return;
}

//when we want to throw and handle abnormal behavior of program then we use never
//never example 
let testNeverReturnType = (errorMessage: string):never=>{
    throw new Error(`the Error is : ${errorMessage} and you need to handle it`);
}
testNeverReturnType("very bad");