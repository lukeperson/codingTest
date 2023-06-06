import styled from 'styled-components'
import { Article } from '../commonHooks'

interface Props {
    articles: Article[];
}

export function ArticleList({ articles }: Props) {



    return (
        <ArticleHeadline>{articles.slice(0, 5).map(article => {
            return <ArticleHeader key={article.id} >{article.head}</ArticleHeader>
        })}</ArticleHeadline>
    )
}

const ArticleHeadline = styled.div`
    max-width: 200px;
    min-width: 200px;
    padding: 0 5px;

   
     & >:not(:last-child){
        border-bottom: 1px solid lightgray;
    }
`

export const ArticleHeader = styled.h3`
    font-size: 12px;
    font-weight: 600;
    height: 35px;
    margin: 3px 0px;
`;
