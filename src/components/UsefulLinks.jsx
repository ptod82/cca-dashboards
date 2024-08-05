
import { Box, Typography, Popover, IconButton} from "@mui/material";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import { useState } from 'react';

export default function LinksPopover({ usefulLinks }) {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 300); 
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    usefulLinks && usefulLinks.length > 0 &&
    <div>
      <Box aria-describedby={id} variant="contained" onClick={handleClick} className='useful-links-btn'>    
       Additional data sources
      <IconButton aria-label="show links" size="small">
        <OpenInNewRoundedIcon/>
      </IconButton>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
        <Typography sx={{ p: 2 }}>
          <ul className="useful-links">
            {usefulLinks.map((item, i) =>
              <li key={i}><a target="_blank" href={item.href} >{item.label}</a></li>
            )}
          </ul>
        </Typography>
      </Popover>
    </div>
  );
}