import { memo, useEffect } from 'react';
import cls from './ArticleDetails.module.scss';
import { Text } from '~/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '~/shared/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleData } from '../../model/services/fetchArticleData/fetchArticleData';
import { useSelector } from 'react-redux';
import { getArticleData, getArticleError, getArticleIsLoading } from '../../model/selectors/article';
import { Skeleton } from '~/shared/ui/Skeleton';

export const ArticleDetails = memo(() => {
  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const isLoading = useSelector(getArticleIsLoading);
  const article = useSelector(getArticleData);
  const error = useSelector(getArticleError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchArticleData(id));
    }
  }, [id])

  const content = () => {
    if (!isLoading) return (
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

    return <Text text="СТатья тут будет" />
  }

  return (
    <div className={cls.ArticleDetails}>
      {content()}
    </div>
  )
});
