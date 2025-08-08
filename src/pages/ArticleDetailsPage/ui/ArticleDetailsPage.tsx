import { ArticleDetails, articleReducer } from "~/entities/Article";
import { CommentList } from "~/entities/Comment";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useSelector } from "react-redux";
import { articleCommentsReducer, getArticleComments } from "../model/slice/ArticleCommentsSlice";
import { getArticleCommentsError, getArticleCommentsIsLoading } from "../model/selectors/comments";
import { useAppDispatch } from "~/shared/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddCommentForm } from "~/features/addCommentForm";
import { addCommentForArticle } from "../model/services/addCommentForArticle";
import { fetchArticleComments } from "../model/services/fetchArticleComments";

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
  const sendComment = useCallback((e: string) => {
    dispatch(addCommentForArticle(e))
  },[]);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchArticleComments(id));
    }
  }, [id])

  return (
    <DynamicModuleLoader reducers={reducers} isRemove>
      <ArticleDetails />
      <AddCommentForm sendComment={sendComment} />
      <CommentList 
        isLoading={isLoading}
        comments={comments}
      />
    </DynamicModuleLoader>
  )
};

export default ArticleDetailsPage;