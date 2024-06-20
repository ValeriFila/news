import './styles/index.scss'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('App', { }, [theme!])}>
            <Navbar />
            <div className={classNames('content', { }, [])}>
                <Sidebar />
                <div className={classNames('page-wrapper', { }, [])}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
