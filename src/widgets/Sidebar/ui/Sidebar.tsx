import React from 'react'
import { useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Sidebar.scss'
import { ToggleTheme } from '@/shared/ui/ToggleTheme/ToggleTheme.tsx'
import { ToggleLanguage } from '@/shared/ui/ToggleLanguage/ToggleLanguage.tsx'
import { Button } from '@/shared/ui/Button/Button.tsx'
import Lines from '@/shared/assets/icons/three-line-horizontal-svgrepo-com.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const toggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames('Sidebar', { collapsed }, [className!])}>
            <Button
                onClick={toggle}
            >
                <Lines />
            </Button>
            <div className={classNames('Sidebar__content', { }, [])}>
                <ToggleLanguage />
                <ToggleTheme />
            </div>
        </div>
    )
}
