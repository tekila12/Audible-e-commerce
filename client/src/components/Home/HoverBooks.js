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
                <div  className='hover__color'><h4>By:</h4> {book.by}</div>
                <div  className='hover__color'><h4>Narreted by:</h4>{book.narreted}</div>
                <div className='hover__color'><h4>Length:</h4>  {book.length}</div>
                <div className='hover__color'><h4>Rating:</h4> {book.rating}</div>
               <HoverRating />
                <div>
                  <h4>Publisher's</h4>
                  <h4>Information:</h4>
                  <p className='hover__info'>{book.info}</p>
                </div>

              </div>
          }     
        </>
    )
}

export default HoverBooks
