import {accumulateMetadata, transformDataLineChart, transformDataStackedBar, transformDataMultipleAxis } from "../utils";


export const fetchData = async (url, info) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const transformFunction = info.chartType === 'line'
    ? transformDataLineChart
    : info.chartType === 'multipleAxis'
    ? transformDataMultipleAxis
    : transformDataStackedBar;
    
    const transformed = transformFunction(data.data, info.elementCode);

    return { transformed, originalData: data.data };

  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
};


export const fetchDescr = async (url, itemId) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const metadataData = await response.json();

    const itemIdsArray = Array.isArray(itemId) ? itemId : [itemId];

    const descriptions = itemIdsArray.map(id => {
        const item = metadataData.data.find(item => item["Item Code"] === id.toString());
        return item && item.Description !== '' ? item.Description + '<br style="margin-bottom: 5px; content: \'\'; display: block"/>' : null;
    });

    // Map over descriptions and replace text
    const updatedDescriptions = descriptions.map(descr => {
        if (descr) {
            return descr.replace(/\\"/g, '"'); 
        }
        return null;
    });

    const concatDescr = updatedDescriptions.join('');
    return concatDescr;

  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
};


export const fetchSource = async (url) => {
  try {
    const response = await fetch(url);
     if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const resData = await response.json();
    const transformed = accumulateMetadata(resData.data); 
  
    return transformed;

  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
};
