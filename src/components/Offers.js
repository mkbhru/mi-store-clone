import React from 'react'
import Offer from './Offer'

const Offers = ({offer}) => {
  return (
    <div className='offersSection'>
        {
            offer.map((item, index) =>(
                <Offer />
            ))
        }
        
    </div>
  )
}

export default Offers