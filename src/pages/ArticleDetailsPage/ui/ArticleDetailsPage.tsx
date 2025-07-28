import { ArticleDetails, articleReducer } from "~/entities/Article";
import { CommentList } from "~/entities/Comment";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { articleCommentsReducer, getArticleComments } from "../model/slice/ArticleCommentsSlice";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "../model/selectors/comments";
import { fetchArticleComments } from "../model/services/fetchArticleComments";
import { useAppDispatch } from "~/shared/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ArticleDetailsPage = () => {
  const reducers = {
    'article': articleReducer,
    'articleComments': articleCommentsReducer,
  };
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const errors = useSelector(getArticleCommentsError);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchArticleComments(id));
    }
  }, [id])

  return (
    <DynamicModuleLoader reducers={reducers} isRemove>
      <ArticleDetails />
      <CommentList 
        isLoading={isLoading}
        comments={comments}
      />
    </DynamicModuleLoader>
  )
};

export default ArticleDetailsPage;