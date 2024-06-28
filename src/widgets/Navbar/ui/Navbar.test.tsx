import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { Navbar } from './Navbar'

describe('Navbar', () => {
    const user = userEvent.setup()

    test('Router test', async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )
        const aboutLink = screen.getByTestId('aboutPage')
        // const calculatorLink = screen.getByTestId('calculatorPage')
        // const mainLink = screen.getByTestId('mainPage')

        // userEvent.click(aboutLink)
        // expect(screen.getByTestId('welcome')).toBeInTheDocument()
        await user.click(aboutLink)
        expect(await screen.findByTestId('welcome')).toBeInTheDocument()
        // expect(await screen.findByTestId('calculator')).toBeInTheDocument()
        // userEvent.click(mainLink)
        // expect(screen.getByTestId('app')).toBeInTheDocument()
    })
})
