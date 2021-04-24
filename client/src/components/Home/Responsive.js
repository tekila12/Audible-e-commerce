import React,{useContext} from 'react'
import './Home.css'
import { BookContext } from "../../context/books";

const Home = () => {
    const {
        categories,
        handleSelectCategory,
        currentSelectedCategory
      } = useContext(BookContext)
    
   return (
        <div className='responsive__cont'>
            <h3>Categories</h3>
            {categories.map((category)=>{
            return (                      
              <div key={category}             
              onClick={() => handleSelectCategory(category)}
              className='responsive__list'
              style={{ color: currentSelectedCategory === category && 'rgb(69, 146, 199)',  }} >
              {category}  
              </div>                 
              );})}   
              
        </div>
    )
}

export default Home