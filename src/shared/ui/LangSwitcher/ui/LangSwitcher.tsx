import { FC } from 'react';
import { Button } from '../../Button/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = (props: LangSwitcherProps) => {
  const { className, short } = props;
  const { t, i18n } = useTranslation('translation');
    
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  return (
    <div className={className}>
      <Button onClick={toggleLang}>
        {short ? t('language-short') : t('language')}
      </Button>
    </div>
  );
};
