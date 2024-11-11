import { Backdrop, Box, Container, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImg from "../../assets/bg.jpg";
import Banner from "../../components/commons/Banner";
import StyledLoading from "../../components/commons/StyledLoading";
import StyledSnackbar from "../../components/commons/StyledSnackbar";
import TitleAuth from "../../components/commons/TitleAuth";
import SigninForm from "../../components/forms/SigninForm";

export default function Login() {
  const navigate = useNavigate();
  const [notify, setNotify] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignin = (value) => {
    setLoading(true);

    setTimeout(() => {
      if (value.username == "demo" && value.password == "demo")
        navigate("/ingredients");
      else
        setNotify({
          severity: "error",
          message: "Username or Password is incorrect",
        });

      setLoading(false);
    }, 1000);
  };
  return (
    <Container
      maxWidth={false}
      sx={{
        background: `url(${bgImg})`,
        height: "100vh",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Paper
        sx={{
          p: "1rem 2rem",
          width: { xs: "100%", sm: "80%", lg: "60%" },
          minHeight: "50%",
          borderRadius: "15px",
        }}
      >
        <Box>
          <Stack spacing={2}>
            <StyledLoading open={loading} />

            <Banner width={"5rem"} height={"5rem"} />

            <Stack direction={{ md: "row" }}>
              <Box width={"100%"} mb={2}>
                <TitleAuth title={"Hello"} subtitle={"Sign in to ASM"} />
              </Box>

              <Box width={"100%"}>
                <SigninForm handleSignin={handleSignin} />
              </Box>
            </Stack>
          </Stack>

          <StyledSnackbar notify={notify} />
          <Backdrop open={loading} />
        </Box>
      </Paper>
    </Container>
  );
}
