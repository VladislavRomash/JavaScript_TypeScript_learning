// import {
//     addIdToEachHouse,
//     cheapCourses,
//     completedTasks,
//     destroyedHouses,
//     getBuildings,
//     oldMen
// } from './04';
// import {CityType} from '../02_objects/02.test';
//
// export type CoursesType = {
//     title: string
//     price: number
// }
//
// export type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// let ages: number[]
// let courses: CoursesType[]
// let tasks: TaskType[]
// let city: CityType
//
// beforeEach(() => {
//     ages = [18, 20, 22, 1, 100, 90, 14]
//     courses = [
//         {title: 'CSS', price: 110},
//         {title: 'JS', price: 150},
//         {title: 'REACT', price: 200},
//     ]
//     tasks = [
//         {id: 1, title: 'Bread', isDone: true},
//         {id: 2, title: 'Apple', isDone: false},
//         {id: 3, title: 'Fish', isDone: true},
//         {id: 4, title: 'Milk', isDone: false},
//     ]
//     city = {
//         title: 'Minsk',
//         houses: [
//             {
//                 buildedAt: 2012, repaired: false, address: {
//                     number: 150,
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
// test.skip('filter old men', () => {
//     const result = oldMen(ages, 90)
//     expect(result.length).toBe(1)
//     expect(result[0]).toBe(100)
//
// })
//
// test.skip('filter courses', () => {
//     const result = cheapCourses(courses, 160)
//     expect(result.length).toBe(2)
//
// })
//
// test.skip('get completed tasks', () => {
//     const result = completedTasks(tasks)
//     expect(result.length).toBe(2)
//     expect(result[0].title).toBe('Bread')
//     expect(result[1].title).toBe('Fish')
// })
//
// test.skip('add id to Array of House (map)', () => {
//     const result = addIdToEachHouse(city)
//     expect(result[0].id).toBe(0)
//     expect(result[1].id).toBe(1)
//     expect(result[1].buildedAt).toBe(2008)
// })
//
// test.skip('houses should be destroyed except selected street', () => {
//     const result = destroyedHouses(city, 'Happy street')
//     expect(result[0].address.street.title).toBe('Happy street')
//     expect(result[0].address.number).toBe(100)
// })
//
// test.skip('buildings with correct staff count', () => {
//     const buildings = getBuildings(city.governmentBuildings, 500)
//
//     expect(buildings.length).toBe(1)
//     expect(buildings[0].type).toBe('FIRE-STATION')
// })