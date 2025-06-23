import { FC } from 'react';
import cls from './ProfileCard.module.scss';
import { Input } from '~/shared/ui/Input';
import { Text } from '~/shared/ui/Text';

import { useSelector } from 'react-redux';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../selectors/getProfileError/getProfileError';
import { Button, ButtonTheme } from '~/shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC = (props) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={cls.ProfileCard}>
      <div className={cls.header}>
        <Text title={t('profil')} />
        <Button theme={ButtonTheme.OUTLINE}>{t('edit')}</Button>
      </div>
      <Input
        value={data?.first}
        placeholder={t('name')}
        className={cls.input}
      />
      <Input
        value={data?.lastName}
        placeholder={t('lastname')}
        className={cls.input}
      />
    </div>
  );
};