import { validateValue } from '@/shared/lib/helpers/validateValue/validateValue.ts'

describe('validateValue', () => {
    test('Среднее значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Значение на левой границе', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Значение на правой границе', () => {
        expect(validateValue(100)).toBe(true)
    })
    test('Значение меньше левой границы', () => {
        expect(validateValue(-50)).toBe(false)
    })
    test('Значение больше правой границы', () => {
        expect(validateValue(150)).toBe(false)
    })
})
