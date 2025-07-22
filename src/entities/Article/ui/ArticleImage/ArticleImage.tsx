import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleImage.module.scss';
import { ArticleImageProps } from '../../model/types/article';
import classNames from '~/shared/lib/classNames/classNames';
import { Text } from '~/shared/ui/Text';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageProps;
}

export const ArticleImage = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && (
        <Text text={block.title} />
      )}
    </div>
  );
});
