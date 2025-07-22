import { ArticleDetails, articleReducer } from "~/entities/Article";
import { DynamicModuleLoader } from "~/shared/lib/DynamicModuleLoader/DynamicModuleLoader";

const ArticleDetailsPage = () => {

  return (
    <DynamicModuleLoader reducerName='article' reducer={articleReducer} isRemove>
      <ArticleDetails />
    </DynamicModuleLoader>
  )
};

export default ArticleDetailsPage;