import { useContext, useEffect, useRef, useState } from "react";
import LoadProgress from "./Loading";
import NoData from "./ErrorMessage";
import { Box, Tabs, Tab, AppBar} from "@mui/material";
import MetaData from "./Metadata";
import DataTable from "./DataTable";
import { FiltersContext } from "../store/filters-options-context";
import BarChartIcon from '@mui/icons-material/BarChart';
import TableViewIcon from '@mui/icons-material/TableView';
import { fetchData, fetchSource, fetchDescr } from '../data/https';
import { useIntersectionObservers } from "../utils";
import DownloadButtons from "./Downloads";
import styled from '@emotion/styled';
import ItemTitle from "./ItemTitle";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    height: '5px'
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#1976d2',
  },
});

export default function LazyLoadItem({ url, info, ChartComponent, title, itemId, elementCode }) { 
  const { setActiveMenu } = useContext(FiltersContext); 

  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [description, setDescription] = useState(null);
  const [dataSource, setDataSource] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [error, setError] = useState(null);
  const [fetchComplete, setFetchComplete] = useState(false);
  const ref = useRef();
  const refDownload = useRef();
  const [tab, setTab] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
        style={{ flex: '1 1 0', overflow: 'auto' }}
      >
        {value === index && <Box sx={{ p: 3}}>{children}</Box>}
      </div>
    );
  }
  
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };
  
  useIntersectionObservers(ref, setIsVisible);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      setFetchComplete(false);
      try {
        const fetchDataUrl = `https://faostatservices.fao.org/api/v1/en/data/${url}&show_codes=true&show_unit=true&show_flags=true&show_notes=true&null_values=false&page_number=1&page_size=1000&output_type=objects`;
        const metadataUrl = `https://faostatservices.fao.org/api/v1/en/definitions/domain/${info.domainCode}/${info.domainCode === 'SUA' ? 'foodgroup' : 'item'}${info.domainCode === 'SDGB' ? 'sSDG' : ''}`;
        const sourceUrl = `https://faostatservices.fao.org/api/v1/en/metadata/${info.domainCode}?datasource=PRODUCTION_AWS`
        
        const [fetchedData, metadataResponse, fetchedSource] = await Promise.all([
          fetchData(fetchDataUrl, info),
          fetchDescr(metadataUrl, itemId),
          fetchSource(sourceUrl)
        ]);

        setDataSource(fetchedSource)
        setData(fetchedData.transformed);
        setOriginalData(fetchedData.originalData);
        setDescription(metadataResponse);


      } catch (error) {
        console.log(error)
        setError(error.message || 'Unknown error occurred');
      } finally {
        setIsLoading(false);
        setFetchComplete(true);
      }
    };

    if (isVisible) {
      loadData();
    }
  }, [isVisible, url, info, itemId]);
  
  const getClassName = (active) => active ? 'active-item' : '';


  return (
    <div ref={ref} className={`single-item ${getClassName(active)}`} data-title={title} id={itemId}>
      {isLoading ? (
      <LoadProgress isFetching={isLoading} />
      ) : error ? (
      <NoData text={error.message} />
      ) : fetchComplete && (!data || (data.datasets && data.datasets.length === 0)) ? (
        <>
          <ItemTitle info={info} title={title} />
          <NoData text="No results for this country in this range of dates." />
        </>
      ) : (     
            <Box>   
         {data && data.datasets && data.datasets.length > 0 ? (
        <>
        <div className="item-title">
          <ItemTitle info={info} title={title} />
        </div>  
        <Box display='flex' justifyContent='space-between'>
           <Box className='tabs-container'>   
            <AppBar position="relative" color="default" elevation={0} className="app-bar" sx={{ bgcolor: "white" }} >
              <StyledTabs
                value={tab}
                onChange={handleChangeTab}
                aria-label="icon position tabs example"
              > 
                <Tab icon={<BarChartIcon />} iconPosition="end" label="Chart" />
                <Tab icon={<TableViewIcon />} iconPosition="end" label="Data Table" />
              </StyledTabs>     
              <DownloadButtons data={data} originalData={originalData} ref={refDownload} />         
            </AppBar>
            <Box display='flex' ref={refDownload}>
              <TabPanel value={tab} index={0} >
              <Box>
                <ChartComponent data={data} />
              </Box>
              </TabPanel>
              <TabPanel value={tab} index={1} >
              <Box>
                  <DataTable data={data} />   
              </Box>                 
              </TabPanel>  
            </Box>  
           </Box>           
            <MetaData descr={description} dataSource={dataSource} />
        </Box>    
        </>
        ) : null}
      </Box>
    )}
    </div>
  )
}

