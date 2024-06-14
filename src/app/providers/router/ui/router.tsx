import { createBrowserRouter } from 'react-router-dom'
import { Counter } from '@/pages/Counter'
import { WelcomePage } from '@/pages/WelcomePage'
import { App } from '../../../App.tsx'

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
        ],
    },

])
