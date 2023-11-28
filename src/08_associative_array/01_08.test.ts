import exp from 'constants';

type StydentType = {
    name: string
    technology: string
}

type StudentsType = {
    [id: string]: StydentType[]
}

type ObjectType = {
    id: string
    title: string
    salary: number
}

type ArrayType = {
    id: string
    title: string
    salary: number
}

let arr: ArrayType[]
let obj: ObjectType
let students: StudentsType

beforeEach(() => {
    arr = [
        {id: 'id100', title: 'Dimych', salary: 10},
        {id: 'id20222', title: 'Viktor', salary: 100},
        {id: 'id323242', title: 'Valera', salary: 50},
        {id: 'id6523587', title: 'Artem', salary: 100},
    ]
    obj = {id: 'id100', title: 'Dimych', salary: 10}
    students = {
        '001': [
            {name: 'Ann', technology: 'CSS'},
            {name: 'Max', technology: 'HTML'},
            {name: 'Nick', technology: 'JS'},
        ],
        '002': [
            {name: 'Dima', technology: 'REDUX'},
            {name: 'Kate', technology: 'REACT'},
            {name: 'Bob', technology: 'ANGULAR'},
        ],
    }
})


test('change salary Artem', () => {
    const artemID = 'id6523587'
    const res = arr.map(m => m.id === artemID ? {...m, salary: 50} : m)

    expect(res[3].salary).toBe(50)
})

test('keys', () => {
    const res = Object.keys(obj)

    expect(res[0]).toBe('id')
    expect(res[1]).toBe('title')
    expect(res[2]).toBe('salary')
})

test('property as string', () => {
    const newProperty = 'title'
    obj[newProperty] = 'Sveta'

    expect(obj.title).toBe('Sveta')
})

test('change technology at Max', () => {
    const result = students['002']
    const name = students['002'][2].name
    const changeTechnology = students['001'].map(m => m.name === 'Max' ? {...m, technology: 'VIEW'} : m)

    expect(result.length).toBe(3)
    expect(name).toBe('Bob')
    expect(changeTechnology[1].technology).toBe('VIEW')
    expect(changeTechnology.length).toBe(3)

})