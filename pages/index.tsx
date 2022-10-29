import type { NextPage } from 'next';
import styled from 'styled-components';
import Post from '@components/Compound/Post';
import StickyHeader from '@components/StickyHeader';

const MainLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200vh;

  ${({ theme }) => theme.mobile} {
    width: 300px;
    height: 100vh;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <StickyHeader />
      <MainLayout>
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
      </MainLayout>
    </>
  );
};

export default Home;
