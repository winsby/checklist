import React, { useState } from 'react'
import moment from 'moment'

const Header = () => {
  const [title, setTitle] = useState('My Checklist')

  return (
    <div className="checklist-header">
      <input
        className="checklist-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={40}
      />
      <div className="checklist-date">{moment().format('MMM Do, YYYY')}</div>
    </div>
  )
}

export default Header
