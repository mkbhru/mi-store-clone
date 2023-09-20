
import Carousel from 'react-bootstrap/Carousel'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Banner = ({ end }) => {
    return (

        <Carousel fade>
            {end.map(
                (item) => (
                    <Carousel.Item>
                        <img className='d-block w-100' src={item.image} alt="slide" />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.source}</p>
                            <u>Read More</u>
                        </Carousel.Caption>
                    </Carousel.Item>

                )
            )}


        </Carousel>

    )
}

export default Banner