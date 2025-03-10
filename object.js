const mySym = Symbol('key1')
const user = {
    name: 'siam',
    'full name': 'sm siam',
    [mySym]: 'mykey1',
    age: 25,
    location: 'lalmonirhat',
    email: 'smsiam@gmail.com',
    isLoggedIn: false,
    lassLoginDays: ['Monday', 'Saturday']
}
// console.log(user.name)
// console.log(user['full name'])

user.email = 'siamislam@gmail.com'
// Object.freeze(user)
user.email = 'siam@gmail.com'
// console.log(user)