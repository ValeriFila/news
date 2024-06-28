import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/app/App'
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
