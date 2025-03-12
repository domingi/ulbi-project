import { FC } from 'react';
import { Button } from '../../Button/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props: LangSwitcherProps) => {
    const { t, i18n } = useTranslation('translation');
    
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button onClick={toggleLang}>
            {t('language')}
        </Button>
    );
};
