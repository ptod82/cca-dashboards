import ComboFilters from "./ItemsFilters";
import { useContext } from "react";
import { Box} from "@mui/material";
import { FiltersContext } from '../store/filters-options-context';
import { Link } from "react-router-dom";
import LinksPopover from "./UsefulLinks";
import imgSdg from '../assets/sdg-color.png'

export default function Sidebar({ section, area, title, url }) { 
  
  const { selectOptions, handleChange, itemsList, valueSelected } = useContext(FiltersContext);
  const renderedLabels = new Set();

  const handleClick = (id, label) => {
    const element = document.getElementById(id);
    const headerHeight = document.getElementById('fixed-header').offsetHeight + 30; 

    element.style.scrollMarginTop = `${headerHeight}px`;
    
    element.scrollIntoView({ behavior: 'smooth' });

  };

  const getUniqueItems = (items) => {
    const renderedLabels = new Set();
    return items.filter(item => {
      if (renderedLabels.has(item.label)) {
        return false;
      }
      renderedLabels.add(item.label);
      return true;
    });
  };


  return (
    <aside>
      <Box sx={{pr: '1vw', pl: '1vw', pt: '1vw', pb: '0.5vw', boxShadow: '0 6px 4px -2px rgba(0, 0, 0, 0.1)'}}>
        <ComboFilters
          selectOptions={selectOptions['area']}
          selectLabel='Filter country...'
          selectId='area'
          onChange={handleChange}
          urlArea={area}
        />
        <ComboFilters
          selectOptions={selectOptions['domainCode']}
          selectLabel='Filter CCA domains...'
          selectId='domainCode'
          onChange={handleChange}
          urlDomain={section}
        />
      </Box>
      <Box sx={{overflowY: 'auto'}}>
        <ul className="sidebar-list">
          {itemsList.map((indicator) => {
            const uniqueItems = getUniqueItems(indicator.items);

            return (
              <li key={indicator.id}>
                {indicator.label}
                <ul>
                  {uniqueItems.map((item) => (
                    <li key={`${indicator.id}-${item.id}`} className={`${Number(item.flagSDG) === 1 ? 'is-sdg' : ''}`}>
                      <Link onClick={() => handleClick(item.id, item.label)}>
                        {Number(item.flagSDG) === 1 ? 
                          <img width='12px' src={imgSdg} alt="SDG indicator" />
                         :
                          null
                        }
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Box>         
      <LinksPopover usefulLinks={valueSelected.area && valueSelected.area.usefulLinks} />
    </aside>
  );
}