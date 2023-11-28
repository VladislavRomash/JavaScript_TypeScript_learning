test('user copy test', () => {
    type UserType = {
        name: string
        age: number
    }
    const user: UserType = {
        name: 'Max',
        age: 25,
    }
    const foo = (value: UserType) => {
        value.age++
    }
    foo(user)
    expect(user.age).toBe(26)
    const copyUser = {...user}
    expect(copyUser.age).toBe(26)
    foo(copyUser)
    expect(user.age).toBe(26)
    expect(copyUser.age).toBe(27)
})

test('array copy test', () => {
    const arr = ['max', 'ann', 'nick']
    arr[2] = 'dima'
    expect(arr[2]).toBe('dima')
    const newArr = arr.push('Igor')
    expect(arr.length).toBe(4)
    const copyArr = [...arr]
    copyArr.shift()
    expect(copyArr[0]).toBe('ann')
    expect(arr[0]).toBe('max')
})

test('value copy test', () => {
    let num1 = 1
    let num2 = 2
    const res = num1 + num2
    expect(res).toBe(3)
    num2 = num1
    expect(num2).toBe(1)
})