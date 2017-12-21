import React from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { fetchDataRequest } from '../actions'
import 'rc-slider/assets/index.css'
import Tooltip from 'rc-tooltip'
import { compose, withHandlers, lifecycle } from 'recompose'
import {get as g} from 'lodash'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Handle = Slider.Handle


const mapStateToProps = state => {
  return {
    data: state.sliderConfig,
  }
}

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

const wrapperStyle = { width: 400, margin: 50 }

const App = ({data}) => {
  console.log("DATA", data)
  const { amountInterval } = data
  return(
  <div>
    <div style={wrapperStyle}>
      <p>Slider with custom handle</p>
      <Slider
        min={g(amountInterval, 'min')}
        max={g(amountInterval, 'max')}
        step={g(amountInterval, 'step')}
        defaultValue={g(amountInterval, 'defaultValue')}
        handle={handle}
      />
    </div>
  </div>
)}

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handleFetchData: ({ dispatch }) => () => dispatch(fetchDataRequest())
  }),
  lifecycle({
    componentDidMount() {
      const { handleFetchData, dispatch } = this.props
      dispatch(handleFetchData())
    }
  })
)(App)

