import { memo, useCallback, useEffect } from 'react';
import cls from './ArticleDetails.module.scss';
import { Text } from '~/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleData } from '../../model/services/fetchArticleData/fetchArticleData';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/article';
import { Skeleton } from '~/shared/ui/Skeleton';
import { ARTICLE_BLOCK_TYPES, ArticleBlockProps } from '../../model/types/article';
import { ArticleCode } from '../ArticleCode/ArticleCode';
import { ArticleImage } from '../ArticleImage/ArticleImage';
import { ArticleText } from '../ArticleText/ArticleText';
import { Avatar } from '~/shared/ui/Avatar';
import { EyeIcon } from '~/shared/assets/icons/EyeIcon';
import { CalendarIcon } from '~/shared/assets/icons/CalendarIcon';

export const ArticleDetails = memo(() => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isLoading = useSelector(getArticleIsLoading);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);

  const renderBlock = useCallback((block: ArticleBlockProps) => {
    switch (block.type) {
    case ARTICLE_BLOCK_TYPES.CODE:
      return (
        <ArticleCode
          key={block.id}
          block={block}
          className={cls.block}
        />
      );
    case ARTICLE_BLOCK_TYPES.IMAGE:
      return (
        <ArticleImage
          key={block.id}
          block={block}
          className={cls.block}
        />
      );
    case ARTICLE_BLOCK_TYPES.TEXT:
      return (
        <ArticleText
          key={block.id}
          className={cls.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchArticleData(id));
    }
  }, [id])

  const content = () => {
    if (isLoading) return (
      <>
        <Skeleton width={200} height={200} borderRadius='50%' className={cls.avatar} />
        <Skeleton width={300} height={32} className={cls.title} />
        <Skeleton width={600} height={24} className={cls.title} />
        <Skeleton width='100%' height={200} className={cls.title} />
        <Skeleton width='100%' height={200} className={cls.title} />
      </>
    );
    if (!id) return (
      <Text title={t('statyaNe')} />
    )
    if (error) return (
      <Text title={t('proizoshla')} />
    )

    if (!article) return null;

    return (
      <>
        <Avatar
          path={article?.img}
          className={cls.avatar}
          alt="Лого статьи"
          size={200}
        />
        <Text
          className={cls.title}
          title={article?.title}
          text={article?.subtitle}
        />
        <div className={cls.articleInfo}>
          <EyeIcon />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <CalendarIcon />
          <Text text={article?.createdAt} />
        </div>
        {    article.blocks.map(renderBlock)}
      </>
    ) 
  }

  return (
    <div className={cls.ArticleDetails}>
      {content()}
    </div>
  )
});
