// do{
//     //code
// }
// while(condition)

// let a=1;
// do{
//     console.log(a)
//     a++
// }
// while(a<6);

// let a=5;
// do{
//     console.log(a);
//     a--;
// }
// while(a>0);

// let num=prompt("enter a number");
// let table=1;
// do{
//     console.log(num*table);
//     table++;
// }
// while(table<=10);

// while(condition){
//     //code
// }

// let x=1;
// while(x<=15){
//     console.log("code");
//     x++;
// }

// for loop

// for(initialization ;condition ;incriment /decriment){
//     //code
// }

// for(let ex=2;ex<=10;ex++){
//     console.log(ex);
// }

// let table=prompt("enter a number");
// for(let num=10;num>=1;num--){
//     console.log(table*num);
// }

let num = Number(prompt("enter a number"))
if (num >= 1 && num <= 5) {
    for (let table = 1; table <= 10; table++) {
        console.log(table * num)
    }
}
    else if(num >= 6 && num <= 10){
        for (let a = 10; a >= 1; a--){
            if (a % 2 == 0){
                console.log(a*a);
            }
        }
    }
