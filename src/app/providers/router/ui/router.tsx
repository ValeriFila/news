import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from '../../../App.tsx'
import { PageLoader } from '@/widgets/PageLoader'
import {
    Counter,
    WelcomePage,
    NotFoundPage
} from '@/pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/counter',
                element: <Counter />,
            },
            {
                path: '/welcome',
                element: <WelcomePage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },

])
