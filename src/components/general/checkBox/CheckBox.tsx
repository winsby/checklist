import React, { Dispatch, SetStateAction, useState } from 'react'
import { ReactComponent as CheckIcon } from './check.svg'

import './CheckBox.scss'

// background-image: url(${(props) => props.src});
const CheckBox = (props: CheckBoxProps) => {
  const { isChecked, setIsChecked } = props

  return (
    <div
      className={`checkbox  ${isChecked ? 'checked' : ''}`}
      onClick={() => {
        setIsChecked(!isChecked)
      }}
    >
      <CheckIcon className="check" fill={isChecked ? 'white' : 'black'} />
    </div>
  )
}

interface CheckBoxProps {
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
}

export default CheckBox
