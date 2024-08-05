import { Box } from "@mui/material";
import SliderRange from "./SliderYears";


export default function HeaderFixed({country, params, setParams, yearRange}) { 
  return (
    <Box sx={{boxShadow: 3}} id='fixed-header'>
      <Box display='flex' sx={{marginRight: '5.5vw' }}>
        {country &&
          <Box className='country-label'>
            <Box className="country-box">
              <img
              loading="lazy"
              width="auto"
              srcSet={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
              alt=""
              />
              {country.label}
            </Box>
          </Box>
        }
      </Box>      
      <Box sx={{flex: '1 1 auto'}}>
        <SliderRange params={params} setParams={setParams} yearRange={yearRange}/>
      </Box>
    </Box>
  )
}