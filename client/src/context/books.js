import React, {useState, useEffect} from 'react'
import URL from '../utilis/URL';
const BookContext = React.createContext();
export default function BooksProvider({ children }) {
  
  const [categories, setCategories] = useState([])
  const [books, setBooks] = useState([])
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState('')
  const [searchData,setSearchData]=useState([])
  const [filters, setFilters] = useState({
    regularPrice: 'all',
  })

  
  const handleSelectCategory = React.useCallback((category) => {
    setCurrentSelectedCategory(category)
  },[])

  /*fetching data */

  const fetchData = async () => {
    const response = await fetch(URL)
    const result = await response.json()
    
    const categories = ['All']
    const books = []
    console.log(books.category)
    for (const category in result) {
      categories.push(category)
      const booksWithCategory = result[category].map((book) => ({
        ...book,
        category,
      }))
      books.push(...booksWithCategory)
    }

    setSearchData(result)
    setBooks(books)
    setCategories(categories)
    setCurrentSelectedCategory(categories[0])
  }

  useEffect(() => {
    fetchData()
  }, [])

  const updateFilters = React.useCallback((e) => {
    const type = e.target.type
    const filter = e.target.name
    const value = e.target.value
    let filterValue
    if (type === 'checkbox') {
      filterValue = e.target.checked
    } else if (type === 'radio') {
      value === 'all' ? (filterValue = value) : (filterValue = parseInt(value))
    } else {
      filterValue = value
    }
    setFilters({ ...filters, [filter]: filterValue })
  },[filters])

  const filteredBooks = books
  .filter((book) => {
    if (currentSelectedCategory === 'All') {
      return true
    }
    return book.category === currentSelectedCategory
  })
  .filter((item) => {
    if (filters.regularPrice === 'all') {
      return true
    } else if (filters.regularPrice === 0) {
      return item.regularPrice < 10
    } else if (filters.regularPrice === 10) {
      return item.regularPrice > 10 && item.regularPrice < 20
    } else {
      return item.regularPrice > 20
    }
  })




  return (
    <BookContext.Provider
      value={{
      books:filteredBooks,
      searchData,
      categories,
      filters,
      updateFilters,
      handleSelectCategory,
      setCurrentSelectedCategory,
      currentSelectedCategory,
      }   
      }
    >
      {children}
    </BookContext.Provider>
  )
}
export { BookContext, BooksProvider }