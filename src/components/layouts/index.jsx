import { Box, Container, Drawer, Grid, Stack } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../commons/Footer";
import Header from "../commons/Header";
import Menu from "../commons/Menu";

function Layout() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Stack minHeight={"100vh"}>
      {/* header */}
      <Header openMenu={() => setOpenMenu(!openMenu)} />
      {/* menu */}
      <Grid2 container width={"100vw"}>
        <Grid2 xs={0} lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box
            position={"sticky"}
            // zIndex={20}
            top={0}
            borderRight={"solid 1px #f3f3f3"}
          >
            <Menu />
          </Box>
        </Grid2>
        {/* page */}
        <Grid2 xs={12} lg={9}>
          <Container
            maxWidth={false}
            sx={{
              mt: "8vh",
              p: 2,
              minHeight: "85vh",
            }}
          >
            <Outlet />
          </Container>
          {/* Footer */}
          <Grid2>
            <Container maxWidth="false">
              <Footer />
            </Container>
          </Grid2>
        </Grid2>
      </Grid2>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box width={{ xs: "70vw", sm: "50vw", md: "30vw" }}>
          <Menu closeMenu={() => setOpenMenu(false)} />
        </Box>
      </Drawer>
    </Stack>
  );
}

export default Layout;
