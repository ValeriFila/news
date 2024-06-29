import { createBrowserRouter } from 'react-router-dom'
import { App } from '@/app/App'
import {
    Counter,
    WelcomePage,
    NotFoundPage,
    MainPage,
} from '@/pages'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Ууупс, что-то пошло не так...</div>,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
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
