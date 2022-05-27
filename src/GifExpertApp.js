import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = props => {
  const [categories, setCategories] = useState(['Saludo'])

  return (
    <div>
        <h2> GifExpertApp</h2>
        <AddCategory setCategories = { setCategories } />
        <hr/>
            {
                categories.map( (category ) =>
                    <GifGrid 
                        key={category}
                        category= { category } /> 
                )
            }
    </div>
  )
}
export default GifExpertApp