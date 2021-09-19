import React from 'react'
import PortfolioItem from './PortfolioItem'
 
class PortfolioContainer extends React.Component {
  render() {
    return  <div className='portfolio__container container'>
              {this.props.items.map(item => {
                return <PortfolioItem item={item} key={item.id}/>
              })}
            </div>
  }
}

export default PortfolioContainer