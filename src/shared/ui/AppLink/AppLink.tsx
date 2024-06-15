import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './AppLink.scss'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children: React.ReactNode
}

export const AppLink = (props: AppLinkProps) => {
    const {
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        to,
    } = props

    return (
        <Link to={to} className={classNames('AppLink', {}, [className!, theme])}>
            { children }
        </Link>
    )
}
