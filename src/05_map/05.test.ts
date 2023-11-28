// import {getGreeting, getStreets, getTitleStreets, transformator} from './05';
// import {CityType} from '../02_objects/02.test';
//
// export type ManType = {
//     name: string
//     age: number
// }
//
// let people: ManType[]
// let city: CityType
//
// beforeEach(() => {
//     people = [
//         {name: 'Andrew Ivanov', age: 33},
//         {name: 'Alexander Petrov', age: 24},
//         {name: 'Dmitry Sidorov', age: 18},
//     ]
//     city = {
//         title: 'Minsk',
//         houses: [
//             {
//                 buildedAt: 2012, repaired: false, address: {
//                     number: 100,
//                     street: {
//                         title: 'White street'
//                     }
//                 }
//             },
//             {
//                 buildedAt: 2008, repaired: false, address: {
//                     number: 100,
//                     street: {
//                         title: 'Happy street'
//                     }
//                 }
//             },
//             {
//                 buildedAt: 2020, repaired: false, address: {
//                     number: 200,
//                     street: {
//                         title: 'Hogwarts street'
//                     }
//                 }
//             },
//         ],
//         governmentBuildings: [
//             {
//                 type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {
//                     number: 200,
//                     street: {
//                         title: 'Central Str'
//                     }
//                 }
//             },
//             {
//                 type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {
//                     number: 200,
//                     street: {
//                         title: 'Souths park str'
//                     }
//                 }
//             },
//         ],
//         citizensNumber: 100000
//     }
// })
//
//
// test('return new Array with new properties', () => {
//     const result = transformator(people)
//     expect(result.length).toBe(3)
//     expect(result[0].firstName).toBe('Andrew')
// })
//
// test('should get array of greeting messages', () => {
//     const result = getGreeting(people)
//     expect(result[0]).toBe('Hello Andrew. Welcome to IT-Incubator')
//     expect(result[1]).toBe('Hello Alexander. Welcome to IT-Incubator')
//     expect(result[2]).toBe('Hello Dmitry. Welcome to IT-Incubator')
// })
//
// test('lists of streets titles of governments buildings', () => {
//     const result = getStreets(city.governmentBuildings)
//     expect(result.length).toBe(2)
//     expect(result[0]).toBe('Central Str')
//     expect(result[1]).toBe('Souths park str')
// })
//
// test('list of streets titles', () => {
//     const result = getTitleStreets(city.houses)
//     expect(result.length).toBe(3)
//     expect(result[0]).toBe('White street')
//     expect(result[1]).toBe('Happy street')
//     expect(result[2]).toBe('Hogwarts street')
//
// })