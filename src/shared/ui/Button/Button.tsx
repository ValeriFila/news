import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Button.scss'
import React, { ButtonHTMLAttributes } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
    children: React.ReactNode
    toggleTheme: () => void,
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        toggleTheme,
    } = props

    return (
        <button
            type='button'
            onClick={toggleTheme}
            className={classNames('Button', {}, [className!, theme!])}
        >
            {children}
        </button>
    )
}
