import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCard = ({key, name, price, image, index}) => {
  return (
    <div className='hot-item-card'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard