import React, { Component } from 'react'

function Randomize() {
  return Math.floor(Math.random() * 10)
}
class Jokes extends Component {
  state = []

  async componentDidMount() {
    let response = await fetch(
      'https://official-joke-api.appspot.com/jokes/ten'
    )
    let apiJSON = await response.json()
    this.setState(apiJSON)
    console.log(apiJSON)
    console.log(apiJSON[1]) //i cant reference state because it has not be set reliably it updates after the function is done and on to the next one
  }

  render() {
    if (this.state.length === 0) {
      //this is important because state is not filled yet (always)
      return 'loading...'
    }
    console.log(this.props.number)
    console.log(this.state[this.props.number])
    return <div>{this.state[this.props.number].setup}</div>
  }
}

class App extends Component {
  state = {
    randomNumber: Randomize(),
  }

  handleRerandom = event => {
    this.setState({ randomNumber: Randomize() })
  }
  render() {
    return (
      <div>
        <Jokes number={this.state.randomNumber} />
        <button onClick={this.handleRerandom}>click me!</button>
      </div>
    )
  }
}

export default App
