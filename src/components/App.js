import React from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider'
import { fetchDataRequest, saveAmountInterval, saveTermInterval } from '../actions'
import 'rc-slider/assets/index.css'
import Tooltip from 'rc-tooltip'
import { compose, withHandlers, lifecycle } from 'recompose'
import { get as g } from 'lodash'
import SliderComp from './Slider'

const createSliderWithTooltip = Slider.createSliderWithTooltip

const mapStateToProps = state => {
  return {
    data: state.sliderConfig
  }
}

const App = ({ data, handleSaveAmountInterval, handleSaveTermInterval }) => {
  const { amountInterval, termInterval } = data
  return (
    <div>
      <SliderComp interval={amountInterval} onSave={handleSaveAmountInterval}/>
      <SliderComp interval={termInterval} onSave={handleSaveTermInterval}/>
    </div>
  )
}

export default compose(
  connect(mapStateToProps),
  withHandlers({
    handleFetchData: ({ dispatch }) => () => dispatch(fetchDataRequest()),
    handleSaveAmountInterval: ({ dispatch }) => val =>{
      dispatch(saveAmountInterval(val))},
    handleSaveTermInterval: ({ dispatch }) => val =>{
      dispatch(saveTermInterval(val))}
  }),
  lifecycle({
    componentDidMount() {
      const { handleFetchData, dispatch } = this.props
      dispatch(handleFetchData())
    }
  })
)(App)
