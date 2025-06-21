import { FC, useCallback, useState } from "react";
import cls from './Navbar.module.scss';
import classNames from "~/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "~/shared/ui/Button";
import { ButtonTheme } from "~/shared/ui/Button/ui/Button";
import { Portal } from "~/shared/ui/Portal";
import { LoginModal } from "~/features/AuthByUsername";
import { getAuthData, userActions } from "~/entities/User";
import { useDispatch, useSelector } from "react-redux";

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({className}: NavbarProps) => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const authData = useSelector(getAuthData);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthOpen(prev => !prev);
  }, []);

  const logoutButtonHandler = () => {
    dispatch(userActions.logout());
  };
  
  if (authData) return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Button onClick={logoutButtonHandler} theme={ButtonTheme.CLEAR_INVERTED}>
        {t('vyiti')}
      </Button>
    </div>
  );

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
