import { Box, Grid, Stack, styled } from "@mui/material";
import React from "react";
import Add from "./Add";
import FeedBar from "./FeedBar";
import RightBar from "./RightBar";
import SideBar from "./SideBar";

let StyleGrid = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
}));
const Home = () => {
  return (
    <StyleGrid>
      <Stack direction="row" spacing={0}>
        <SideBar/>
        <FeedBar />
        <RightBar />
      </Stack>
      <Add/>
    </StyleGrid>
  );
};

export default Home;
