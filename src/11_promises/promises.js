// __________ Event loop __________

console.log('start')

const axios = {
    get(string) {
        setTimeout(() => {
            console.log('answer from axios')
        }, 3000)
        return console.log('axios')

    }
}
const findUserInDB = (id) => {
    setTimeout(() => {
        console.log('answer from DB')
    }, 5000)
    return console.log('findUserInDB')
}

axios.get('google.com') // promise
findUserInDB(1) // promise

console.log('finish')

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

const resolvedPromise = Promise.resolve(100)
console.log(resolvedPromise) // Promise {status: "fulfilled", result: 100}

const rejectedPromise = Promise.reject('data failed')
console.log(rejectedPromise) // Promise {status: "rejected", result: "data failed"} // Unhandled Promise Rejection: data failed

rejectedPromise
    .then((data) => console.log(data))
    .catch((error) => console.warn(error)) // data failed

const usersAPI = {
    get() {
        return Promise.resolve([{name: 'Ann'}, {name: 'Kate'}])
    },
    login(login, password) {
        if (login === '' || password === '') {
            return Promise.reject('Incorrect password or login')
        } else return Promise.resolve([{name: "Ann"}, {name: "Kate"}])
    }
}

const getUsers = usersAPI.get()
getUsers
    .then((data) => console.log(data)) // [{name: "Ann"}, {name: "Kate"}]
    .catch((error) => console.warn(error))

usersAPI.login('', '')
    .then((data) => console.log(data))
    .catch((error) => console.warn(error)) // Incorrect password or login

const findUsersInDB = (id) => {
    return new Promise((resolve, reject) => {
        if (id > 2) reject('page not found')
        else resolve([
            {
                id: 1, name: 'Max', friends: [
                    {id: 1, name: 'Igor'},
                    {id: 2, name: 'Ann'},
                    {id: 3, name: 'Kate'}
                ]
            },
            {
                id: 2, name: 'Nick', friends: [
                    {id: 1, name: 'John'},
                    {id: 2, name: 'Alex'},
                    {id: 3, name: 'Victor'}
                ]
            }
        ])
    })
}

const userName = 'Nick'
const searchFriend = 'Kate'
findUsersInDB(1)
    .then(data => {
        console.log(data)
        return data
    })
    .then(arrayWithData => {
        console.log(arrayWithData)
        return arrayWithData.filter(f => f.name === userName)
    })
    .then(user => {
        console.log(user)
        return user[0].friends
    })
    .then(userFriends => {
        console.log(userFriends)
        return userFriends.map(m => m.name)
    })
    .then(namesOfFriends => {
        console.log(namesOfFriends)
        if (namesOfFriends.find(f => f === searchFriend) === undefined) {
            return `${userName} doesn\'t have such a friend`
        } else return `${userName} has such a friend`
    })
    .then(result => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })

// __________ async / await __________