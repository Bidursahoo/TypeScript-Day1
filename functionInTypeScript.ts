//basic function 
function mySum(a,b){
    return a+b;
}

console.log(mySum(1,3));

//how to declare a function in typescript
function signup(fullName:string , email:string , password:string , phoneNumber: number){
    return fullName+" , Email: "+email+" , Password: "+password+", Phone Number: "+phoneNumber;
}
console.log(signup("bidur" , "bidur@mail.com" , "password" , 123));