import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Code } from '~/shared/ui/Code';
import cls from './ArticleCode.module.scss';
import { ArticleCodeProps } from '../../model/types/article';
import classNames from '~/shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeProps;
}

export const ArticleCode = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
