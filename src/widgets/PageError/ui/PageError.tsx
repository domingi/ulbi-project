import { FC } from "react";
import cls from './PageError.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { Button } from "~/shared/ui/Button";
import { useTranslation } from "react-i18next";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({className}: PageErrorProps) => {
  const { t } = useTranslation('translation');

  const buttonHandler = () => {
    location.reload();
  }
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t('chto-to-poshlo-ne-tak')}</h1>
      <Button onClick={buttonHandler}>{t('perezagruzit')}</Button>
    </div>
  );
};