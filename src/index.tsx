import { router } from '@/app/providers/router/ui/router.tsx'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

const root = createRoot(document.getElementById('root')!)
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </ThemeProvider>
    </React.StrictMode>,
)