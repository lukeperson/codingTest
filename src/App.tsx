import styled from 'styled-components'
import NewsFeed from './Components/NewsFeed';
import { useArticles } from './commonHooks';

function App() {

  const { articles, loading, error } = useArticles()


  if (loading) {
    return <>loading</>
  }

  if (error || articles.length < 6) {
    return <>error</>
  }

  return (
    <Container>
      <StyledLeftColumn />
      <NewsFeed articles={articles} />
      <StyledRightColumn />
    </Container>
  );
}

const Container = styled.div`
display: flex;
 justify-content:space-between;
 flex-grow:2;
`

const StyledLeftColumn = styled.div`
 background-color: antiquewhite;
 flex-grow:1;
 height: 100vh;
 `

const StyledRightColumn = styled.div`
background-color: antiquewhite;
flex-grow:1;
height: 100vh;
`

export default App;
