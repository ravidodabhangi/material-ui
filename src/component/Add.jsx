import {
  Box,
  Fab,
  Typography,
  Modal,
  styled,
  Tooltip,
  Container,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Button,
  Snackbar,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const currencies = [
  {
    value: "Public",
    label: "Public",
  },
  {
    value: "Private",
    label: "Private",
  },
  {
    value: "Unlisted",
    label: "Unlisted",
  },
];
let StyleModel = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
let StyleBox = styled(Container)(({ theme }) => ({
  backgroundColor: "white",
  height: 500,
  width: 450,
  borderRadius: 3,
  paddingTop: 10,
  [theme.breakpoints.down("md")]: {
    height: 400,
    width: 400,
    overflowX: "scroll",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
    width: "100vw",
  },
}));
let StyleBox1 = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(1),
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(2),
  },
}));
let StyleControl = styled(FormControlLabel)(({ theme }) => ({
  marginBottom: -10,
  fontSize: 13,
}));
let StyleToolTip = styled(Tooltip)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: 45,
    width: 45,
  },
}));
const Add = () => {
  let [open, SetOpen] = useState(false);
  let [openAlert, SetOpenAlert] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    SetOpenAlert(false);
  };
  const [currency, setCurrency] = React.useState("Public");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box>
      <StyleToolTip
        title="Add"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "45%", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={(e) => SetOpen(true)}>
          <AddIcon sx={{ fontSize: 30 }} />
        </Fab>
      </StyleToolTip>
      <StyleModel
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyleBox>
          <Typography
            variant="h6"
            sx={{ fontSize: 18 }}
            color="gray"
            letterSpacing="0.5px"
          >
            Message Box
          </Typography>
          <StyleBox1>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              fullWidth
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
            />
          </StyleBox1>
          <StyleBox1>
            <TextField
              id="outlined-textarea"
              label="Description"
              placeholder="Tell Your Story..."
              multiline
              fullWidth
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
            />
          </StyleBox1>
          <StyleBox1>
            <TextField
              id="filled-select-currency"
              select
              label="Visibility"
              value={currency}
              onChange={handleChange}
              helperText="Please select your choice"
              variant="filled"
              inputProps={{ style: { fontSize: 14 } }}
              InputLabelProps={{ style: { fontSize: 14 } }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            {/*  */}
          </StyleBox1>
          <StyleBox1>
            <FormControl>
              <FormLabel id="demo-customized-radios">
                Who can comment?
              </FormLabel>
              <RadioGroup
                defaultValue="EveryBody"
                aria-labelledby="demo-customized-radios"
                name="customized-radios"
              >
                <StyleControl
                  value="EveryBody"
                  control={<Radio size="small" />}
                  label={
                    <Typography variant="p" sx={{ fontSize: 14 }}>
                      EveryBody
                    </Typography>
                  }
                />
                <StyleControl
                  value="My Friends"
                  control={<Radio size="small" />}
                  label={
                    <Typography variant="p" sx={{ fontSize: 14 }}>
                      My Friends
                    </Typography>
                  }
                />
                <StyleControl
                  value="No Body"
                  control={<Radio size="small" />}
                  label={
                    <Typography variant="p" sx={{ fontSize: 14 }}>
                      No Body
                    </Typography>
                  }
                />
                <StyleControl
                  value="custom"
                  disabled
                  control={<Radio size="small" />}
                  label={
                    <Typography variant="p" sx={{ fontSize: 14 }}>
                      Custom(Premium)
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>
          </StyleBox1>
          <StyleBox1>
            <Button
              variant="outlined"
              color="primary"
              sx={{ mr: 2, fontSize: 13 }}
              onClick={() => SetOpenAlert(true)}
            >
              Create
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ fontSize: 13 }}
              onClick={(e) => SetOpen(false)}
            >
              Cancel
            </Button>
          </StyleBox1>
        </StyleBox>
      </StyleModel>
      <Snackbar open={openAlert} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Add;
