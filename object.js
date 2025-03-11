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

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        name: 'siam'
    },
    {
        id: 2,
        name: 'islam'
    },
    {
        id: 3,
        name: 'sm siam'
    }
]

// console.log(users[1].id)
// console.log(obj3)
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))