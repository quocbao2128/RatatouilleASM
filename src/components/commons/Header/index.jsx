import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import { AccountCircle, DragHandle, Logout } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
Header.propTypes = {
  openMenu: PropTypes.func,
};

function Header(props) {
  const { openMenu } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar
        sx={{
          // bgcolor: "#fff",
          borderBottom: "solid 1px #e5e5e5",
          top: 0,
          right: 0,
          left: "auto",
          height: "8vh",
          zIndex: 10,
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            sx={{ mr: 2, display: { lg: "none" } }}
            onClick={openMenu}
          >
            <DragHandle sx={{ color: "#f4f4f4" }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Asset Management
          </Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: "deeppink" }}>
                M
              </Avatar>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          My account
        </MenuItem>
        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/");
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
export default Header;
