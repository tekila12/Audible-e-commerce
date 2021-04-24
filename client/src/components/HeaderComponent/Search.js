import React,{useState, useEffect, useRef, useContext}from 'react'
import { 
     useHistory
  } from "react-router-dom";
import { BookContext } from '../../context/books';
import SearchBooks from './SearchBooks';

const Search = () => {

  const {searchData}= useContext(BookContext)
  const [searchValue, setSearchValue] = useState('');
  const history= useHistory()
  const ref=useRef()
 
  const filteredBooks = Object.values(searchData)
    .flat()
    .filter((book) =>
      book.bookName.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(0, 10);
  const searchQueryPresent = searchValue.trim().length > 0;
  const handleSearch = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
     setSearchValue('')
    }
  };
     
  useEffect(() => {
    document.addEventListener('click', handleSearch);
    return () => {
      document.removeEventListener('click', handleSearch);
    };
  }, []);
  

        return (
        <div className='search__cont' ref={ref}>  
        <SearchBooks setSearchValue={setSearchValue} searchValue={searchValue} />        
          {searchQueryPresent &&
           (filteredBooks.length === 0 ? (
            <div className='search__books'>
              No books found
            </div>
           ) : (
            filteredBooks.map((book) => {
            return (
            <>
              <div className='search__books'
                onClick={() => {
                  history.push("/book/id", { book }, setSearchValue('')) ;
                }}
              >
                {" "}
                {book.bookName}{" "}
              </div>
            
            </>
          );
        })
      ))}
           </div>
    )
}

export default Search