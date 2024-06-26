import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import './Navbar.scss'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames('Navbar', {}, [className!])}>
            <div
                className={classNames('links', {}, [])}
            >
                <AppLink
                    testId='aboutPage'
                    to='/welcome'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('О нас')}
                </AppLink>
                <AppLink
                    testId='counterPage'
                    to='/counter'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Калькулятор')}
                </AppLink>
                <AppLink
                    testId='mainPage'
                    to='/'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('На главную')}
                </AppLink>
                <AppLink
                    to='/table'
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('Таблица')}
                </AppLink>
            </div>
        </div>
    )
}
