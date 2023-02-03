const obj = {a:{b:"c"}};

const {a:{b:other}} = obj;

console.log(other);

// const arr = [1,2,3,4,5];
// const obj = {a:{b:arr}};
// const {a:{b:[a]}} = obj;

// console.log(a);  

const firstPromise = () => new Promise() 