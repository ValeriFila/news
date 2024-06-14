import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Navbar.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink.tsx'
import { ToggleTheme } from '@/shared/ui/ToggleTheme/ToggleTheme.tsx'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames('Navbar', {}, [className!])}>
            <ToggleTheme />
            <AppLink
                to='/welcome'
                theme={AppLinkTheme.SECONDARY}
            >
                О нас
            </AppLink>
            <AppLink
                to='/counter'
                theme={AppLinkTheme.SECONDARY}
            >
                Калькулятор
            </AppLink>
            <AppLink
                to='/'
                theme={AppLinkTheme.SECONDARY}
            >
                На главную
            </AppLink>
        </div>
    )
}
