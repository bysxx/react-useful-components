import type { NextPage } from 'next';
import styled from 'styled-components';
import Post from '@components/Compound/Post'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  ${({ theme }) => theme.mobile} {
    width: 300px;
    height: 100vh;
  }
`;

const Home: NextPage = () => {
  return (
    <Container>
      <Post>
        <Post.Title />
        <Post.Comment />
        <Post.Buttons />
        <ul>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </Post>
    </Container>
  );
};

export default Home;
