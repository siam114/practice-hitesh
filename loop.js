let array = [1,2,3,4,5,6]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 5){
        // console.log('5 is the best number')
    }
    // console.log(element)
    
}


// for(let i=0; i<=10; i++){
//     console.log(`Outer loop value: ${i}`)
//     for(j=0; j<=10; j++){
//         console.log(`Inner loop value: ${j} and inner loop: ${i}`)
//     }
// }




for(let i=1; i<=10; i++){
    // console.log(`Outer loop value: ${i}`)
    for(j=1; j<=10; j++){
        // console.log(`Inner loop value: ${j} and inner loop: ${i}`)
        // console.log(i + '*' + j + '=' + i*j)
        
    }
}

for (let index = 0; index < 10; index++) {
    if(index == 5){
        // console.log('detected 5')
        continue
    }
    // console.log(`value of i is ${index}`)
}


// let index=0
// while(index <=10){
//     console.log(`Value of index is ${index}`)
//     index = index +2
// }


let score = 1;
do{
    console.log(`Score is ${score}`)
    score++
}while(score <= 10)