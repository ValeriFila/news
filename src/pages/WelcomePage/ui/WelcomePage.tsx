import React from 'react'
import '@/pages/WelcomePage/ui/WelcomePage.scss'

const WelcomePage = () => {
    return (
        <div data-testid='welcome'>
            <div className='welcome-page'>
                Welcome!
            </div>
            <p>Добро пожаловать!</p>
        </div>
    )
}

export default WelcomePage
