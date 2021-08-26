import React, { useState, Dispatch, SetStateAction } from 'react'
import deleteIcon from './delete.svg'
import CheckBox from '../general/checkBox/CheckBox'
import TextareaAutosize from 'react-textarea-autosize'

const ListItem = (props: ListItemProps) => {
  const { deleteListItem, idx } = props

  const [isChecked, setIsChecked] = useState(false)
  const [inputText, setInputText] = useState('')
  const [focused, setFocused] = useState(false)

  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return (
    <div
      className={`list-item ${isChecked ? 'checked' : ''} ${
        focused ? 'focused' : ''
      }`}
    >
      <div className="delete-btn" onClick={() => deleteListItem(idx)}>
        <img className="delete-icon" src={deleteIcon} alt="Delete Icon" />
      </div>
      <TextareaAutosize
        className={`list-item-input ${isChecked ? 'checked' : ''}`}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
    </div>
  )
}

interface ListItemProps {
  idx: number
  deleteListItem: (idx: number) => void
}

export default ListItem
