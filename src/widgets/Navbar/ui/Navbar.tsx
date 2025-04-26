import { FC, useCallback, useState } from "react";
import cls from './Navbar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { APP_LINK_THEME, AppLink } from "~/shared/ui/AppLink/ui/AppLink";
import { ROUTE_PATHS } from "~/shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import { Button } from "~/shared/ui/Button";
import { Modal } from "~/shared/ui/Modal";
import { ButtonTheme } from "~/shared/ui/Button/ui/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}: NavbarProps) => {
  const { t } = useTranslation('translation');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthOpen(prev => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={toggleAuthModal} theme={ButtonTheme.CLEAR_INVERTED}>
        {t('voiti')}
      </Button>
      <Modal isOpen={isAuthOpen} onClose={toggleAuthModal}>
        Microsoft Windows [Version 10.0.22631.5189]
      </Modal>
    </div>
  );
};
