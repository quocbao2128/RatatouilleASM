import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

TitleAuth.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

function TitleAuth(props) {
  const { title, subtitle } = props;
  return (
    <Box>
      <Typography marginBottom={"1vh"} gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography
        fontSize={"1rem"}
        marginBottom={"1vh"}
        variant="caption"
        display="block"
        gutterBottom
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default TitleAuth;
