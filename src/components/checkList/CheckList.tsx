import React, { useState } from 'react'
import Header from './Header'
import ListItem from './ListItem'
import './CheckList.scss'

const CheckList = () => {
  const [checkListData, setCheckListData] = useState([0])

  const deleteListItem = (idx: number) => {
    console.log('checkListData', checkListData)
    const changedData = checkListData.filter((item) => {
      console.log(item, idx)
      return item !== idx
    })
    setCheckListData(changedData)
    console.log('checkListData after', checkListData)
  }

  return (
    <div className="checklist-container">
      <div className="checklist-main">
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
        <div className="list">
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
