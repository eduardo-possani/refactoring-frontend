import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import * as React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'

export default function App() {
  const [value, setValue] = React.useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <BrowserRouter>
      <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 2,
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <TabList sx={{}} onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Home" value="1" />
                <Tab label="Login" value="2" />
                <Tab label="Redister" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Home />
            </TabPanel>
            <TabPanel value="2">
              <Login />
            </TabPanel>
            <TabPanel value="3">
              <Register />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </BrowserRouter>
  )
}
