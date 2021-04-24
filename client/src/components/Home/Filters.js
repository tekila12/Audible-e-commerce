import React, { useContext } from 'react'
import { BookContext } from '../../context/books'

const Filters = () => {
    const {filters, updateFilters}= useContext(BookContext)
    return (
        <div className='filters'>
            <p>Regular Price</p>
          <label className='filter__label'>
            <input
              className='filter__input'
              type="radio"
              name="regularPrice"
              id="all"
              value="all"
              checked={filters.regularPrice === "all"}
              onChange={updateFilters}
            />
            all
          </label>
          <label className='filter__label'>
            <input
              className='filter__input'
              type="radio"
              name="regularPrice"
              value="0"
              checked={filters.regularPrice === 0}
              onChange={updateFilters}
            />
            $0 - $10
          </label >
          <label className='filter__label'>
            <input
              className='filter__input'
              type="radio"
              name="regularPrice"
              value="10"
              checked={filters.regularPrice === 10}
              onChange={updateFilters}
            />
            $10 - $20
          </label>
          <label className='filter__label'>
            <input
              className='filter__input'
              type="radio"
              name="regularPrice"
              value="20"
              checked={filters.regularPrice === 20}
              onChange={updateFilters}
            />
            Over $20
          </label>
       
        </div>
    )
}

export default Filters
