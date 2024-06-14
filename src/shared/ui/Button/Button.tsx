import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Button.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
    } = props

    return (
        <Button
            className={classNames('Button', {}, [className!, theme!])}
        >
            {children}
        </Button>
    )
}
