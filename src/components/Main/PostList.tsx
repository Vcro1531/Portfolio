import React, { FunctionComponent } from "react"
import styled from "@emotion/styled"
import PostItem from "components/Main/PostItem"

const POST_ITEM_DATA = {
  title: "Post Item Title",
  date: "2022.10.12",
  categories: ["Web,Frontend,Testing"],
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque cupiditate dolorum nesciunt aspernatur nam architecto non quidem impedit ipsa, iste, sunt explicabo distinctio odit ipsam fugiat recusan",
  thumbnail: "https://i.insider.com/60144316a7c0c4001991dde6?format=jpeg",
  link: "https://www.google.co.kr/",
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;
`
const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
