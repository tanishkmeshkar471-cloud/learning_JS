// let students=[
//     {
//         name:"Tanishk",
//         roll_no:"101",
//         city:"narmadapuram",
//         grade:"A"
//     },
//     {
//         name:"Krishna",
//         roll_no:"102",
//         city:"Bhopal",
//         grade:"B"
//     },
//      {
//         name:"gowind",
//         roll_no:"102",
//         city:"narmadapuram",
//         grade:"C"
//     },
// ]
// console.log(students);

//call back fuction => a fuction that passed as a peramere of another fuction 
// higher order fuction => 

    // syntax of map fuction :-
    // students.map(function)

    // map fuction acces the elements of an array and return with creating a new aarray

    // let vl=students.map((e)=>{return e.name})
    // console.log(vl);

    //   let vl=students.map((e)=>{return e.grade})
    // console.log(vl);

    // //filter => used to filter out data and works on condition

    // let r=students.filter((i)=>{ return i.city=="narmadapuram" });
    // console.log(r);

    //create an array of object (employee) and find the data of employee whos salary above 15000 and age above 30

    let employee=[
        {
            Name:"dev",
            age:30,
            city:"bina",
            salary:15000
        },
        {
            Name:"Tanishk",
            age:19,
            city:"narmadapuram",
            salary:60000
        },
        {
            Name:"d",
            age:35,
            city:"bina",
            salary:15000
        },
        {
            Name:"f",
            age:30,
            city:"bina",
            salary:15000
        },
        {
            Name:"g",
            age:25,
            city:"bhopal",
            salary:30000
        },

    let a=employee.filter((d)=>{ return d.salary>15000 && d.age>30});
    console.log(a);
    
    ]

    

