import { Theme, useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './ToggleTheme.scss'
import { Button, ThemeButton } from '@/shared/ui/Button/Button.tsx'
import DarkIcon from '../../assets/icons/theme-dark 1.svg'
import LightIcon from '../../assets/icons/theme-light 1.svg'

interface ToggleThemeProps {
    className?: string
}

export const ToggleTheme = ({ className }: ToggleThemeProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames('ToggleTheme', {}, [className!])}
        >
            { theme === Theme.LIGHT ? ( 
                <LightIcon /> 
            ) : ( 
                <DarkIcon />
            )}
        </Button>
    )
}