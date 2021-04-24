import React from 'react'
import {
    
    Link
  } from "react-router-dom";
import HoverRating from './HoverRating'
const HoverBooks = ({...book}) => {
    const[inHoverBooks , setInHoverBooks]= React.useState(false)
    return (
        <>
            <Link to={{pathname:`book/id`,
            state:{
            book,
            },}}>
            <img className='books__image'
            onMouseLeave={() => setInHoverBooks(false)}
            onMouseEnter={() => setInHoverBooks(true)}
            src={book.image}
            id={book.id} alt=''/>         
            </Link>                
            {inHoverBooks && 
              <div className="hover__containter">
                <h3>{book.bookName}</h3> 
                <h4  className='hover__color'><h4>By:</h4> {book.by}</h4>
                <h4  className='hover__color'><h4>Narreted by:</h4>{book.narretedBy}</h4>
                <h4 className='hover__color'><h4>Length:</h4>  {book.length}</h4>
                <h4 className='hover__color'><h4>Rating:</h4> {book.rating}</h4>
               <HoverRating />
                <div>
                  <p className='hover__info'>{book.info}</p>
                </div>

              </div>
          }     
        </>
    )
}

export default HoverBooks
