import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import assetBg from "../../../assets/asset.png";
Banner.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

function Banner(props) {
  const { width, height } = props;
  return (
    <Avatar
      variant="rounded"
      sx={{ width: width, height: height }}
      src={assetBg}
    ></Avatar>
  );
}

export default Banner;
