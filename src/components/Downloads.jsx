import { Box, Button, IconButton, Popover } from "@mui/material";
import { downloadExcel, downloadCSV, downloadPNG } from "../utils";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { forwardRef, useState } from "react";

const DownloadButtons = forwardRef((props, ref) => {
  const { data, originalData } = props;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'chart' : undefined;

  
  return (
    <>
      <Box className="download-btn">
        <span>DOWNLOAD</span>
        <IconButton id="ico-download" onClick={handleClick} aria-label="download chart data" size="medium">
           <DownloadForOfflineIcon fontSize="large" />
        </IconButton>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
         anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
       <Box display="flex" className='download-area' justifyContent="flex-end" flexDirection='column' flexWrap="wrap" sx={{ p: 2 }}>

            <Button size="small" variant="outlined" onClick={()=>downloadPNG(ref, data.info.Item)}> 
              Download Image
            </Button>
            <Button size="small" variant="outlined" onClick={()=>downloadExcel(originalData, data.info.Item)}> 
              Download Excel
            </Button>
            <Button size="small" variant="outlined" onClick={()=>downloadCSV(originalData, data.info.Item)}> 
              Download CSV
            </Button>
        </Box> 
      </Popover>    
    </>
  )
});
  
export default DownloadButtons;
