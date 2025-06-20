import Add_Book from "./Book Configuration/Add_Book"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Book_List from "./Book Configuration/book_list"
import Dashboard from "./Home Page/Dashboard"
import Delete_Book from "./Book Configuration/Delete_Book"
import Update_Book from "./Book Configuration/updateBook"

function App() {

  return (
        <Router>
          <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Book_list" element={<Book_List />}/>
              <Route path="/Add_New_Book" element={<Add_Book />}/>
              <Route path="/Delete_Book/:book_id" element={<Delete_Book />}/>
              <Route path="/UpdateBook/:book_id" element={<Update_Book />}/>
          </Routes>
        </Router>

  )
}

export default App
