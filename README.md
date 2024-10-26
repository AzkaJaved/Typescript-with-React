# Typescript-with-React
typescript with react
# Section - 01 (Typescript Foundations)

# invoking typescript compiler
npx tsc filename.ts

# Basic Primitive Types 
types are either automatically inferred or explicitly set
1 - string
2 - number
3 - boolean
# Union type
use | pipe symbol like an OR operator to explicitly assign two data types to a single variable
string | number
# Working with Type Objects
you can define typescript object by declaring type object or explicitly defing all the properties of an object and their type too.
# Array type in typescript
Array type works only if you provide more related information about types of array itens
Array<string>   or   string[]
Array<number>   or   number[]
Array<string|number>
# array of objects
{name:string,age:number}[]

# type for const
for constant you typically do not assign types explicitly because a constant initially has a type from which the type can be inferred.And this inferred type is a bit stricter.because a constant can not be reassigned anyways

# types for function parameters 
function add(a:number,b:number){}
# function return type
a function that does not return anything type will be void or you can also use undefined 
function add(a:number,b:number): void {}

# function type 
when you pass function as a function parameter you explicitly define the type of parameter of function and also return type
function Calculate(a:number,b:number,calcFunc:(a:number,b:number)=>number){
calcFunc(a,b)
}

# type alias (custom types):
type keyword can be used to declare custom type and then assign that type to any function object or variable .
type UserType = {name:string,age:number};
let user : UserType = {name:'azka',age:21}

# Interface 
interface type is essentially for creating objects type.

interface Credentials {
    email:string
    password:string,
}
now this is type object name Credentials.

# When to use type keyword and interface keyword.
Interface is specifcally used for object types.
we can use interface for function types also,but you can not use interface for union types
# Advantages of interface keyword.
if you are defining class of AuthCredentials you can use implements keyword to implement and interface.This then forces you to add the properties and methods that are defined in the object of that interface in your class as well.
You have to add email and password key value pair to your class if you are implementing the credentails interface.And you could also add additional propertie
s as well

# type merging.
type Admin = {
    permissions:string[]
}
type AppUser = {
    userName:string[]
}
now we want a third type which merges these two types , which needs both of theses type not the union for two.
wo can merge these types using & operator 

type AppAdmin = Admin & AppUser
# interface allows declaration merging .
interface AppAdmin extends Admin , AppUser{}

# assigning specific string/number type to  a variable
if you want a string to have specified values like for name you want to have a value from one of three given option type you can do it this way
let name : 'xyz' | 'abc';

# Generic Types Feature:
Role[]
Array is built-in generic type which requires some related type like number string
Array<string>
# You ca build your own generic types too:
generic types ar the types that work together with other types.works together simply means that a type (like Array) needs extra information (type of values that should be stored  in the array)

you want to build a type DataStorage  which stores and object which contains storage property  which should be an array but an array full of data which i do not know in advance (could be bunch of strings or objects).Therefore we need a type placeholder here , this DataStorage type will be connected to an other type here,we will need extra type information here to be truly specific.Therefore we will create generic type here.where i expect extra type information at the point of time where this DataStorage is going to get used .
#                  type DataStorage = {
#                         storage
#                     }
therefore you use angle brackets after the name of this custom type DataStorage , then add  any placeholder name of our choice between these angle brackets typically T but you can use any name or any character of your choice, you can also use multiple placeholders here if you are building a more complex generic type that needs multiple related types .
#                  type DataStorage <T> = {
#                         storage:T[]
#                         add:(date:T) => void
#                     }
now we have custom generic type , we can use this type to create multiple strorages for different data because this is a flexible generic type.

# const textStorage : DataStorage<string> = {
#                storage:[],
#                add(data){}    
#              }
string value is used as a value for this T placeholder in generic type definition
