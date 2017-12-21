import React from 'react'
import { get as g } from 'lodash'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import Tooltip from 'rc-tooltip'

import 'rc-slider/assets/index.css'

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

const SliderComp = ({ title, interval, onSave }) => (
  <div>
    <div style={wrapperStyle}>
      <p>{title}</p>
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
)

export default SliderComp
