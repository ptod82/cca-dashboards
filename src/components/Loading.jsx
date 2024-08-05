import { Backdrop, CircularProgress } from "@mui/material";

export default function LoadProgress({isFetching}) { 
  return (
    <Backdrop
      sx={{ backgroundColor: 'rgba(241, 241, 241, 0.25)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isFetching}
      >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}