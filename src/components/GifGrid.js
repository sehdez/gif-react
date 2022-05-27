import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';
import 'animate.css'
// import PropTypes from 'prop-types'

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );
    

    


  return (
    <>
        <h3>{category}</h3>
        { loading && <p> Loading... </p> }
        <div className='card-grid animate__animated animate__fadeInRight'>
                {
                    images.map( ( img ) => 
                    <GifGridItem 
                    key={img.id}
                    img={img} 
                    {...img} />
                    )
                }
        </div>
    </>
  )
}

GifGrid.propTypes = {}

export default GifGrid