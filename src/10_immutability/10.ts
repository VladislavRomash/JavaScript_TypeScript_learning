import {BooksType, ManufacturerType, StudentType} from './10.test';

export const moveUser = (student: StudentType, moveTo: string) => ({
    ...student, address: {...student.address, city: moveTo}
})
export const changeLaptop = (student: StudentType, newLaptop: string) => ({
    ...student, laptop: {...student.laptop, company: newLaptop}
})
export const changeTitle = (id: number, books: BooksType[], title: string) => {
    return books.map(m => m.id === id ? {...m, title} : m)
}
export const addNewBook = (books: BooksType[], title: string) => {
    const newBook = {id: 4, title, pagesCount: 100}
    return [newBook, ...books]
}
export const removeBook = (books: BooksType[], title: string) => {
    return books.filter(f => f.title !== title)
}
export const addModel = (arr: ManufacturerType, series: string, typeMotor: string) => {
    const newModel = {id: 1, series, typeMotor}
    return {...arr, ['BMW']: [...arr['BMW'], newModel]}
}