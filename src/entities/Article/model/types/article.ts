
export enum ARTICLE_BLOCK_TYPES {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE'
}

interface ArticleBaseProps {
    id: string;
    type: ARTICLE_BLOCK_TYPES;
}

export interface ArticleCodeProps extends ArticleBaseProps {
    type: ARTICLE_BLOCK_TYPES.CODE;
    code: string;
}

export interface ArticleTextProps extends ArticleBaseProps {
    type: ARTICLE_BLOCK_TYPES.TEXT;
    title: string;
    paragraphs: string[];
}

export interface ArticleImageProps extends ArticleBaseProps {
    type: ARTICLE_BLOCK_TYPES.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlockProps = ArticleCodeProps | ArticleTextProps | ArticleImageProps;

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number,
    createdAt: string;
    type: string[];
    blocks: ArticleBlockProps[];
}

export interface ArticleSchema {
    data?: Article;
    error?: string;
    isLoading: boolean;
}