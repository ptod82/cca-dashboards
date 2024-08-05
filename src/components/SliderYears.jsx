import { useState } from "react";
import { Slider, Button, Box } from "@mui/material";
import { styled } from '@mui/system';

const CustomSlider = styled(Slider)({
  '& .MuiSlider-markLabel': {
    fontSize: '13px',
    top: '26px'
  },
});


export default function SliderRange({ params, setParams, yearRange, yearArray }) { 

  const [value, setValue] = useState([yearRange.length - 10, yearRange.length- 1]);
  const [disabled, setIsDisabled] = useState(true);

  let marks = yearRange.map((year, i) => ({
    value: i,
    label: year,
  }));

  const minDistance = 1;
  const maxDistance = 100;

  const handleChange = (event, newValue, activeThumb) => {

    if (!Array.isArray(newValue)) {
      return;
    }

    const distance = newValue[1] - newValue[0];

    // Adjust the distance if it exceeds the allowed range
    if (distance < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], newValue[1] - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], newValue[0] + minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else if (distance > maxDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], newValue[1] - maxDistance);
        setValue([clamped, clamped + maxDistance]);
      } else {
        const clamped = Math.max(newValue[1], newValue[0] + maxDistance);
        setValue([clamped - maxDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }

    setIsDisabled(false); 

  };

  const handleFilter = () => {
  
    const filteredYears = yearRange.filter((year, index) => index >= value[0] && index <= value[1]);

    setParams(prevParams => {
     const newParams = {
       ...prevParams,
      year: [...filteredYears]
      };
      
      return newParams;
    });

    setIsDisabled(true); 
  };
  


  return (
    <Box display='flex' width='100%' justifyContent='space-between' alignItems='center'>
      <CustomSlider
        aria-labelledby="track-inverted-range-slider"
        max={marks.length -1}
        step={1}
        marks={marks}
        onChange={handleChange}
        disableSwap
        value={value}
        size="small"
        sx={{flex: 1, marginRight: '38px'}}
      />
      <Button size="small" variant="contained" disabled={disabled} onClick={() => handleFilter()}>Apply filter</Button>
    </Box>
  )
}