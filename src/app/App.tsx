import '@/app/styles/index.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Navbar } from '@/widgets/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', { }, [theme!])}>
            <Navbar />
            <Outlet />
        </div>
    )
}
