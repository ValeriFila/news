import { Navbar } from '@/widgets/Navbar'
import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom' // попробовать с браузер роутером // не помогло
// import { App } from '@/app/App'

describe('Navbar', () => {
    test('Router test', async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        const user = userEvent.setup()
        screen.debug()
        await user.click(screen.getByTestId('calculatorPage'))
        expect(screen.getByTestId('calculator')).toBeInTheDocument()
        screen.debug()
    })
})
