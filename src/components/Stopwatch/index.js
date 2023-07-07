// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  resetTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timerElapsedInSeconds: 0})
  }

  stopTime = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  getTime = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  startTime = () => {
    this.timeInterval = setInterval(this.getTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="bg-card-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="time-container">
            <div className="watch-container">
              <img
                className="image"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer-heading">{time}</h1>
            <div className="button-container">
              <button
                className="start-button"
                disabled={isTimerRunning}
                type="button"
                onClick={this.startTime}
              >
                Start
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.stopTime}
              >
                Stop
              </button>
              <button
                className="stop-button"
                type="button"
                onClick={this.resetTime}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
