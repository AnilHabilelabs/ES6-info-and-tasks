function Demo(name,age,cb1,cb2){
    let msg = "hello" +name;
    let demoage = age;
    cb1(msg);
    cb2(demoage);
}

function Demo01(value){
    console.log(value);
}

function Demo02(value) {
    console.log(value);
}
Demo("steve",25,Demo01,Demo02);


Callback 
console.log("hello");
setTimeout(function st1(){
    console.log("i am st1");
},2000)
setTimeout(function st2(){
    console.log("i am st2");
},1000);
function Bye(){
    console.log("Bye");
}
Bye();

Promise -> microtask queue
console.log("progam done");
setTimeout(()=>{
    console.log("i come");
},0)
Promise.resolve().then((value)=>{
    console.log("promise output");
})
console.log("program ends");


High Order Functions

let arr=[1,2,3,4];
function multiple(arr){
    return arr*2;
}
let result = arr.map(multiple);
console.log(result);
let result_filter = result.filter((element)=>{
    return element%2==0;
})
console.log(result_filter);
let result_reduce=result_filter.reduce((a)=>{
    console.log(a*2);
    return a*2;
})
console.log(result_reduce);

polyfill

let arr = [1,2,3,4,5];
function mapPolyFill(arr,cb){
    let newArr = [];
    for(let i =0;i<arr.length;i++){
        newArr.push(cb(arr[i]));
    }
    return newArr;
}
function square(x){
    return x*x;
}
console.log(mapPolyFill(arr,square));


filter ployfill
let arr = [1,2,3,4,5,6];
function filterPolyFill(arr,cb){
    let newArr = [];
    for(let i =0;i<arr.length;i++){
        if(cb(arr[i])){
            newArr.push(cb(arr[i]));
        }
    }
    return newArr
}
function odd(n){
    if(n%2==1) return n;
}
console.log(filterPolyFill(arr,odd));

result = arr.filter((a)=>{
    return a%2==0;
})
console.log(result);

// pollyfill of reduce
let arr=[1,2,3,4,5];

function polyfill_reduce(arr,cb,inital_value = arr[0]){
    let acc = inital_value;
    for(let i =1;i<arr.length;i++){
        acc = cb(arr[i],acc);
    }
    return acc;
}
function sum(x,acc){
    return (x+acc);
}
console.log(polyfill_reduce(arr,sum));
 
rest vs spread

let arr1 = [1,2,3,4,5];
arr2 = arr1;
console.log("before change ",arr1,arr2);
arr2.push(6);
console.log("after change ",arr1,arr2);

const [a,b,...c]=[1,2,3,4,5,6];
console.log(a,b,c);

const [d,...e]=[...arr1,arr1];
console.log(d,e);

const obj1={
    a:"1",
    b:"2",
}

let obj2={
    ...obj1,
}

console.log("obj2",obj2);

obj1.c="10";
console.log(obj1,obj2);




Map and Set
let mapvalue = new Map();
mapvalue.set('1','2');
mapvalue.set('1',[3,4]);
console.log(mapvalue);

let obj = {
    name:"anil",
    age:21,
}
console.log(obj);

mapvalue.forEach(element => {
    console.log(element);
});
let arr = [1,2,3,4]
let setvalue = new Set();
setvalue.add('1');
setvalue.add(1);
setvalue.add('1');
setvalue.add([1,2,3,4]);
setvalue.add([1,2,3,4]);
setvalue.add(arr);
setvalue.add(arr)
console.log(setvalue);

let str = "nitin";
name1 = str.split('');
let set = new Set();
name1.forEach(element => {
    set.add(element)
});
console.log(set);
console.log(...str);

console.log(new Set(...[str]))

arr = [1,2,3,4,5,6,7,7,8,1,2];
console.log(new Set(arr));

