import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from '~/shared/ui/Button';
import { Input } from '~/shared/ui/Input';
import { Text } from '~/shared/ui/Text';
import { ButtonTheme } from '~/shared/ui/Button/ui/Button';
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername';
import { TextTheme } from '~/shared/ui/Text/ui/Text';


export const LoginForm = (): JSX.Element => {
  const { t } = useTranslation('translation');
  const dispatch = useDispatch();
  const { username, password, isLoading, error } = useSelector(getLoginState);

  const onChangeUsername = (value: string) => {
    dispatch(loginActions.setUsername(value));
  };

  const onChangePassword = (value: string) => {
    dispatch(loginActions.setPassword(value));
  };

  const loginButtonHandler = () => {
    dispatch(loginByUsername({ username, password }));
  };

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
};