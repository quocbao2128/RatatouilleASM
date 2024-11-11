import { Box, Stack, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import StyledButton from "../../commons/StyledButton";
SigninForm.propTypes = {
  handleSignin: PropTypes.func.isRequired,
};

function SigninForm(props) {
  const { handleSignin } = props;

  const [disabled, setDisabled] = useState(true);
  const handleChange = useCallback(
    () => disabled && setDisabled(false),
    [disabled]
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  return (
    <Box pt={2} pb={2}>
      <form onSubmit={handleSubmit(handleSignin)} onChange={handleChange}>
        <Stack spacing={1}>
          <TextField
            {...register("username", { required: "Required" })}
            error={!!errors.username}
            helperText={errors.username?.message}
            sx={{ height: "9vh" }}
            label={"Username"}
          />
          <TextField
            {...register("password", { required: "Required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
            sx={{ height: "9vh" }}
            label={"Password"}
          />
          <Typography variant="caption" fontStyle={"italic"}>
            Hint:
            <br />
            Username: demo
            <br /> Password: demo
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          mt={2}
          mb={2}
          justifyContent={"end"}
          spacing={3}
        >
          <StyledButton
            type="submit"
            variant="contained"
            sx={{ borderRadius: "25px" }}
            disabled={disabled}
          >
            Sign in
          </StyledButton>
        </Stack>
      </form>
    </Box>
  );
}
export default SigninForm;
