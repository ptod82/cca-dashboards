import { Box } from "@mui/material";
import NoData from "./ErrorMessage";


export default function NoMatch() { 
  return (
    <>
        <Box width="100%" height="fit-content" display="flex" flexDirection="column" sx={{ margin: '0 40px 40px 40px', paddingBottom: '60px', display: 'inline-block' }}>
        <Box display='flex' width='100%' flexDirection='column' alignItems='center'>
          <span style={{ fontSize: '28px', margin: '20px 0 0px 0' }}>Error 404</span><br/> 
          <NoData redirect="true" text="The page you were looking for doesn't exists." />  
        </Box>
        </Box>
    </>
  )
}