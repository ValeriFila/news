import { powValue } from './powValue'

describe('powValue', () => {
    test('Значение равно 1', () => {
        const spy = jest.spyOn(Math, 'pow')

        powValue(1)
        expect(spy).toHaveBeenCalledTimes(0)
    })
    test('Значение >1', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')

        powValue(2)
        expect(spyMathPow).toHaveBeenCalledTimes(1)
    })
})
