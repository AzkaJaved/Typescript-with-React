let userName:string;
userName = 'azka';
console.log(userName)
let count = 2;
count = 4;
console.log(count)
//union type |
let userID:string|number='abc';
userID=123
//object types
// let user:object;
type UserType = {name:string,
    age:number,
    isAdmin:boolean
    id:string|number
}
let user:UserType;
user ={
    name:'Mxx',
    age:7,
    isAdmin:true,
    id:123
}
//array types
// let hobbies:Array<string|number>;
let hobbies : string[] ;
let users : {name:string}[];


//custom type
type AddFn = (a:number,b:number) => number
//function types
function add(a,b){
    let result = a+b;
    return result
}
function Calculate(a:number,b:number,calcFunc:AddFn ){
    calcFunc(a,b)
}
Calculate(2,3,add)
//practise
type userId = string|number;
interface Credentials {
    email:string,
    password:string
    // mode:boolean
}
// interface Credentials{
//     mode:boolean
// }
let cred :Credentials = {
    email:'azkaishere@gmail.com',
    password:'abc',
   
}
class AuthCredentials implements Credentials{
    email: string;
    password: string;
    username:string
}
function login(cred:Credentials){
    console.log(cred)
}

type Role = 'admin'|'appAdmin'
let role:Role='admin'

function  merge<T,U>(a:T,b:U){
    return(
        {
            ...a,
            ...b
        }
    )
}
const newUser = merge<{name:string},{age:number}>({name:'azka'},{age:21})
