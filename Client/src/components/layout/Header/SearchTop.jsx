import * as React from "react";
import { useDispatch } from "react-redux";

import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import DialogContent from "@mui/material/DialogContent";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Search_movies } from "../../../Redux/actions/SearchAction";
import SearchedResults from "./SearchedResults";

const MyInput = styled("input")(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.primary.light,
  color: "white",
  border: "none",
  "&:focus": {
    outline: "none",
  },
}));

const MyInputDiv = styled("div")(({ theme }) => ({
  padding: "16px 24px",
  display: "flex",
  backgroundColor: theme.palette.primary.light,
  [theme.breakpoints.down("md")]: {
    padding: "4px 6px",
  },
}));

const MyIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.light,
  borderColor: theme.palette.secondary,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: 3,
  padding: 5,
  marginRight: 20,
  [theme.breakpoints.down("sm")]: {
    marginRight: "2px",
  },
}));

const MyDialog = styled(Dialog)(({ theme }) => ({
  color: "inherit",
  "& .MuiDialog-container": {
    alignItems: "flex-start",
  },
  "& .MuiDialog-paper": {
    backgroundColor: theme.palette.primary.light,
    color: "inherit",
    width: "800px",
    maxWidth: "100%",
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiDialog-paper": {
      margin: "0px",
      height: "100vh",
      maxHeight: "100vh",
      borderRadius: "0px",
    },
    "& .MuiDialogContent-root": {
      padding: "4px 6px",
    },
  },
}));

const MYBavkButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

export default function SearchContainer() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const scroll = "paper"
  const [search_value, setsearch_value] = React.useState("");

  const handleClickOpen =async() => {
    await setOpen(true);
    document.getElementById('myinputid').focus()
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClear=async()=>{
    await setsearch_value("")
    document.getElementById('myinputid').focus()
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const change_search_value = (e) => {
    const value = e.target.value;
    setsearch_value(value);
  };

  React.useEffect(() => {
    dispatch(Search_movies(search_value));
  }, [search_value, dispatch]);

  return (
    <div>
      <MyIconButton
        size="large"
        className="Search_Icon"
        sx={{ display: "flex" }}
        onClick={handleClickOpen}
      >
        <SearchIcon />
      </MyIconButton>
      <MyDialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <MyInputDiv>
          <MYBavkButton onClick={handleClose}>
            <ArrowBackIcon style={{ color: "white" }} />
          </MYBavkButton>

          <MyInput
            id='myinputid'
            placeholder="Search..."
            value={search_value}
            onChange={change_search_value}
          />
          <div className="clear" style={{ paddingLeft: "5px" }}>
            <IconButton onClick={handleClear}>
              <ClearIcon style={{ color: "white" }} />
            </IconButton>
          </div>    
        </MyInputDiv>
        <DialogContent dividers={scroll === "paper"}>
          <SearchedResults  handle_close={handleClose}/>
        </DialogContent>
      </MyDialog>
    </div>
  );
}
