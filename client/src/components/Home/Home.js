import React,{useState, useRef, useEffect, useContext, Suspense} from 'react'
import './Home.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BookContext } from "../../context/books";
import Filters from './Filters';
import Responsive from './Responsive'
import BookAnimation from './BookAnimation'
import Books from './Books'
const Home = () => {
  const {
    books,
    categories,
    handleSelectCategory,
    currentSelectedCategory,
    isLoading
  } = useContext(BookContext)
  const ref = useRef()
  const[isCategoryOpen, setIsCategoryOpen]=useState(false)
  
  function closeCategory(){
    setIsCategoryOpen(false)
  }

  const handleCategory=(e)=>{
      if (ref.current && !ref.current.contains(e.target)) {
      closeCategory()
      }   
     }  
   
     useEffect(()=>{
      document.addEventListener('click', handleCategory)
      return()=>{
      document.removeEventListener('click', handleCategory)
      }
     })


     



   return (
        <div className='books__container' >
      
            <div ref={ref} className='responsive' >
              <GiHamburgerMenu onClick={()=> setIsCategoryOpen(!isCategoryOpen)}/> 
              {isCategoryOpen ? <Responsive />:null}
            </div>         
            <h1 className='categories'>Categories</h1> 
            {categories.map((category) => {
              return (       
             <div
              key={category}
              onClick={() => handleSelectCategory(category)}
              className="books__list"
              style={{ color: currentSelectedCategory === category && 'rgb(69, 146, 199)' }}
             >
            {category}
           </div>
           
            )
            })}   
         
            <Filters />
         
            <Books items={books} />  
          
        </div>
   
    )
}

export default Home
