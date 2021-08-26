import React, { Dispatch, SetStateAction } from 'react'
import checkIcon from './check.svg'
import checkIconWhite from './check-white.svg'

import './CheckBox.scss'

const CheckBox = (props: CheckBoxProps) => {
  const { isChecked, setIsChecked } = props

  return (
    <div
      className={`checkbox  ${isChecked ? 'checked' : ''}`}
      onClick={() => {
        setIsChecked(!isChecked)
      }}
    >
      <img
        className="check"
        src={isChecked ? checkIconWhite : checkIcon}
        alt={`Checkmark ${isChecked}`}
      />
    </div>
  )
}

interface CheckBoxProps {
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
}

export default CheckBox
