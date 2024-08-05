import { Box} from "@mui/material";


export default function MetaData({ descr, dataSource }) {

  const dataSourceText = dataSource["Data source"];

  return (
    <Box className='metadata' sx={{ py: 1.5, px: 3}} >
      <>
        <span className="meta-title">Description</span>
        <Box>
          <Box sx={{ pb: '10px' }}>
            {descr && descr.length > 0 ? (
              <Box dangerouslySetInnerHTML={{ __html: descr }}></Box>
            ) : (
              <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Box>
            )}
          </Box>
        </Box>
      </>
      {dataSourceText && (
        <>
          <span className="meta-title">{dataSourceText[0].metadata_group_label}</span>
          {dataSourceText.map((item, index) => {
              if (!item || !item.metadata_text || index > 0) {
                return null;
              }
            const cleanHtml = `FAOSTAT: ` + item.metadata_text.replace(/\\"/g, '"');
            return (
              <Box key={index}>
                <Box sx={{ pb: '10px' }}>
                  <Box style={{ overflowWrap: 'break-word'}} flexShrink="0" dangerouslySetInnerHTML={{ __html: cleanHtml.split('FAOSTAT: ').join('FAOSTAT: <br />') }}></Box>
                </Box>
              </Box>
            );
          })}
        </> 
      )}
    
    </Box>
  )
}