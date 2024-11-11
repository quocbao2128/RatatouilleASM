import { MoreVert } from "@mui/icons-material";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import NumbersIcon from "@mui/icons-material/Numbers";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
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
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import PropTypes from "prop-types";
import { useState } from "react";
import AdjustAssetForm from "../../forms/AdjustAssetForm";
import { existsSync } from "fs";
ActionAreaCardAssets.propTypes = {
  assets: PropTypes.arrayOf(Object), //no need to pass param, call API
};

export default function ActionAreaCardAssets(props) {
  const { assets } = props; //call API and useEffect

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
    return assets.slice(startIndex, endIndex);
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
                  image={() => {
                    return existsSync("src/asset/" + item.name + ".png")
                      ? "src/asset/" + item.name + ".png"
                      : "src/assets/furniture.png";
                  }}
                  alt="green iguana"
                  sx={{ objectFit: "contain" }}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <NumbersIcon sx={{ fontSize: "0.75rem" }} />
                    Id: {item.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <ShoppingCartSharpIcon sx={{ fontSize: "0.75rem" }} />
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <MonetizationOnSharpIcon sx={{ fontSize: "0.75rem" }} />
                    Price: {item.pricePerUnit} VND
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
          count={Math.ceil(assets.length / itemsPerPage)} // Total number of pages
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
          <AdjustAssetForm item={curItem} />
        </Box>
      </Dialog>
    </Box>
  );
}
