import { Box, LinearProgress } from "@mui/material";
import PropTypes from "prop-types";

StyledLoading.propTypes = {
  open: PropTypes.bool,
  position: PropTypes.string,
};
function StyledLoading(props) {
  const { open, position } = props;
  return (
    <Box
      position={position}
      top={0}
      left={0}
      width={"100%"}
      height={"3px"}
      zIndex={40}
    >
      {open && <LinearProgress sx={{ height: "3px" }} />}
    </Box>
  );
}

export default StyledLoading;
