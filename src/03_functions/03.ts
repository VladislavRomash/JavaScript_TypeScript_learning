// import {StudentType} from '../02_objects/02';
//
// export const student: StudentType = {
//     id: 1,
//     name: 'Max',
//     age: 32,
//     isActive: false,
//     address: {
//         streetTitle: 'Surganova 2',
//         city: {
//             title: 'Minsk',
//             countryTitle: 'Belarus'
//         },
//     },
//     technologies: [
//         {id: 1, title: 'HTML'},
//         {id: 2, title: 'CSS'},
//         {id: 3, title: 'JS'},
//     ]
// }
//
//
// export const addSkill = (student: StudentType, skill: string) => {
//     student.technologies.push({id: 4, title: skill})
// }
//
// export const makeStudentActive = (student: StudentType) => {
//     student.isActive = !student.isActive
// }
//
//
// export const changeStudentLive = (student: StudentType, title: string) => {
//     return student.address.city.title === title
// }
//
// export const changeBudget = (obj: CityType, value: number) => {
//     obj.governmentBuildings.map(m => m.budget += value)
// }
//
// export const repairHouse = (obj: CityType) => {
//     obj.houses[1].repaired = !obj.houses[1].repaired
// }
//
// export const toFireStaff = (obj: CityType, value: number) => {
//     obj.governmentBuildings[0].staffCount -= value
// }
//
// export const toHireStaff = (obj: CityType, value: number) => {
//     obj.governmentBuildings[0].staffCount += value
// }
//
// export const createMessage = (obj: CityType) => {
//     return `Hello ${obj.title} citizens. Us ${obj.citizensNumber}`
// }