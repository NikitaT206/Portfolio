import React from 'react'

class PortfolioItem extends React.Component {
  render() {
    return  <figure className='portfolio__figure'>
              <figcaption>
                <a
                  rel='noreferrer'
                  className='portfolio__link link'
                  href={this.props.item.link}
                  target='_blank'>{this.props.item.name}
                </a>
              </figcaption>
              <img 
                className='portfolio__image' 
                src={this.props.item.image} 
                alt={this.props.item.name}>
              </img> 
            </figure>
  }
}

export default PortfolioItem