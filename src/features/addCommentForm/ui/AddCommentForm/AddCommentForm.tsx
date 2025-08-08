import { FC } from 'react';
import cls from './AddCommentForm.module.scss';
import { Input } from '~/shared/ui/Input';
import { Button } from '~/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch/useAppDispatch';
import { addCommentActions, addCommentReducer } from '../../model/slice/addCommentSlice';
import { useSelector } from 'react-redux';
import { getNewComment } from '../../model/selectors/addCommentSelectors';
import { DynamicModuleLoader } from '~/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

interface AddCommentFormProps {
    className?: string;
    sendComment: (text: string) => void;
}

export const AddCommentForm: FC<AddCommentFormProps> = ({ className, sendComment }) => {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const newComment = useSelector(getNewComment);
  const onCommentChange = (e: string) => {
    dispatch(addCommentActions.setComment(e))
  };

  const onSendComment = () => {
    onCommentChange('');
    sendComment(newComment || '');
  };

  return (
    <DynamicModuleLoader reducers={{ 'addComment': addCommentReducer }} isRemove>
      <div className={cls.AddCommentForm}>
        <Input
          placeholder={t('napisatKo')}
          value={newComment}
          onChange={onCommentChange}
          className={cls.input}
        />
        <Button onClick={onSendComment}>Отправить</Button>
      </div>
    </DynamicModuleLoader>
  );
};