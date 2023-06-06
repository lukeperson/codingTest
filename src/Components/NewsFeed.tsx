import styled from 'styled-components'
import { Article } from '../commonHooks'
import { ImageArticle } from './ImageArticle'
import { MainArticle } from './MainArticle'
import { ArticleList } from './ArticleList'
import { useState, useEffect } from 'react'

interface Props {
    articles: Article[]
}

export default function NewsFeed({ articles }: Props) {

    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    return (
        <Container>
            <MainArticles>
                <MainArticle article={articles[0]} />
                {!isMobile && <ImageArticle article={articles[1]} hideTeaser />}
            </MainArticles>
            <SecondaryArticles>
                {isMobile ?
                    <>
                        <ImageArticle article={articles[1]} />
                        <ImageArticle article={articles[2]} />
                        <ArticleList articles={articles.slice(3,articles.length)} />
                    </>
                    :
                    <>
                        <ImageArticle article={articles[2]} />
                        <NoImageContainer>
                            <ImageArticle article={articles[3]} hideImage />
                            <ImageArticle article={articles[4]} hideImage />
                        </NoImageContainer>
                        <ImageArticle article={articles[5]} />
                        <ArticleList articles={articles.slice(6, articles.length)} /> 
                    </>
                }
            </SecondaryArticles>
        </Container>
    )
}

const Container = styled.div`

`

const NoImageContainer = styled.div`
    & > * {
        height: 100px;
    }

     & > :first-child {
      border-bottom: 1px solid lightgray;
    }
`

const MainArticles = styled.div`
    display: flex;
    margin-bottom: 10px;

    & > :first-child {
      flex-grow: 3;
      border-right: 1px solid lightgray;
    }

    & > :last-child {
      flex-grow: 1;
    }

`

const SecondaryArticles = styled.div`
    display: flex;
    height: 200px;
    
    & >:not(:last-child){
        border-right: 1px solid lightgray;
    }
`