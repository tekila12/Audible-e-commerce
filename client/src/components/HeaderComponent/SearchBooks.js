import React from 'react'

const SearchBooks = ({ searchValue, setSearchValue }) => {
    return (
        <>  
             <input 
              value ={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)}
              className='input__box' 
              placeholder='Find your book'
              type='text'
              autoComplete='off'
                         
             /> 
           
        </>
    )
}

export default SearchBooks
