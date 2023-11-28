type UserType = {
    id: number
    name: string
}

type UsersType = {
    [key: string]: UserType
}

let users: UsersType

beforeEach(() => {
        users = {
            '123': {id: 101, name: 'Dimych'},
            '56320': {id: 102, name: 'Natasha'},
            '1894': {id: 103, name: 'Valera'},
            '1': {id: 104, name: 'Katya'},
        }
    }
)


test('should select corresponding user from obj', () => {
    // read
    expect(users[123].name).toBe('Dimych')
    expect(users[56320].name).toBe('Natasha')
    expect(users[1894].name).toBe('Valera')
    expect(users[1].name).toBe('Katya')
})

test('added new user', () => {
    const newUser = {id: 105, name: 'Igor'}

    // create
    users[newUser.id] = newUser
    expect(Object.keys(users).length).toBe(5)
    expect(users[105].name).toBe('Igor')

    // update
    users[newUser.id].name = 'Max'
    expect(users[newUser.id].name).toBe('Max')

    // delete
    delete users[newUser.id]
    expect(Object.keys(users).length).toBe(4)
})