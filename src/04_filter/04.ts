// import {CoursesType, TaskType} from './04.test';
// import {CityType, GovernmentBuildingsType} from '../02_objects/02.test';
//
// export const oldMen = (age: number[], condition: number) => {
//     const newArr: number[] = []
//     for (let i = 0; i < age.length; i++) {
//         if (age[i] > condition) {
//             newArr.push(age[i])
//         }
//     }
//     return newArr
//     // return age.filter(f => f > 90)
// }
//
// export const cheapCourses = (courses: CoursesType[], condition: number) => {
//     const newArr: Object[] = []
//     for (let i = 0; i < courses.length; i++) {
//         if (courses[i].price < condition) {
//             newArr.push(courses[i])
//         }
//     }
//     return newArr
//     // return courses.filter(f => f.price < 160)
// }
//
// export const completedTasks = (tasks: TaskType[]) => {
//     return tasks.filter(f => f.isDone)
// }
//
// export const addIdToEachHouse = (value: CityType) => {
//     return value.houses.map((m, i) => ({...m, id: i}))
// }
//
// export const destroyedHouses = (value: CityType, street: string) => {
//     return value.houses.filter(f => f.address.street.title === street)
// }
//
// export const getBuildings = (value: GovernmentBuildingsType[], count: number) => {
//     return value.filter(f => f.staffCount > count)
// }