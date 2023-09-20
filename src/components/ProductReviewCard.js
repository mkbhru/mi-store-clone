import React from 'react'
import '../styles/ProductReviewCard.css'
const ProductReviewCard = ({price, image, index, review, key, name}) => {
  return (
    <div className='product-review-card'>
        <img src={image} alt={`${index} Review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        {console.log({review})}
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
