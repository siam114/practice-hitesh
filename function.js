 function myname (){
    console.log('s')
    console.log('i')
    console.log('a')
    console.log('m')
 }
//  myname()
// function addTwoNum (num1,num2){
//     console.log(num1 + num2)
// }
// addTwoNum(3,4)
// addTwoNum(3,'4')
// addTwoNum(3,null)

function addTwoNumber (num1,num2) {
    let result = num1 + num2;
    return result
}

const result = addTwoNumber(3,5)
// console.log(result)

function loginMessage(username){
    if(username === undefined){
        // console.log('please enter a username')
        return
    }
    return `${username} just logged in`
}
// console.log(loginMessage('hitesh'))
// console.log(loginMessage())

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500))

const user = {
    name: 'siam',
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

console.log(handleObject(user))