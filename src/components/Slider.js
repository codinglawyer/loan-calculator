import React from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { fetchDataRequest } from '../actions'
import 'rc-slider/assets/index.css'
import Tooltip from 'rc-tooltip'
import { get as g } from 'lodash'
import {saveAmountInterval} from '../actions'

const wrapperStyle = { width: 400, margin: 50 }
const Handle = Slider.Handle

const handle = props => {
  const { value, dragging, index, ...restProps } = props
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  )
}

const SliderComp = ({ interval, onSave }) => {
  console.log("SAVBE", onSave)
  return(
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider
        min={g(interval, 'min')}
        max={g(interval, 'max')}
        step={g(interval, 'step')}
        defaultValue={g(interval, 'defaultValue')}
        handle={handle}
        onChange={onSave}
      />
    </div>
  </div>
)}

export default SliderComp
