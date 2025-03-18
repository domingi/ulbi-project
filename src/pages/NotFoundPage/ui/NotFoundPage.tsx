import { useTranslation } from "react-i18next";
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation('translation');

  return (
    <div className={cls.NotFoundPage}>{t('404-stranica-ne-naidena')}</div>
  )
};

export default NotFoundPage;