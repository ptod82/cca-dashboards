import { createContext, useState, useEffect, useCallback } from "react";
import { countries, CCAsections } from '../data/mockData';
import { useNavigate } from "react-router-dom";
import { accumulateMetadata, yearsRange } from "../utils";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {

  const navigate = useNavigate();
  const [yearRange, setYearRange] = useState(yearsRange());
  const [yearValue, setYearValue] = useState([yearRange.length - 10, yearRange.length - 1]);
  const filteredYears = yearRange.filter((year, index) => index >= yearValue[0] && index <= yearValue[1]);
  const [itemsList, setItemsList] = useState([]);
  const [selectOptions, setSelectOptions] = useState({
    area: [],
    domainCode: [],
  });
  const [valueSelected, setValueSelected] = useState({
    area: null,
    domainCode: null,
  });

  const [params, setParams] = useState({
    domainCode: '',
    area_cs: 'M49',
    year: [...filteredYears],
    area: '',
  });

  function handleChange(event, value) {
    setParams(prevParams => {
      let newValue;

      if (event.target.name === "area") {
        if (event.target.value) {
          const valueId = Number(event.target.value.id);

          newValue = [valueId, ...event.target.value.compareId];
          setValueSelected(prevValue => ({
            ...prevValue,
            area: event.target.value
          }));
        } else { 
          newValue = prevParams.area;
        }
      } else { 
        if (event.target.value) {
          newValue = event.target.value.indicators[0].items[0].domainCode; // return first element domainCode as default
          
          // set all items for that specific Section
          setItemsList([...event.target.value.indicators])
          setValueSelected(prevValue => ({
            ...prevValue,
            domainCode: event.target.value
          }));
          
                    
          // Update both domainCode and item when changiong the CCA section
          return {
            ...prevParams,
            [event.target.name]: newValue,
          };

        } else { 
          newValue = prevParams.domainCode;
        }
      }

      return {
        ...prevParams,
        [event.target.name]: newValue
      };
    });

  };

  const handleRoute = useCallback(() => { 
    if (valueSelected.domainCode && valueSelected.area) {
      let domainName = valueSelected.domainCode.value.toLowerCase();
      let areaLabel = valueSelected.area.label.toLowerCase();
      let areaId = valueSelected.area.id;
      navigate(`/${domainName}/${areaLabel}/${areaId}`);
    }
  }, [valueSelected]);


  function resetParams() { 
    setParams(prevParams => ({
      ...prevParams,
      domainCode: '',
      area_cs: 'M49',
      year: [...filteredYears],
      area: '',
    }));

    setValueSelected(prevValue => ({
      ...prevValue,
      area: null,
      domainCode: null,
    }));
  }  

  useEffect(() => {
    const areaOptions = countries;
    const sectionOptions = CCAsections;
    setSelectOptions({
      area: areaOptions,
      domainCode: sectionOptions,
    });

  }, [itemsList]);


  return (
    <FiltersContext.Provider value={{ params, setParams, itemsList, valueSelected, resetParams, setItemsList, setValueSelected, selectOptions, handleRoute, handleChange, yearRange }}>
      {children}
    </FiltersContext.Provider>
  );
};