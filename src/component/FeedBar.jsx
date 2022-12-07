import { Typography, Container, styled } from "@mui/material";
import React from "react";
import Post from "../Post";
let StyleContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  flex: 5,
  paddingTop: theme.spacing(1),
}));
const FeedBar = () => {
  return (
    <StyleContainer>
      <Typography variant="h6" fontWeight={400}>
        Posts
      </Typography>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </StyleContainer>
  );
};

export default FeedBar;
