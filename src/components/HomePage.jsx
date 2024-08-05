import { useContext, useState, useEffect } from 'react';
import { Box, Typography, Button } from "@mui/material"
import MediaCard from "./Card";
import indicatorsImg from '../assets/indicators.png';
import countryImg from '../assets/countries.jpg';
import { FiltersContext } from '../store/filters-options-context';

export default function HomePage() { 
  const { selectOptions, handleChange, handleRoute, params } = useContext(FiltersContext);
  const [active, setActive] = useState(params.domainCode !== '' && params.area !== '');


  useEffect(() => {
    console.log(active)
    setActive(params.domainCode !== '' && params.area !== '');
  }, [params.domainCode, params.area]);


  return (
    <Box display='flex' width='100%' flexDirection='column' justifyContent='flex-start' alignItems='center' sx={{borderTop: '1px solid #ccc' }}>
      <Typography variant="h3" style={{ marginTop: '80px', color: '#333' }}>
        State of the Agrifood Systems Data Platform
      </Typography>
      <Box display='flex' flexDirection='row' sx={{ m: 8 }}>
        <MediaCard
          display='flex'
          title="CCA domains"
          img={indicatorsImg}
          description="Select one domain and view data for its indicators."
          selectOptions={selectOptions['domainCode']}
          selectLabel='Filter CCA domains...'
          selectId='domainCode'
          onChange={handleChange}
        />
        <MediaCard
          display='flex'
          title="Countries"
          img={countryImg}
          description="Visualize the data of a specific country."
          selectOptions={selectOptions['area']}
          selectLabel='Filter country...'
          selectId='area'
          onChange={handleChange}
        />
      </Box>
      <Button onClick={handleRoute} size='large' disabled={!active} variant="contained">Show Data</Button>  
    </Box>
      
  )
}