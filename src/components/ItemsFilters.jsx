import { useContext, useEffect } from 'react';
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FiltersContext } from '../store/filters-options-context';


export default function ComboFilters({ selectId, selectLabel, urlDomain, urlArea }) { 
  const { selectOptions, valueSelected, handleChange, setValueSelected } = useContext(FiltersContext);
  const options = selectOptions[selectId].sort((a, b) => (a.label > b.label) ? 1 : -1) || [];

  useEffect(() => {
    if (urlDomain) {
      const matchedOption = options.find(option => option.value.toLowerCase() === urlDomain.toLowerCase());

      if (matchedOption) {
        setValueSelected(prev => ({ ...prev, [selectId]: matchedOption }));
        handleChange({ target: { name: selectId, value: matchedOption } }); 
      }
    } 
  }, [urlDomain, options, setValueSelected, selectId]);

  useEffect(() => { 
    if (urlArea) {
      const matchedOption = options.find(option => option.id === urlArea.toLowerCase());
      
      if (matchedOption) {
        setValueSelected(prev => ({ ...prev, [selectId]: matchedOption }));
        handleChange({ target: { name: selectId, value: matchedOption } }); 
      }
    } 

  }, [urlArea, options, setValueSelected, selectId]);

  return (
    <Autocomplete
      sx={{width: '100%', marginBottom: '15px'}}
      id={selectId}
      options={options}
      autoHighlight
      value={valueSelected ? valueSelected[selectId] : null}
      onChange={(event, value) => { handleChange({ target: { name: selectId, value: value } }) }}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={selectLabel}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
     renderOption={selectId === 'area' ? 
        (props, option) => {
          const { key, ...otherProps } = props;
          return (
            <Box component="li" key={key} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...otherProps}>
              <img
                loading="lazy"
                width="20"
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                alt=""
              />
              {option.label}
            </Box>
          );
        } : 
        null
      }
    />      
  )
 
}