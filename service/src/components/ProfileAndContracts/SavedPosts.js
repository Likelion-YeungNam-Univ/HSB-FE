import React from "react";
import styled from "styled-components";

const SavedPostsContainer = styled.div`
  width: 100%;
  border: 1px solid #BCBCBC;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
`;

const SavedPosts = ({ savedPosts }) => {
  // savedPosts 배열이 정의되지 않았을 경우 빈 배열로 초기화
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
  );
}

export default SavedPosts;
