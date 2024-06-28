import React from 'react'
import '@testing-library/jest-dom'
import axios from 'axios'
import { render, screen } from '@testing-library/react'
import { Users } from './Users'

jest.mock('axios')

describe('Users', () => {
    const result = {
        data: [
            {
                'id': 1,
                'name': 'Leanne Graham',
            },
            {
                'id': 2,
                'name': 'Ervin Howell',
            },
            {
                'id': 3,
                'name': 'Clementine Bauch',
            },
        ]
    }

    test('should render users', async () => {
        (axios.get as jest.Mock).mockReturnValue(result)
        render(<Users />)
        const users = await screen.findAllByTestId('users')
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(users.length).toBe(3)
        screen.debug()
    })
})
