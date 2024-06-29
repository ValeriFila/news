import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom' // попробовать с браузер роутером // не помогло
import { App } from '@/app/App'

describe('Navbar', () => {
    test('Router test', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        )
        const user = userEvent.setup()
        screen.debug()
        // verify page content for default route
        expect(screen.getByText(/Sorry.. there was an error/i)).toBeInTheDocument()

        // verify page content for expected route after navigating
        await user.click(screen.getByTestId(/calculatorPage/i))
        screen.debug()
        expect(screen.getByTestId(/calculator/i)).toBeInTheDocument()
    })
})
