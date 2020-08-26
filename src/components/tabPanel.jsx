import React from 'react';

const TabPanel = ({ content, active }) => {
  return (
    <div className={`chewy-tab-panel ${active ? 'chewy-tab-panel--active' : ''}`}>
      {content}
    </div>
  )
}

export default TabPanel