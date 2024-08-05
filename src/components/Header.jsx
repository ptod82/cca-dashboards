import { Box, FormControl, InputLabel, Select, MenuItem, Snackbar, Button, Alert, IconButton } from '@mui/material';
import { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import LinkIcon from '@mui/icons-material/Link';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export default function Header() { 
  const [language, setLanguage] = useState('EN');
  const [copy, setCopy] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = copy;

  const handleChange = (event) => {
    setLanguage(event.target.value);
  }; 

  const handleClick = (newState) => () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopy({ ...newState, open: true });
  };

  const handleClose = () => {
    setCopy({ ...copy, open: false });
  };

  return (
    <header className='header'>
      <img height='40px' src={require('../assets/logo-en.svg').default} alt='FAO logo' />
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box>
          <Button endIcon={<ShareIcon />} display='flex' alignItems='center' variant='text' sx={{ml:3, mr: 3, textTransform: 'capitalize', fontSize: '13px', color: '#333', fontFamily: ["Roboto", "Helvetica"].join(",")}}
            onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
          >
            Share
          </Button>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            autoHideDuration={3000}
            key={vertical + horizontal}
          >
            <Alert sx={{display: 'flex', alignItems: 'end', border: '1px solid green'}} severity="success" icon={<LinkIcon fontSize="inherit" />}>
              Link copied to clipboard!
            </Alert>
          </Snackbar>
        </Box>
        <FormControl variant="standard">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            onChange={handleChange}
            disableUnderline='true'
            sx={{fontSize: '13px', lineHeight: '22px'}}
          >
            <MenuItem
              sx={{ fontSize: '13px' }}
              value='EN'
            >
              English
            </MenuItem>
            <MenuItem
              sx={{ fontSize: '13px' }}
              value='ES'
            >
              Español
            </MenuItem>
            <MenuItem
              sx={{ fontSize: '13px' }}
              value='ZH'
            >
              中文
            </MenuItem>
          </Select>
        </FormControl>
        <IconButton  component={Link} to="/" aria-label="homepage" size="medium" sx={{ ml: 1}}>
           <HomeIcon fontSize="large" style={{ color: '#666' }}  />
        </IconButton>
      </Box>
    </header>
  )
}