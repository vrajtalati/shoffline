import React from 'react'
import "./Dashboard.css"
import Card from '../Cards/Card'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import InsightsIcon from '@mui/icons-material/Insights';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';


const dashboard = () => {
  return (
    <div>
      <div className='parent'>
        <div className='sidebar'>
          <div className='part1'>
            <ul>
              <li><DashboardIcon/> Dashboard</li>
              <li><InventoryIcon/> My inventory</li>
              <li><LeaderboardIcon/> customer insights</li>
              <li><InsightsIcon/> Sales insights</li>
            </ul>
          </div>
           <hr></hr>
          <div className='part2'>
            <ul>
              <li><PersonAddAltIcon/>Profile</li>
              <li><SettingsOutlinedIcon/>Settings</li>
              <li><HelpCenterRoundedIcon/>Need help?</li>
              <li><ExitToAppRoundedIcon/>Sign out</li>
            </ul>
          </div>
        </div>

        <div className='main_page' >
          <div className='upper_part'>
            <Card title="todays deal" description="NA"/>
            <Card  title="todays item" description="NA"/>
            <Card title="Monthly Sale" description="NA" />
            <Card title="Inventory Turn Over"  description="NA" />

          </div>
          <div className='lower_part'>
            <Card backgroundColor="red" title="" />
            <Card title=""/>
            <Card title=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard
