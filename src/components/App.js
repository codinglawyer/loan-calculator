import React from 'react'
import { connect } from 'react-redux'
import { compose, withHandlers, lifecycle } from 'recompose'
import { get as g, debounce, throttle } from 'lodash'
import {
  fetchDataRequest,
  saveAmountInterval,
  saveTermInterval
} from '../actions'
import SliderComp from './Slider'
import LoanInfo from './LoanInfo'

const mapStateToProps = state => {
  return {
    configData: g(state, 'sliderConfig'),
    loanInfo: g(state, 'loanInformation')
  }
}

const App = ({
  configData,
  loanInfo,
  handleSaveAmountInterval,
  handleSaveTermInterval
}) => {
  const { amountInterval, termInterval } = configData
  return (
    <div>
      <SliderComp
        title="Total Amount"
        interval={amountInterval}
        onSave={handleSaveAmountInterval}
      />
      <SliderComp
        title="Term"
        interval={termInterval}
        onSave={handleSaveTermInterval}
      />
      <LoanInfo data={loanInfo} />
    </div>
  )
}

export default compose(
  connect(mapStateToProps),
  withHandlers(({ dispatch }) => {
    const debouncedSaveAmountInterval = debounce(
      val => dispatch(saveAmountInterval(val)),
      1000
    )
    const debouncedSaveTermInterval = debounce(
      val => dispatch(saveTermInterval(val)),
      1000
    )
    return {
      handleFetchData: ({ dispatch }) => () => dispatch(fetchDataRequest()),
      handleSaveAmountInterval: () => val => debouncedSaveAmountInterval(val),
      handleSaveTermInterval: () => val => debouncedSaveTermInterval(val)
    }
  }),
  lifecycle({
    componentDidMount() {
      const { handleFetchData, dispatch } = this.props
      dispatch(handleFetchData())
    }
  })
)(App)
