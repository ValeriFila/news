import { useTranslation } from 'react-i18next'
import { getUsers } from '@/shared/lib/helpers/getUsers/getUsers.ts'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Navbar.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink.tsx'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    getUsers()

    return (
        <div className={classNames('Navbar', {}, [className!])}>
            <div
                className={classNames('links', {}, [])}
            >
                <AppLink
                    to='/welcome'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('О нас')}
                </AppLink>
                <AppLink
                    to='/counter'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Калькулятор')}
                </AppLink>
                <AppLink
                    to='/'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('На главную')}
                </AppLink>
            </div>
        </div>
    )
}
