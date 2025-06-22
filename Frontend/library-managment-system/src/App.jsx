import Add_Book from "./Book Configuration/Add_Book"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Book_List from "./Book Configuration/book_list"
import Dashboard from "./Home Page/Dashboard"
import Delete_Book from "./Book Configuration/Delete_Book"
import Update_Book from "./Book Configuration/updateBook"
import Add_New_Author from "./Author Configuration/Add_Author"
import List_Of_Authors from "./Author Configuration/list_of_author"
import Update_Author from "./Author Configuration/Update_Author"
import Delete_Author from "./Author Configuration/Delete_Author"
import MemberList from "./Member Configuration/Member_List"
import Add_Member from "./Member Configuration/Add_Member"
import Update_Member from "./Member Configuration/Update_Member"
import Delete_Member from "./Member Configuration/Delete_Member"
import Login from "./Authentication/login"
import MemberLogin from "./Authentication/MemberAuth"
import MemberDasboard from "./Home Page/MemberDashboard"
function App() {

  return (
        <Router>
          <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Book_list" element={<Book_List />}/>
              <Route path="/Add_New_Book" element={<Add_Book />}/>
              <Route path="/Delete_Book/:book_id" element={<Delete_Book />}/>
              <Route path="/UpdateBook/:book_id" element={<Update_Book />}/>
              <Route path="/Add_Author" element={<Add_New_Author />}/>
              <Route path="/Author_List" element={<List_Of_Authors />}/>
              <Route path="/Update_Author/:author_id" element={<Update_Author />} />
              <Route path="/Delete_Author/:author_id" element={<Delete_Author />}/>
              <Route path="/Member_List" element={<MemberList />}/>
              <Route path="/Add_member" element={<Add_Member />}/>
              <Route path="/Update_Member/:member_id" element={<Update_Member />}/>
              <Route path="/Delete_Member/:member_id" element={<Delete_Member />}/>
              <Route path="/Login" element={<Login />}/>
              <Route path="/MemberAuth" element={<MemberLogin />}/>
              <Route path="MemberDasboard" element={<MemberDasboard />}/>
          </Routes>
        </Router>

  )
}

export default App
