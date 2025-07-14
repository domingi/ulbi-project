import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { ArticleDetails, articleReducer, fetchArticleData } from "~/entities/Article";
import { useAppDispatch } from "~/shared/hooks/useAppDispatch/useAppDispatch";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const ArticleDetailsPage = () => {
  const { t } = useTranslation('about');

  return (
    <DynamicModuleLoader reducerName='article' reducer={articleReducer} isRemove>
      <div>ArticleDetailsPage</div>
      <ArticleDetails />
    </DynamicModuleLoader>
  )
};

export default ArticleDetailsPage;