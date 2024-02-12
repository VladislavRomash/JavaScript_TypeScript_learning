// __________ Event loop __________

// console.log('start')
//
// const axios = {
//     get(string) {
//         setTimeout(() => {
//             console.log('answer from axios')
//         }, 3000)
//         return console.log('axios')
//
//     }
// }
// const findUserInDB = (id) => {
//     setTimeout(() => {
//         console.log('answer from DB')
//     }, 5000)
//     return console.log('findUserInDB')
// }
//
// axios.get('google.com') // promise
// findUserInDB(1) // promise
//
// console.log('finish')

// 'start' --> 'axios' --> 'findUserInDB' --> 'finish' --> 'answer from axios' --> 'answer from DB'

// __________ Methods of promise __________

// promise --> pending --> fulfilled (resolved) or rejected

// promise .then( (data) => {} ) --> fulfilled
//         .catch( (error) => {} ) --> rejected
//         .finally( () => {} ) --> fulfilled/reject
//
// Promise .all([promise1, promise2]) --> [ {result1}, {result2} ]
//         .allSettled([promise1, promise2]) --> [ {status: fulfilled, value: {result1}},
//                                                 {status: rejected, reason: 'reason'}
//                                               ]

// __________ Creating promise / chain of promises __________

// const resolvedPromise = Promise.resolve(100)
// console.log(resolvedPromise) // Promise {status: "fulfilled", result: 100}
//
// const rejectedPromise = Promise.reject('data failed')
// console.log(rejectedPromise) // Promise {status: "rejected", result: "data failed"} // Unhandled Promise Rejection: data failed
//
// rejectedPromise
//     .then((data) => console.log(data))
//     .catch((error) => console.warn(error)) // data failed
//
// const usersAPI = {
//     get() {
//         return Promise.resolve([{name: 'Ann'}, {name: 'Kate'}])
//     },
//     login(login, password) {
//         if (login === '' || password === '') {
//             return Promise.reject('Incorrect password or login')
//         } else return Promise.resolve([{name: "Ann"}, {name: "Kate"}])
//     }
// }
//
// const getUsers = usersAPI.get()
// getUsers
//     .then((data) => console.log(data)) // [{name: "Ann"}, {name: "Kate"}]
//     .catch((error) => console.warn(error))
//
// usersAPI.login('', '')
//     .then((data) => console.log(data))
//     .catch((error) => console.warn(error)) // Incorrect password or login
//

// const findUsersInDB = (id) => {
//     console.log('findUsersInDB')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id > 3) reject('page not found')
//             else resolve([
//                 {
//                     id: 1, name: 'Max', friends: [
//                         {id: 1, name: 'Igor'},
//                         {id: 2, name: 'Ann'},
//                         {id: 3, name: 'Kate'}
//                     ]
//                 },
//                 {
//                     id: 2, name: 'Nick', friends: [
//                         {id: 1, name: 'John'},
//                         {id: 2, name: 'Alex'},
//                         {id: 3, name: 'Victor'}
//                     ]
//                 },
//                 {
//                     id: 3, name: 'Ann', friends: [
//                         {id: 1, name: 'Dima'},
//                         {id: 2, name: 'Oleg'},
//                         {id: 3, name: 'Julia'}
//                     ]
//                 },
//
//             ].filter(f => f.id === id))
//         }, answerTime(1000, 1500))
//     })
// }
//
// const answerTime = (min, max) => {
//     return Math.round(Math.random() * (max - min + 1) + min)
// }

// console.log('start')
// findUsersInDB(3)
//     .then(data => {
//         console.log(data)
//         return data[0]
//     })
//     .then(user => {
//         console.log(user)
//         return user.friends
//     })
//     .then(friends => {
//         console.log(friends)
//         return friends.map(m => m.name)
//     })
//     .then(friendsName => {
//         console.log(friendsName)
//     })
//     .catch((error) => {
//         console.warn(error)
//     })
// console.log('end')

// findUsersInDB(4)
//     .then(data => {
//         console.log(data)
//         return data[0]
//     })
//     .catch(userError => {
//         console.log(userError) // 'page not found'
//         return {id: null, name: "BOT", friends: [{id: null, name: "BOT_FRIEND"}]}
//     })
//     .then(user => {
//         console.log(user) // {id: null, name: "BOT", friends: [{id: null, name: "BOT_FRIEND"}]}
//         return user.friends
//     })
//     .then(friends => {
//         console.log(friends)
//         return friends.map(m => m.name)
//     })
//     .then(friendsName => {
//         console.log(friendsName)
//     })
//     .catch((error) => {
//         console.warn(error)
//     })

// __________ async / await __________

// console.log('start')
// async function friends(id) {
//     console.log('start_friends')
//     const user = await findUsersInDB(id)
//     console.log(user[0])
//     const friends = await findUsersInDB(id)
//     console.log(friends[0].friends)
//     const friendsName = await findUsersInDB(id)
//     console.log(friendsName[0].friends.map(m => m.name))
//     console.log('end_friends')
// }
// friends(3)
// console.log('end')

// async function friendsTryCatch(id) {
//     try {
//
//         let user;
//         try {
//             user = await findUsersInDB(id)
//         } catch (error) {
//             user = [{id: null, name: "BOT", friends: [{id: null, name: "BOT_FRIEND"}]}]
//         }
//         console.log(user[0])
//
//         let friend;
//         try {
//             friend = await findUsersInDB(id)
//         } catch (error) {
//             friend = {id: null, name: "BOT_FRIEND"}
//         }
//         console.log(friend)
//
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// friendsTryCatch(4)

// const wait = (num) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, num)
//     })
// }
//
// async function run() {
//     await wait(1000)
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
// }
// run()

// __________ Addition __________

// const api = {
//     async save() {
//     },
//     async get() {
//         return {id: 1, name: 'Alex'}
//     }
// }
//
// const func = async () => {
//     await api.save()
//     let data = await api.get()
//     console.log('get:', data)
// }
// func()