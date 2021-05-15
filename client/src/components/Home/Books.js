import React,{useContext} from 'react'
import { CartContext } from '../../context/cart';
import HoverBooks from './HoverBooks';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../context/user';
const Books = ({items}) => {
const {addToCart }= useContext(CartContext)
const { user } = React.useContext(UserContext);
const history = useHistory()
    return (     
        <div className='books__main'>      
         {items.map((book) => { 
          return(
           <div key={book.id}>
           <HoverBooks 
           key={book.id}
           {...book}       
           />    
           <div className='book__content'>
            <li className='book__name'>{book.bookName}</li>
             <h4  className='book__prop'>By: {book.by}</h4>
             <h4  className='book__prop'>Narreted by: {book.narreted}</h4>
             <h4  className='book__prop'>Length: {book.length}</h4>
             <h4  className='book__prop'>Release Date: {book.releaseDate}</h4>
             <h4  className='book__prop'>Language: {book.language}</h4>
             <h4  className='book__prop'>Rating: {book.rating}</h4>
           </div>           
           <div className='book__adt'> 
           <h4>Regular Price: ${book.regularPrice}</h4>
           {user.token ? (  
           <button className='adt__button' onClick={() => 
              addToCart(book)
           }
           >Add to cart</button>  
           ) : (
            <button onClick={()=>{history.push('/login')}} className="adt__login">
           Sign in to buy books
           </button>
        )}
           </div>
       </div>
        )})}
      </div>
     
    )
}
export default Books
