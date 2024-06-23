import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Sidebar.scss'
import { Button } from '@/shared/ui/Button/Button.tsx'
import { ToggleLanguage } from '@/shared/ui/ToggleLanguage/ToggleLanguage.tsx'
import { ToggleTheme } from '@/shared/ui/ToggleTheme/ToggleTheme.tsx'
import { useState } from 'react'
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
