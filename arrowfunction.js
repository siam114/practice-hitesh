const user = {
    username : "siam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}
// user.welcomeMessage()

// console.log(this)

const siam = () => {
    console.log(this)
}
// siam()

const addtwo = (num1, num2) =>{
    return num1 + num2
}
// console.log(addtwo(3,5))