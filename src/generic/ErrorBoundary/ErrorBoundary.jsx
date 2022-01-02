import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  isActive = () => {
    return this.state.active ? "Active" : "No active"
  }

  onClickHandler = () => {
    this.setState({ active: true })
  }

  componentDidMount() {
    console.log("component was mount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Prev state:", prevState.active)
    console.log("New state:", this.state.active)
    console.log("Component update")
  }

  componentWillUnmount() {
    console.log("Component was unmount")
  }


  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>
          Activate
        </button>
        <h1>
          ErrorBoundary {this.props.saludo}
          {
            this.isActive()
          }
        </h1>
      </div>

    )
  }
}

export default ErrorBoundary