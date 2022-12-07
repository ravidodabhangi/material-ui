import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
let StyleContainer = styled(Container)(({ theme }) => ({
  flex: 3,
  marginTop: theme.spacing(3),
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
let StyleTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 16,
  },
}));
let StyleAvatar = styled(Avatar)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: 33.5,
    width: 33.5,
  },
}));
const RightBar = () => {
  return (
    <StyleContainer>
      <Box sx={{ position: "fixed" }}>
        <Box>
          <StyleTypography variant="h6" fontWeight={400} sx={{ fontSize: 18 }}>
            Online Friends
          </StyleTypography>
          <AvatarGroup
            max={7}
            sx={{
              mt: 1,
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <StyleAvatar
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <StyleAvatar
              alt="Travis Howard"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <StyleAvatar
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
            <StyleAvatar
              alt="Agnes Walker"
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <StyleAvatar
              alt="Trevor Henderson"
              src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <StyleAvatar
              alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <StyleAvatar
              alt="Agnes Walker"
              src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <StyleAvatar
              alt="Trevor Henderson"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
          </AvatarGroup>
        </Box>
        <Box>
          <StyleTypography variant="h6" fontWeight={400} sx={{ fontSize: 18 }}>
            Gallary
          </StyleTypography>
          <Box sx={{ display: { sm: "none", md: "block" } }}>
            <ImageList
              cols={3}
              sx={{ height: 218, width: "98%" }}
              rowHeight={100}
              gap={6}
            >
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
            </ImageList>
          </Box>
          <Box sx={{ display: { sm: "block", md: "none" } }}>
            <ImageList
              cols={2}
              sx={{
                height: 208,
                width: "98%",
                display: { md: "block", lg: "none" },
              }}
              rowHeight={90}
              gap={6}
            >
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/117139/pexels-photo-117139.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/1390200/pexels-photo-1390200.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/814898/pexels-photo-814898.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </ImageListItem>
              <ImageListItem>
                <img
                  src="https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </ImageListItem>
            </ImageList>
          </Box>
        </Box>
        <Box>
          <StyleTypography variant="h6" fontWeight={400}>
            Latest Conversation
          </StyleTypography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </StyleContainer>
  );
};

export default RightBar;
