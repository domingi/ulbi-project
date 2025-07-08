import { FC } from 'react';
import cls from './ProfileCard.module.scss';
import { Input } from '~/shared/ui/Input';
import { Text, TextTheme } from '~/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Profile, VALIDATE_PROFILE_ERRORS } from '../../model/types/profileSchema';
import { Loader } from '~/shared/ui/Loader';
import classNames from '~/shared/lib/classNames/classNames';
import { Avatar } from '~/shared/ui/Avatar';
import { CURRENCY, CurrencySelect } from '~/entities/Currency';
import { COUNTRY, CountrySelect } from '~/entities/Country';
import { useSelector } from 'react-redux';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirst?: (value: string) => void;
    onChangeLast?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: CURRENCY) => void;
    onChangeCountry?: (value: COUNTRY) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { 
    data,
    isLoading,
    error,
    readonly,
    onChangeFirst,
    onChangeLast,
    onChangeCity,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');
  const validationErrors = useSelector(getProfileValidateErrors);

  const validationErrorText = {
    [VALIDATE_PROFILE_ERRORS.INCORRECT_USER_DATA]: t('nevernoeI'),
    [VALIDATE_PROFILE_ERRORS.INCORRECT_USER_COUNTRY]: t('ukazhiteS'),
    [VALIDATE_PROFILE_ERRORS.INCORRECT_USER_AGE]: t('nevernoUk'),
    [VALIDATE_PROFILE_ERRORS.SERVER_ERROR]: t('oshibkaPr'),
    [VALIDATE_PROFILE_ERRORS.NO_DATA]: t('oshibkaPr'),
  };

  if (isLoading) return (
    <div className={classNames(cls.ProfileCard, {}, [cls.isLoading])}>
      <Loader />
    </div>
  );

  if (error) return (
    <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
      <Text title={error} text='Попробуйте перезагрузить страницу' theme={TextTheme.ERROR} />
    </div>
  );

  return (
    <div className={classNames(cls.ProfileCard, { [cls.editing]: !readonly }, [])}>
      <div className={cls.avatarWrapper}>
        {data?.avatar && <Avatar path={data?.avatar} alt="Аватарка" />}
      </div>
      {!!validationErrors?.length && validationErrors.map((error) => (
        <Text
          theme={TextTheme.ERROR}
          title={validationErrorText[error]}
          key={error}
        />
      ))}
      <Input
        value={data?.first}
        placeholder={t('name')}
        className={cls.input}
        readonly={readonly}
        onChange={onChangeFirst}
      />
      <Input
        value={data?.lastName}
        placeholder={t('lastname')}
        className={cls.input}
        readonly={readonly}
        onChange={onChangeLast}
      />
      <Input
        value={data?.city}
        placeholder={t('gorod')}
        className={cls.input}
        readonly={readonly}
        onChange={onChangeCity}
      />
      <Input
        value={data?.age}
        placeholder={t('vozrast')}
        className={cls.input}
        readonly={readonly}
        onChange={onChangeAge}
      />
      <Input
        value={data?.username}
        placeholder={t('imyaPolzo')}
        className={cls.input}
        readonly={readonly}
        onChange={onChangeUsername}
      />
      <Input
        value={data?.avatar}
        placeholder={t('ssylkaNa')}
        className={cls.input}
        readonly={readonly}
        onChange={onChangeAvatar}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        disabled={readonly}
        className={cls.input}
      />
      <CountrySelect
        value={data?.country}
        onChange={onChangeCountry}
        disabled={readonly}
        className={cls.input}
      />
    </div>
  );
};