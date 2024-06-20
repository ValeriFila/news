import { createBrowserRouter } from 'react-router-dom'
import { App } from '../../../App.tsx'
import { Counter } from '@/pages/Counter'
import { WelcomePage } from '@/pages/WelcomePage'

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
