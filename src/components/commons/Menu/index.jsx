import { Construction, Restaurant } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
Menu.propTypes = {
  closeMenu: PropTypes.func,
};

function Menu(props) {
  const { closeMenu } = props;
  const navigate = useNavigate();
  const path = location.pathname;
  return (
    <Stack pt={"10vh"} height={"100vh"} overflow={"hidden"}>
      <List>
        <ListItem>
          <ListItemButton
            onClick={() => {
              navigate("/ingredients");
              closeMenu && closeMenu();
            }}
            selected={path == "/ingredients"}
          >
            <ListItemIcon>
              <Restaurant />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">INGREDIENT</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton
            onClick={() => {
              navigate("/tools");
              closeMenu && closeMenu();
            }}
            selected={path == "/tools"}
          >
            <ListItemIcon>
              <Construction />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="subtitle2">TOOL</Typography>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
}

export default Menu;
