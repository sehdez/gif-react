import React, {useState} from 'react'
import PropTypes from 'prop-types'
const AddCategory = ( { setCategories } ) => {
    const [ inputValue, setInputValue ] = useState('')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( inputValue.trim().length <2 ){
            return
        }
        setCategories( (categories) => {
           if( categories.includes(inputValue)){
                
                setInputValue( '' )
                return [ ...categories ]        
            }
            return [ inputValue ]
        })
        setInputValue( '' )
    }



  return (
    <form onSubmit={handleSubmit }> 
        <input 
          type="text"
          value={inputValue}
          placeholder='Busca un gif'
          onChange = { handleInputChange  }
          />
    </form>
  )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;

