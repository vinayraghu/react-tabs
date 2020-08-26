import React from 'react';
import './tabStyles.scss';
const TabTitle = ({ title, disabled }) => {
  return (
    <div className={`chewy-tab-title ${disabled ? 'chewy-tab-title--disabled' : ''}`}>
      { title }
    </div>
  )
}

export default TabTitle