import React from 'react'
import { Link } from 'react-scroll'

class UpButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: 'up-button'}
    this.handleScroll = this.handleScroll.bind(this)
  }
 
  render() {
    return <Link 
      to='header' 
      className={this.state.date}
      smooth={true}
      duration={500}
      ></Link>
  }

  handleScroll() {
    if (window.pageYOffset >= 100) {
      this.setState({date: 'up-button up-button_active'})
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