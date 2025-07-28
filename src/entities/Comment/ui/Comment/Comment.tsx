import { memo, FC } from 'react';
import cls from './Comment.module.scss';
import { useTranslation } from 'react-i18next';
import { Avatar } from '~/shared/ui/Avatar';
import { IComment } from '../../model/types/comment';
import { Text } from '~/shared/ui/Text';
import { Skeleton } from '~/shared/ui/Skeleton';

interface CommentProps {
    className?: string;
    comment: IComment;
    isLoading: boolean;
}

export const Comment: FC<CommentProps> = memo(({ className, comment, isLoading }: CommentProps) => {
  const { t } = useTranslation('article');

  if (isLoading) return (
    <div className={cls.Comment}>
      <div className={cls.title}>
        <Skeleton width={50} height={50} className={cls.avatar} />
        <Skeleton width={80} height={28} />
      </div>
      <Skeleton width={300} height={48} className={cls.skeleton}/>
    </div>
  )
  return (
    <div className={cls.Comment}>
      <div className={cls.title}>
        {comment.user.avatar && <Avatar size={50} path={comment.user.avatar} alt="Аватар" className={cls.avatar} />}
        <Text title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  )
});
