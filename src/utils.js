import * as XLSX from 'xlsx';
import { toPng } from 'html-to-image';
import { useEffect } from 'react';

export const downloadExcel = (data, filename) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${filename}.xlsx`);
};

export const downloadCSV = (data, filename) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, `${filename}.csv`, { bookType: 'csv' });
};

export const downloadPNG = (ref, filename) => { 
  let hideElement = document.getElementById("ico-download");
  hideElement.style.visibility='hidden';
  toPng(ref.current, {
    cacheBust: false,
    backgroundColor: 'white'
  })
  .then((dataUrl) => {
    const link = document.createElement("a");
    link.download = `${filename}.png`;
    link.href = dataUrl;
    link.click();
    hideElement.style.visibility='visible';
  })
  .catch((err) => {
    console.log(err);
  });
}

// DATA CONVERSION FOR CHARTJS - Line Chart
export const transformDataLineChart = (data, elementCode) => { 

  const yearsSet = new Set();

  data.forEach(item => yearsSet.add(item.Year));
  const labels = Array.from(yearsSet).sort();

  // group data by area and year
  const areaData = {};
  let info = null;

  data.forEach(item => {
    if (!areaData[item.Area]) {
      areaData[item.Area] = { label: item.Area, data: [] };
    }
    areaData[item.Area].data.push({ year: item.Year, value: item.Value });

    if (data.length > 0) {
      const { Area, Year, Value, ...otherInfo } = data[0];
      info = otherInfo
    }
  });
  

  // colors array
  const backgroundColors = ['#478ed5', '#f28e2a', '#f28e2a', '#e1575a']; // TODO the second and the third colors are repeated in order to show 'world' colour

  const datasets = [];
  let worldDataset = null;

  const areaValues = Object.values(areaData);

  areaValues.forEach((area, index) => {
    // fill data array with null values for each year
    const data = labels.map(label => {
      const dataPoint = area.data.find(d => d.year === label);
      return dataPoint ? dataPoint.value : undefined;
    });
       
    const dataset = {
      label: area.label,
      data: data,
      borderColor: backgroundColors[index % backgroundColors.length],
      backgroundColor: backgroundColors[index % backgroundColors.length],
    };
    
    if (area.label === 'World') {
      worldDataset = {
        ...dataset,
        borderColor: '#58a14e',
        backgroundColor: '#58a14e',
      };
    } else {
      datasets.push(dataset);
    }
  });

  if (worldDataset) {
    datasets.push(worldDataset); // add the 'World' dataset at the end
  }


  return { labels, datasets, info };
};

// DATA CONVERSION FOR CHARTJS - StackedBars
export const transformDataStackedBar = (data, elementCode) => { 

  const yearsSet = new Set();

  const filteredData = data.filter(item => item['Element Code'] === elementCode);
  
  filteredData.forEach(item => yearsSet.add(item.Year));

  const labels = Array.from(yearsSet).sort();

  let info = null;

  // group data by item and year
  const itemData = {};

  filteredData.forEach(item => {
  // check if the Domain Code is "SUA"
  if (item["Domain Code"] === "SUA") {

    if (!itemData[item.Indicator]) {
      itemData[item.Indicator] = { label: item.Indicator, data: [] };
    }
    itemData[item.Indicator].data.push({ year: item.Year, value: item.Value });
  } else {
    if (!itemData[item.Item]) {
      itemData[item.Item] = { label: item.Item, data: [] };
    }
    itemData[item.Item].data.push({ year: item.Year, value: item.Value });
  }
  });
  
  if (filteredData.length > 0) {
    const { Area, Year, Value, ...otherInfo } = filteredData[0];
    info = otherInfo;
  }

  // colors array
  const backgroundColors = ['#478ed5', '#f28e2a', '#e1575a', '#e1575a'];

  // create datasets in the desired format
  const datasets = [];

  const itemValues = Object.values(itemData);

  itemValues.forEach((item, index) => {
    const data = labels.map(label => {
      const dataPoint = item.data.find(d => d.year === label);
      return dataPoint ? dataPoint.value : null;
    });

    const dataset = {
      label: item.label,
      data: data,
      borderColor: backgroundColors[index % backgroundColors.length],
      backgroundColor: backgroundColors[index % backgroundColors.length],
      stack: 'Stack 0',
    };
    
    datasets.push(dataset);
  });



  return { labels, datasets, info };
};

// DATA CONVERSION FOR CHARTJS - Multiple Axis charts
export const transformDataMultipleAxis = (data, elementCode) => {
    const yearsSet = new Set();
    const areaColor = '#478ed569';
    const lineColor = '#f28e2a';

    let info = null;

    // Get unique years for labels
    data.forEach(item => yearsSet.add(item.Year));
    const labels = Array.from(yearsSet).sort();

    // create datasets based on the specified element codes
    const datasets = elementCode.map((code, index) => {
        const filteredData = data.filter(item => item['Element Code'] === code);

        // capture info from the first item
        if (!info && filteredData.length > 0) {
            const { Area, Year, Value, ...otherInfo } = filteredData[0];
            info = otherInfo;
        }

        const dataPoints = labels.map(label => {
            const dataItem = filteredData.find(item => item.Year === label);
            return dataItem ? parseFloat(dataItem.Value) : null;
        });

        const datasetLabel = filteredData.length > 0 ? filteredData[0].Element : code;
        const unit = filteredData.length > 0 ? filteredData[0].Unit : '';
        const flagDescription = filteredData.length > 0 ? filteredData[0]['Flag Description'] : '';
      
        // determine dataset properties based on Unit
        const isPercentage = filteredData.length > 0 && filteredData[0].Unit === '%';
        const yAxisID = isPercentage ? 'y-axis-2' : 'y-axis-1';
        const borderColor = isPercentage ? lineColor : '#1d95e8';
        const backgroundColor = isPercentage ? lineColor : areaColor;
        const fill = !isPercentage; 
        const order = !isPercentage ? 2 : 1; // ensure percentage is on top

        return {
            label: datasetLabel,
            yAxisID: yAxisID,
            data: dataPoints,
            borderColor: borderColor,
            backgroundColor: backgroundColor,
            fill: fill,
            order: order,
            unit: unit,
            flagDescription: flagDescription
        };
    });

    return { labels, datasets, info };
};



// Set metadata gropus
export const accumulateMetadata = (data) => {
  const groupedMetadata = data.reduce((acc, item) => {
    const group = item.metadata_group_label;

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group].push(item);
    return acc;
  }, {});



  return groupedMetadata;  
};

export const yearsRange = () => { 
  const currentYear = (new Date().getFullYear() - 2);
  // get 15 years before today's date
  const yearsArray = Array.from({ length: 15 }, (_, i) => currentYear - i).reverse();

  return yearsArray;
}


// find the 'year' parameter in the query string
export const getYearRange = (url) => {
  const yearMatch = url.match(/year=([^&]*)/);

  if (yearMatch && yearMatch[1]) {
    const yearValues = yearMatch[1].split(',');
    return yearValues;
  }

  return null;
}



// intersectionObservers
export const useIntersectionObservers = (ref, setIsVisible) => {
  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );


    if (ref.current) {
      visibilityObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        visibilityObserver.unobserve(ref.current);
      }
    };
  }, [ref]);
};
