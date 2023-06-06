import styled from 'styled-components'
import { Article, getImageFileName } from '../commonHooks'

interface Props{
    article: Article;
}

export function MainArticle({article}:Props) {

    const { byline, head, teaser, image } = article;
 
  return (
      <Container>
          <ArticleBody>
              <ArticleHeader>{head}</ArticleHeader>
              <ArticleText>{teaser}</ArticleText>
              <ArticleAuthor>{byline.text}</ArticleAuthor>
          </ArticleBody>
          <ArticleImage src={require(`../../images/${getImageFileName(image)}`)} alt={`Image for article ${head}`} />
      </Container>
  )
}

const ArticleHeader = styled.h1`
    font-size: 26px;
    font-weight: normal;
    margin: 5px 0px;
`;

const ArticleText = styled.p`
    font-size: 12px;
    margin: 0;
    flex: 1; 
`;
const ArticleAuthor = styled.p`
    font-size: 12px;
    font-weight: bold;
    
    margin: 0;
`

const Container = styled.div`
    display: flex;
    height: 190px;
    max-width: 626px;
    padding-right: 5px;
`

const ArticleBody = styled.div`
    flex-grow: 1;
    width: 100%;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
`

const ArticleImage = styled.img`
    flex-grow: 1;
    object-fit: cover;
    width: 100%;
`