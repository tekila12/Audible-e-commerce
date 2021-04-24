import React,{useContext} from 'react'
import {useLocation,  useHistory, useParams
  } from "react-router-dom";
import { CartContext } from '../../context/cart';
import { UserContext } from '../../context/user';
import SlideShow from './SlideShow'
const Book = () => {
    const { state: { book } } = useLocation();  
    const {addToCart }= useContext(CartContext)
    const { bookId } = useParams();
    console.log(book, bookId)
    const history= useHistory()
    const { user } = React.useContext(UserContext);
    return (
        <div>
         <div key={book.id} className='book__info'>
         <img src={book.image} alt =''/>
         <div className='book__left'>
         <h3 className='book__infoName'>{book.bookName}</h3>
         <div className='info__cont'><h4 className='info__color'>By:</h4>{book.by}</div>
         <div className='info__cont'><h4 className='info__color'>Narreted:</h4>{book.narretedBy }</div>
         <div className='info__cont'><h4 className='info__color'>Length:</h4> {book.length}</div>
         <div className='info__cont'><h4 className='info__color'>Ratings:</h4> {book.rating}</div>   
        {user.token ?(
         <button className='adt__infoButton' onClick={() => {
              addToCart(book);
            }}
           >Add to cart</button>  
        ):(
        <button onClick={()=>{history.push("/login")}} className='adt__infoLogin'  >
         Login to buy books
        </button>
        )}
       
         </div>
        </div>
          <SlideShow />
        <div className='publish__summ'>
          <h3>Publisher's Summary</h3>
          <p className='info__text'>{book.info}</p>
        </div>
        </div> 
    )
}

export default Book
