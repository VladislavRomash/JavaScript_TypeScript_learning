import {addModel, addNewBook, changeLaptop, changeTitle, moveUser, removeBook} from './10';

type CityType = {
    city: string
}
type LaptopType = {
    company: string
}
export type BooksType = {
    id: number
    title: string
    pagesCount: number
}
export type StudentType = {
    name: string
    age: number
    address: CityType
    laptop: LaptopType
}
type ModelType = {
    id: number
    series: string
    typeMotor: string
}
export type ManufacturerType = {
    [key: string]: ModelType[]
}

let student: StudentType;
let books: BooksType[]
let manufacture: ManufacturerType

beforeEach(() => {
    student = {
        name: 'Ann',
        age: 26,
        address: {
            city: 'Minsk'
        },
        laptop: {
            company: 'Asus'
        }
    }
    books = [
        {id: 1, title: 'JS', pagesCount: 150},
        {id: 2, title: 'HTML', pagesCount: 78},
        {id: 3, title: 'React', pagesCount: 200},
    ]
    manufacture = {
        ['BMW']: [
            {id: 1, series: 'The 3', typeMotor: 'Petrol'},
            {id: 2, series: 'The 5', typeMotor: 'Diesel'}
        ],
        ['Audi']: [
            {id: 1, series: 'A3', typeMotor: 'Petrol'},
            {id: 2, series: 'A5', typeMotor: 'Diesel'}
        ],
    }
})
test('change age', () => {
    let copy = {...student, age: 27}
    expect(copy.age).toBe(27)
    expect(student.age).toBe(26)
    expect(student.address.city).toBe(copy.address.city)
})
test('change city', () => {
    const result = moveUser(student, 'Kiev')
    expect(student.address.city).toBe('Minsk')
    expect(result.address.city).toBe('Kiev')
    expect(result.laptop).toBe(student.laptop)
    expect(result.address).not.toBe(student.address)
})
test('change laptop', () => {
    const result = changeLaptop(student, 'Apple')
    expect(result.laptop.company).toBe('Apple')
    expect(student.laptop.company).toBe('Asus')
    expect(result.address).toBe(student.address)
    expect(result.laptop).not.toBe(student.laptop)
})
test('update book', () => {
    const result = changeTitle(2, books, 'Java')
    expect(result[1].title).toBe('Java')
    expect(books[1].title).toBe('HTML')
    expect(books[1]).not.toBe(result[1])
    expect(books[0]).toBe(result[0])
})
test('add new book', () => {
    const result = addNewBook(books, 'TS')
    expect(result[0].title).toBe('TS')
    expect(result.length).toBe(4)
    expect(books.length).toBe(3)
})
test('remove book', () => {
    const result = removeBook(books, 'HTML')
    expect(result.length).toBe(2)
    expect(books.length).toBe(3)
    expect(result[1].title).toBe('React')
})
test('add model to BMW', () => {
    const result = addModel(manufacture, 'The 7', 'Hybrid')
    expect(result['BMW'].length).toBe(3)
    expect(result['BMW'][2].series).toBe('The 7')
    expect(manufacture['BMW'].length).toBe(2)
})