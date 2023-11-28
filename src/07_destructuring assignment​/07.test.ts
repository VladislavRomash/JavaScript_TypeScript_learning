type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: LessonType[]
    address: { street: { title: string } }
}

let man: ManType

beforeEach(() => {
    man = {
        name: 'Igor',
        age: 50,
        lessons: [
            {title: '1'},
            {title: '2'},
            {title: '3'},
            {title: '4'},
        ],
        address: {
            street: {
                title: 'Tolstogo'
            }
        }
    }
})

test('object', () => {

    const {name, age, lessons} = man
    const {title} = man.address.street

    expect(name).toBe('Igor')
    expect(age).toBe(50)
    expect(lessons.length).toBe(2)

    expect(title).toBe('Tolstogo')

})

test('array', () => {

    const [one, two, , four] = man.lessons

    const [, les2, ...rest] = man.lessons

    expect(one.title).toBe('1')
    expect(two.title).toBe('2')
    expect(four.title).toBe('4')

    expect(les2.title).toBe('2')
    expect(rest.length).toBe(2)
    expect(rest[0].title).toBe('3')
})