import { useState } from 'react';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';


export const LoginForm = (): JSX.Element => {
  const { t } = useTranslation('translation');
  const [val, setVal] = useState('');
  return (
    <div className={cls.LoginForm}>
      <Input type="text" className={cls.input} placeholder="Логин" isFocus />
      <Input type="text" className={cls.input} value={val} onChange={setVal} />
      <Button className={cls.btnLogin}>
        {t('voiti')}
      </Button>
    </div>
  );
};