import { MoreVert } from "@mui/icons-material";
import {
  CardActionArea,
  CardHeader,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import { pink, red } from "@mui/material/colors";
import AdjustIngredientForm from "../../forms/AdjustIngredientForm";
import NumbersIcon from "@mui/icons-material/Numbers";

ActionAreaCard.propTypes = {
  ingredients: PropTypes.arrayOf(Object), //no need to pass param, call API
};

export default function ActionAreaCard(props) {
  let { ingredients } = props; //call API and useEffect
  if (ingredients == undefined) ingredients = [];
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [openDetail, setOpenDetail] = useState(false);
  const [curItem, setCurItem] = useState(null);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ingredients.slice(startIndex, endIndex);
  };

  const getDetail = (item) => {
    setCurItem(item);
    setOpenDetail(true);
  };
  const deleteItem = () => {};

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {getPageData().map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.name}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                action={
                  <>
                    <IconButton aria-label="settings" onClick={handleClick}>
                      <MoreVert />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                    >
                      <MenuItem
                        onClick={() => {
                          getDetail(item);
                        }}
                      >
                        <InfoSharpIcon color="primary" />
                        Details
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          deleteItem();
                        }}
                      >
                        <DeleteForeverSharpIcon sx={{ color: red[500] }} />
                        Delete
                      </MenuItem>
                    </Menu>
                  </>
                }
                title={item.name.toUpperCase()}
              />

              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="src\assets\p1.jpg" //item.pic instead
                  alt="green iguana"
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <NumbersIcon sx={{ fontSize: "0.75rem" }} />
                    Id: {item.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity} kg
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Import date: {item.imp_date}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Expiry date: {item.exp_date}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {item.price} VND
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} alignItems={"end"} mt={2}>
        <Pagination
          color="primary"
          count={Math.ceil(ingredients.length / itemsPerPage)} // Total number of pages
          page={currentPage}
          onChange={handlePageChange}
          defaultPage={1}
          boundaryCount={2}
          showFirstButton
          showLastButton
        />
      </Stack>
      <Dialog onClose={() => setOpenDetail(false)} open={openDetail}>
        <Box margin={"5%"}>
          <AdjustIngredientForm item={curItem} />
        </Box>
      </Dialog>
    </Box>
  );
}
