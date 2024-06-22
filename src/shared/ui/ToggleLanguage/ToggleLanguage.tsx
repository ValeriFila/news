import { useTranslation } from 'react-i18next'
import Lang from '../../assets/icons/book-dictionary-education-svgrepo-com.svg'
import { classNames } from '@/shared/lib/classNames/classNames.ts'
import { Button } from '@/shared/ui/Button/Button.tsx'

interface ToggleLanguageProps {
    className?: string
}

export const ToggleLanguage = ({ className }: ToggleLanguageProps) => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            toggle={toggle}
            className={classNames('', {}, [className!])}
        >
            <Lang />
        </Button>
    )
}
