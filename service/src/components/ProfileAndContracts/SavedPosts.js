import React from "react";
import styled from "styled-components";

const SavedPostsContainer = styled.div`
  width: 100%;

`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  border: 
`;

const PostList = styled.ul`
  padding: 0;
  max-width: 300px; 
  height: 170px; 
  border: 1px solid #BCBCBC;
  padding: 20px;
  overflow-y: auto; 
`;

const PostItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SavedPosts = ({ savedPosts }) => {
  const postsToDisplay = savedPosts || [];

  return (
    <SavedPostsContainer>
      <Title>저장한 게시물</Title>
      <PostList>
        {postsToDisplay.map((post, index) => (
          <PostItem key={index}>{post}</PostItem>
        ))}
      </PostList>
    </SavedPostsContainer>
  )
}

export default SavedPosts;
