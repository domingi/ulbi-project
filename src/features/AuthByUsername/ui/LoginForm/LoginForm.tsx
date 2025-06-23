import cls from './LoginForm.module.scss';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { Text } from '~/shared/ui/Text';
import { useSelector } from "react-redux";
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername';
import { TextTheme } from '~/shared/ui/Text/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch/useAppDispatch';

interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm: FC<LoginFormProps> = memo(({ onSuccess }: LoginFormProps) => {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, []);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, []);

  const loginButtonHandler = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [username, password]);

  return (
    <div className={cls.LoginForm}>
      <Text
        title={t('loginForm')}
      />
      {error && (
        <Text
          text={error}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        type="text"
        className={cls.input}
        placeholder="Логин"
        value={username}
        isFocus
        onChange={onChangeUsername}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder="Пароль"
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={cls.btnLogin}
        theme={ButtonTheme.OUTLINE}
        onClick={loginButtonHandler}
        disabled={isLoading}
      >
        {t('voiti')}
      </Button>
    </div>
  );
});
