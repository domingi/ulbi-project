import { FC, useCallback, useState } from "react";
import cls from './Navbar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "~/shared/ui/Button";
import { ButtonTheme } from "~/shared/ui/Button/ui/Button";
import { Portal } from "~/shared/ui/Portal";
import { LoginModal } from "~/features/AuthByUsername/ui/LoginModal/LoginModal";

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
      <Portal>
        <LoginModal isOpen={isAuthOpen} onClose={toggleAuthModal} />
      </Portal>
    </div>
  );
};
