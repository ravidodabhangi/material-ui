import {
    alpha,
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { Mail, NotificationAdd } from "@mui/icons-material";
import CancelIcon from '@mui/icons-material/Cancel';
let StyleToolBar = styled(Toolbar)({
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
});
let StyleInput = styled(Box)(({ theme }) => ({
  borderRadius: "7px",
  backgroundColor: alpha(theme.palette.common.white,0.15),
  "&:hover":{
    backgroundColor:alpha(theme.palette.common.white,0.25)
  },
  display: "none",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "40%",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
let StyleInputvisible = styled(Box)(({ theme }) => ({
  borderRadius: "7px",
  backgroundColor: "white",
  display: "flex",
  backgroundColor: alpha(theme.palette.common.white,0.15),
  "&:hover":{
    backgroundColor:alpha(theme.palette.common.white,0.25)
  },
  alignItems: "center",
  justifyContent: "flex-start",
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
let StyleIcon1 = styled("div")(({ theme }) => ({
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  gap: 15,
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
let StyleIcon2 = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: 15,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  let [inputVisible, setInputVisible] = useState(false);
  let [open, setOpen] = useState(false);
  let handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="fixed">
      <StyleToolBar sx={{ p: 1 }}>
        <Typography
          sx={{
            display: {
              xs: "none",
              sm: "block",
              "&::first-letter": {
                color: "deeppink",
                fontSize: "25px",
                textTransform: "uppercase",
                fontWeight: "bold",
              },
            },
          }}
          variant="h6"
        >
          Wheel Zyro
        </Typography>
        <Typography
          sx={{
            display: {
              xs: "block",
              sm: "none",
              "&::first-letter": {
                color: "deeppink",
                fontSize: "25px",
                textTransform: "uppercase",
                fontWeight: "bold",
              },
            },
          }}
          variant="h6"
        >
          Wheel
        </Typography>
        <StyleInput>
          <SearchIcon sx={{ color: "white", m: 0.5 }} />
          <InputBase
            sx={{
              p: { xs: "1px", sm: "3px" },
            }}
            fullWidth
            placeholder="Search..."
          />
        </StyleInput>
        {inputVisible === true ? (
          <StyleInputvisible>
            <SearchIcon sx={{ color: "white", m: 0.5 }} />
            <InputBase
              sx={{
                p: { xs: "1px", sm: "3px" }
              }}
              fullWidth
              placeholder="Search..."
            />
            <CancelIcon
              sx={{ color: "white", m: 0.5 }}
              onClick={(e) => setInputVisible(false)}
            />
          </StyleInputvisible>
        ) : null}
        {inputVisible === true ? null : (
          <SearchIcon
            sx={{
              color: "white",
              fontSize: "25px",
              ml: 15,
              display: { xs: "block", sm: "none" },
            }}
            onClick={(e) => setInputVisible(true)}
          />
        )}
        <StyleIcon1>
          <Badge badgeContent={4} color="secondary" sx={{ pt: 0.5, mt: 0.2 }}>
            <Mail sx={{ fontSize: "30px" }} />
          </Badge>
          <Badge badgeContent={4} color="secondary" sx={{ pt: 0.5, mt: 0.2 }}>
            <NotificationAdd sx={{ fontSize: "30px" }} />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{
              width: 35,
              height: 35,
            }}
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Menu sx={{top:55}}
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyleIcon1>
        {inputVisible === true ? null : (
          <StyleIcon2>
            <Badge badgeContent={4} color="secondary" sx={{ pt: 0.5, mt: 0.2 }}>
              <NotificationAdd sx={{ fontSize: "30px" }} />
            </Badge>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{
                width: "40px",
                height: "40px",
              }}
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <Typography variant="h6" sx={{ mt: 0.2 }}>
              John
            </Typography>
          </StyleIcon2>
        )}
      </StyleToolBar>
    </AppBar>
  );
};

export default NavBar;
