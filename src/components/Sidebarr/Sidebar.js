import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className='sidebar'>
          <div className='part1'>
            <ul>
              <li>Dashboard</li>
              <li>My inventory</li>
              <li>customer insights</li>
              <li>Sales insights</li>
            </ul>
          </div>
          <div className='part2'>
            <ul>
              <li>Profile</li>
              <li>Settings</li>
              <li>Need help?</li>
              <li>Sign out</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
