import React from 'react'
import styled from 'styled-components'
import { Article, getImageFileName } from '../commonHooks';

interface Props {
  article: Article;
  hideImage?: boolean;
  hideTeaser?: boolean;
}

export function ImageArticle({ article, hideImage, hideTeaser }: Props) {

  const { byline, head, teaser, image } = article;

  return (
    <Container>
      {!hideImage && <ArticleImage src={require(`../../images/${getImageFileName(image)}`)} alt={`Image for article ${head}`} />}
      <ArticleHeader>{head}</ArticleHeader>
      {!hideTeaser && <ArticleText>{teaser}</ArticleText>}
      <ArticleAuthor>{byline.text}</ArticleAuthor>
    </Container>
  )
}

const ArticleHeader = styled.h2`
    font-size: 12px;
    font-weight: 600;
    margin: 3px 0px;
`;


const ArticleImage = styled.img`
    object-fit: cover;
    height: 100px;
    width: 100%;
`

const ArticleText = styled.p`
    font-size: 9px;
    margin: 0;
    flex: 1; 
`;
const ArticleAuthor = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin: 0 0 3px 0;
`

const Container = styled.div`
    width: 200px;
    padding: 0 5px;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 200px;
`