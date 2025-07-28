import { memo, FC } from 'react';
import cls from './CommentList.module.scss';
import { useTranslation } from 'react-i18next';
import { IComment } from '../../model/types/comment';
import { Comment } from '../Comment/Comment';
import { Text } from '~/shared/ui/Text';

interface CommentListProps {
    className?: string;
    comments: IComment[];
    isLoading: boolean;
}

export const CommentList: FC<CommentListProps> = memo(({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  return (
    <div className={cls.CommentList}>
      <Text title={t('kommentari')} />
      {comments.map((comment) => <Comment comment={comment} key={comment.id} isLoading={isLoading} />)}
    </div>
  )
});
