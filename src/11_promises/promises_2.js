// offline lesson

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello')
//     }, 3000)
// })
//
// promise.then(data => console.log(data))

// let axios = {
//     get(str) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(`${str} - you domain`)
//             }, 1000)
//         })
//     }
// }

// const a = {
//     result: 0,
//     sum(num) {
//         this.result += num
//         return this
//     }
// }
// a.sum(1)
//     .sum(2)
//     .sum(3)
//     .sum(4)
//
// console.log(a.result) // 10

// axios.get('https://localhost')
//     .then(data => console.log(data)) // https://localhost - you domain
//     .then((data) => console.log(1, data)) // 1 undefined
//     .then(() => console.log(2)) // 2

// let axios = {
//     get(str) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({
//                     one: 1,
//                     boolean: false,
//                     message: str
//                 })
//             }, 1000)
//         })
//     }
// }
//
// axios.get('Hello world')
//     .then(data => {
//         console.log(data)
//         return data.message
//     })
//     .then(message => console.log(message))

const fetch = (url) => {
    return new Promise((resolve, reject) => {
        switch (url) {
            case 'google':
                return setTimeout(() => {
                    resolve({data: 'from google'})
                }, 1500)

            case 'it-incubator':
                return setTimeout(() => {
                    resolve({data: 'from it-incubator'})
                }, 500)

            case 'microsoft':
                return setTimeout(() => {
                    resolve({data: 'from microsoft'})
                }, 2500)
            default:
                return setTimeout(() => {
                    resolve({data: 'unknown resource'})
                }, 4000)
        }
    })
}

// fetch('google').then(data => console.log(data))
// fetch('it-incubator').then(data => console.log(data))
// fetch('microsoft').then(data => console.log(data))

// fetch('microsoft')
//     .then(data => {
//         console.log(data)
//         return fetch('google')
//     })
//     .then(data => {
//         console.log(data)
//         return fetch('it-incubator')
//     })
//     .then(data => {
//         console.log(data)
//     })

// const foo = async () => {
//     const data_1 = await fetch('microsoft')
//     console.log(data_1)
//     const data_2 = await fetch('it-incubator')
//     console.log(data_2)
//     const data_3 = await fetch('google')
//     console.log(data_3)
// }
// foo()

const fooAll = async () => {
    let data = await Promise.all([
        fetch('microsoft'),
        fetch('it-incubator'),
        fetch('google')
    ])
    console.log(data)
}
fooAll()