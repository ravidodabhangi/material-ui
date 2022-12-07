import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import {
  Apps,
  CameraAlt,
  Collections,
  Home,
  List,
  Logout,
  Storefront,
  VideoCall,
} from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
let StyleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginBottom: theme.spacing(4),
  gap: 12,
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(1.8),
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(3),
    cursor: "pointer",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(6.5),
  },
}));
let StyleContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    flex: 1,
  },
  [theme.breakpoints.down("lg")]: {
    flex: 1.3,
  },
  [theme.breakpoints.down("md")]: {
    flex: 1.6,
  },
  paddingTop: theme.spacing(3),
  position:"relative",
  color: "#555",
  backgroundColor: "white",
  border: "2px solid #ece7e7",
  [theme.breakpoints.down("sm")]: {
    flex: 0.4,
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}));
let StyleTypographt = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
    fontSize: "12px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
  },
}));
let StyleTypograbox = styled(Box)(({ theme }) => ({
  height:"100%",
  position: "fixed",
  height: "100vh",
}));
const SideBar = () => {
  return (
    <StyleContainer>
      <StyleTypograbox>
        <StyleBox>
          <Home />
          <StyleTypographt variant="h6">Home</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <PeopleAltIcon />
          <StyleTypographt variant="h6">Friends</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <List />
          <StyleTypographt variant="h6">List</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <CameraAlt />
          <StyleTypographt variant="h6">Camera</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <VideoCall />
          <StyleTypographt variant="h6">Video</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <Apps />
          <StyleTypographt variant="h6">Apps</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <Collections />
          <StyleTypographt variant="h6">Collection</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <Storefront />
          <StyleTypographt variant="h6">Market Place</StyleTypographt>
        </StyleBox>
        <StyleBox>
          <Logout />
          <StyleTypographt variant="h6">Logout</StyleTypographt>
        </StyleBox>
      </StyleTypograbox>
    </StyleContainer>
  );
};

export default SideBar;
