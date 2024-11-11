import { Box, Button, Dialog, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosClient from "../../app/axiosClient";
import ActionAreaCardAssets from "../../components/commons/List assets";
import CreateAssetForm from "../../components/forms/CreateAssetFrom";

function Tools(props) {
  const [tools, setTools] = useState([])

  const getTools = async () => {
    const tools = await axiosClient.get('assets');
    setTools(tools.data)
  }
  const handleCreateTool = async (payload) => {
    await axiosClient.post('assets', payload);
    getTools()
    setOpen(false)
  }

  useEffect(() => {
    getTools();
  }, [])


  const [open, setOpen] = useState(false);
  return (
    <>
      <Stack direction={"row"} justifyContent={"end"}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          add
        </Button>
        <Dialog onClose={() => setOpen(false)} open={open}>
          <Box margin={"5%"}>
            <CreateAssetForm handleCreate={handleCreateTool}/>
          </Box>
        </Dialog>
      </Stack>
      <ActionAreaCardAssets assets={tools} />
    </>
  );
}

Tools.propTypes = {};

export default Tools;
