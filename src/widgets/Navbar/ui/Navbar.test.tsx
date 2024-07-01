import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
// import { App } from '@/app/App'
import { Navbar } from '@/widgets/Navbar'

describe('Navbar', () => {
    test('Router test', async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        const user = userEvent.setup()
        screen.debug()
        await user.click(screen.getByTestId('counterPage'))
        expect(screen.getByTestId('counter')).toBeInTheDocument()
        screen.debug()
    })
})
