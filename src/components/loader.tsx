import React from "react";
import { getAxios } from "../api/axios-client";
import useAxiosLoader from "../hooks/useAxiosLoader";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  var axiosInstance = getAxios();

  const [axiosLoading] = useAxiosLoader(axiosInstance);

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={axiosLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default Loader;
