import { useState } from 'react'
import SearchLayout from '../../components/layouts/SearchLayout'
import { Box, Tab, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { ImageOutlined, SearchOutlined } from '@mui/icons-material';
import { getResults } from '../../services/google.service';
import { mockDataResults, mockDataResultsImages, mockDataNotFound } from '../../mockDataSearchs';
import SearchInformation from '../../components/searchInformation/SearchInformation';
import ListResults from '../../components/listResults/ListResults';
import Pagination from '../../components/pagination/Pagination';
import { useRouter } from 'next/router';
import ListResutImages from '../../components/listResultImages/ListResutImages';
import { redirect } from 'next/dist/server/api-utils';


const SearchPage = ({ results }) => {
  const router = useRouter()
  const { q, searchType = '' } = router.query
  const [value, setValue] = useState(searchType === 'image' ? '2' : '1')
  const { searchTime = 0, totalResults = 0 } = results.searchInformation
  const { items = [] } = results
  

  const handleChange = (event, newValue) => {
    event.preventDefault()
    const type = newValue === '2' ? 'image' : ''
    window.location.href = `/search?q=${q}&start=1&searchType=${type}`  
  };

 
  return (
    <SearchLayout>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ paddingLeft: 30  }}>
              <Tab icon={<SearchOutlined />} iconPosition="start" label='All' value="1" />
              <Tab icon={<ImageOutlined />} iconPosition="start" label='Images' value="2" />
            </TabList>
          </Box>
          {items.length > 0 && 
            <Box sx={{ paddingLeft: 30}}>
              {value === '1' &&  (
                <TabPanel value="1" sx={{paddingLeft: 0}} >
                  <SearchInformation
                    searchTime={searchTime}
                    totalResults={totalResults}
                  />
                  <ListResults items={items} />
                  <Pagination />
                </TabPanel>)
              }
              {value === '2' && items.length > 0 && (
                <TabPanel value="2">
                  <ListResutImages items={items} />
                  <Pagination />
                </TabPanel>
              )}
          </Box>}
          {items.length === 0 && 
            <Box sx={{ paddingLeft: 30, paddingTop: 2}}>
              <Typography variant='subtitle'>
                Don't Results Found
              </Typography>
            </Box>
          }
        </TabContext>
      </Box>
    </SearchLayout>
  )
}


export const getServerSideProps = async (ctx) => {
  const mockData = false
  const { q = '', start = 1, searchType = '' } = ctx.query
  
  try {
    const data = mockData ? mockDataResults : await getResults({ q, start, searchType })
  } catch {
    return {
      redirect: {
        destination: '/'
      }
    }
  }
  
  return {
    props: {
      results: data
    }
  }
}

export default SearchPage