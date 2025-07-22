import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '~/shared/ui/Text';
import cls from './ArticleText.module.scss';
import { ArticleTextProps } from '../../model/types/article';
import classNames from '~/shared/lib/classNames/classNames';

interface ArticleTextComponentProps {
    className?: string;
    block: ArticleTextProps;
}

export const ArticleText = memo((props: ArticleTextComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleText, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={cls.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={cls.paragraph} />
      ))}
    </div>
  );
});
