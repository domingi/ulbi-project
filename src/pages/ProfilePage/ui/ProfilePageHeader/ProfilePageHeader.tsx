import { useSelector } from "react-redux";
import cls from './ProfilePageHeader.module.scss';
import { memo, useCallback } from "react";
import { getProfileReadonly, profileActions, updateProfileData } from "~/entities/Profile";
import { useAppDispatch } from "~/shared/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "~/shared/ui/Button";
import { Text } from '~/shared/ui/Text';
import { useTranslation } from "react-i18next";
import { read } from "node:fs";

const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const editButtonHandler = useCallback(() => {
    dispatch(profileActions.setProfileReadonly(false));
  }, []);

  const cancelButtonHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, []);

  const saveButtonHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, []);

  return (
    <div className={cls.ProfilePageHeader}>
      <Text title={t('profil')} />
      {readonly
        ? <Button theme={ButtonTheme.OUTLINE} onClick={editButtonHandler}>{t('edit')}</Button>
        : <Button theme={ButtonTheme.OUTLINE} onClick={cancelButtonHandler}>{t('otmenit')}</Button>
      }
      {!readonly && <Button theme={ButtonTheme.OUTLINE} onClick={saveButtonHandler}>{t('sokhranit')}</Button>}
    </div>
  )
};

export default memo(ProfilePageHeader);