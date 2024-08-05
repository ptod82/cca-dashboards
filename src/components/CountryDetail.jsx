import { useContext } from "react";
import LineChartJS from "./LineChartJs";
import BarChartStacked from "./StackeBarChart";
import { Box} from "@mui/material";
import { useParams } from 'react-router-dom';
import Sidebar from "./Sidebar";
import { FiltersContext } from "../store/filters-options-context";
import LazyLoadItem from "./LazyLoadElement";
import MultipleAxis from "./MultipleAxisChart";
import HeaderFixed from "./FixedHeader";


export default function Detail() {
   
  const { params, setParams, itemsList, valueSelected, yearRange } = useContext(FiltersContext);
  let { section, country, countryId } = useParams();
  const firstAreaValue = countryId;
  const baseItemUrl = new URLSearchParams(params);
  const groupedItems = {};

  itemsList.forEach(indicator => {
    const category = indicator.label;
    if (!groupedItems[category]) {
      groupedItems[category] = [];
    }
    indicator.items.forEach(item => {
      let queryParams = new URLSearchParams();
      queryParams.append('elementCode', item.elementCode);
      if (item.domainCode === 'SUA') {
        queryParams.append('indicator', item.id);
      } else { 
        queryParams.append('item', item.id);
      }
      queryParams.append('foodgroup', item.foodGroup);
      const domainCode = item.domainCode;
      
      const fullUrl = `${baseItemUrl.toString()}&${queryParams.toString()}`.replace(`domainCode=${baseItemUrl.get('domainCode')}`, `${domainCode}`).replace('&', '?');
      
      // Push an object containing 'query' and 'info' keys for each item
      groupedItems[category].push({
        query: fullUrl,
        info: item,
        title: item.label,
        category: category
      });
    });
  });

  return (
    <Box display='flex' flexDirection='row' className='container'>
        <Sidebar section={section} area={firstAreaValue} />
        <Box height="fit-content" display="flex" flexDirection="column" sx={{ marginLeft: '2vw', flex: '1 1 0', marginRight: '1.5vw' }}>
        <HeaderFixed country={valueSelected.area} params={params} setParams={setParams} yearRange={yearRange} />
        <div>
          {Object.keys(groupedItems).map(category => (
            <div key={category}> 
              <span className="category">{category}</span> 
              {groupedItems[category].map((item, index) => {
                const ChartComponent = item.info.chartType === 'line' ? LineChartJS 
                                    : item.info.chartType === 'multipleAxis' ? MultipleAxis 
                                    : BarChartStacked; 
                return (
                  <LazyLoadItem
                    key={index}
                    url={item.query}
                    info={item.info}
                    ChartComponent={ChartComponent}
                    title={item.title}
                    itemId={item.info.id}
                  />
                );
              })}
            </div>
          ))}
         </div>  
      </Box> 
    </Box>
    
  )
}


