import './styles/index.scss'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import ErrorBoundary from '@/pages/ErrorBoundary/ui/ErrorBoundary.tsx'
import { PageLoader } from '@/widgets/PageLoader'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

export const App = () => {
    const { theme } = useTheme()

    return (
        <div
            className={classNames('App', {}, [theme!])}
            data-testid='app'
        >
            <Navbar />
            <div className={classNames('content', {}, [])}>
                <Sidebar />
                <div className={classNames('page-wrapper', {}, [])}>
                    <Suspense fallback={<PageLoader />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
