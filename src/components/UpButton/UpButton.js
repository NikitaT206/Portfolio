import React from 'react'

class UpButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: 'up-button'}
    this.handleScroll = this.handleScroll.bind(this)
  }
 
  render() {
    return <a href='home' className={this.state.date}>↑</a>
  }

  handleScroll() {
      if (window.pageYOffset >= 100) {
        this.setState({date: 'up-button_active'})
      }

      else if (window.pageYOffset <= 100) {
        this.setState({date: 'up-button'})
      } 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  } 
}

export default UpButton