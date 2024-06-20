import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { router } from '@/app/providers/router/ui/router.tsx'
import '@/shared/config/i18n/i18n'

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
