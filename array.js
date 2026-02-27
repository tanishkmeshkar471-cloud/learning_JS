// array
//spread operator -> ...  this is used in array and object
//rest operators -> ...  this is used in fuction

let ar1=['tanishk','ali','pradosh','jay']
let ar2=['bhupendr','krishna', 'avibh']

let ar3=[...ar1,...ar2]
console.log(ar3);

// destructuring of array => acces elements without indexing with the help of variables

let [name,age, ,height]=['Tanishk', 19,'narmadapuram', 5.8]
console.log(age);

//for of loop => only used in array

let emp=['deepali','bpl',123456789,'cybrom']

for(let v of emp){
    console.log(v)
}
for(let v in emp){
    console.log(v)
}

let stu=['Tanishk',19,'70kg','narmadapuram']
console.log(stu);

let ar9=stu.slice(1,4) // indexing start with 1 and ends in 3 ,4 not included
console.log(ar9);

let 