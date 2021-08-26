import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './Header'
import ListItem from './ListItem'
import './CheckList.scss'

const CheckList = () => {
  const [checkListData, setCheckListData] = useState([0])
  const isMobile = useMediaQuery({
    query: '(max-width: 450px)',
  })

  const deleteListItem = (idx: number) => {
    const changedData = checkListData.filter((item) => {
      return item !== idx
    })
    setCheckListData(changedData)
  }

  console.log('isMobile', isMobile)

  return (
    <div className="checklist-container">
      <div className={`checklist-main ${isMobile && 'mobile'}`}>
        <Header />
        <div
          className="add-btn"
          onClick={() =>
            setCheckListData([
              ...checkListData,
              checkListData.length
                ? checkListData[checkListData.length - 1] + 1
                : 0,
            ])
          }
        >
          Add
        </div>
        <div className={`list ${isMobile && 'mobile'}`}>
          {checkListData.map((number, idx) => (
            <ListItem
              key={number}
              deleteListItem={deleteListItem}
              idx={number}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CheckList
