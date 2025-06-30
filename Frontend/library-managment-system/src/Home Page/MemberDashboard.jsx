import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

const MemberDasboard = () => {

    const [member, setMember] = useState(null);
    const [book, setBook] = useState([]);
    const [searchedValue, setSearchedValue] = useState([]);
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:3000/member/data/user`, {withCredentials: true})
        .then((res) => {
            setMember(res.data.memberInfo);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    // Available Books
useEffect(() => {
    axios.get(`http://localhost:3000/books/Book_List/available`, {withCredentials: true})
    .then((res) => {
        setBook(res.data.books);
    }).catch((err) => {
        console.log(err);
    });
}, [])

// Search book

useEffect(() => {
    const delaySearch = setTimeout(() => {
        if (query.trim() != "") {
           axios.get(`http://localhost:3000/books/search/new?query=${query}`, {withCredentials: true})
           .then((res) => {
                setSearchedValue(res.data.searchedBook);
          }).catch((err) => {
               console.log(err);
         });
        } else { 
            setSearchedValue([]);
        }
    }, 300);

return () => clearTimeout(delaySearch);


}, [query]);

const handleLogout = () => {
    axios.get("http://localhost:3000/auth/logout", {withCredentials: true})
    .then((res) => {
           setMessage(res.data.message);
           navigate('/MemberAuth');
    }).catch((err) => {
        setMessage(err.data.error);
    })
}

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {member ? (
                <>
                <div className="max-x-7xl mx-auto">

                  <h2 className="text-2xl font-bold mb-4">Welcome {member.name} to member dashboard</h2>
      
      <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Search Book</label>
                  <input type="search" placeholder="Search book"
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  className="w-full p-2 border border-gray-500 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />

      </div>
                  <h3 className="text-lg font-semibold mb-2">{searchedValue.length > 0 ? "Searched Book" : "Available books"}</h3>

                  {searchedValue.length === 0 && query != "" && (
                    <p className="text-red-500 mb-4">No book found for <strong>{query}</strong></p>
                  )}
                  <div className="overflow-x-auto roundend-lg shadow-lg border border-gray-500 mb-6">

                  <table border={2} className="min-w-full bg-white divide-gray-500 text-sm text-gray-500">
                    <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Book Code</th>
                        <th className="px-4 py-2 text-left">Book Title</th>
                        <th className="px-4 py-2 text-left">Isbn</th>
                        <th className="px-4 py-2 text-left">Publisher</th>
                        <th className="px-4 py-2 text-left">Publication Year</th>
                        <th className="px-4 py-2 text-left">Copies Available</th>
                        <th className="px-4 py-2 text-left">Category</th>
                    </tr>
                    <tbody className="divide-y divide-gray-500">
                     {(searchedValue.length > 0 ? searchedValue : book).map((book) => (
                        <tr key={book.book_id}>
                            <td className="px-4 py-2">{book.book_id}</td>
                            <td className="px-4 py-2">{book.title}</td>
                            <td className="px-4 py-2">{book.isbn}</td>
                            <td className="px-4 py-2">{book.publisher}</td>
                            <td className="px-4 py-2">{book.publication_year}</td>
                            <td className="px-4 py-2">{book.copies_available}</td>
                            <td className="px-4 py-2">{book.category}</td>
                        </tr>
                     ))}
                    </tbody>
                  </table>      
                  </div>
                  <div className="flex gap-4">
                      <Link to={`/borrow`} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Borrow</Link>
                      <Link to={`/return`} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">Return</Link>
                      <Link to={`/viewLoan`} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700 transition">View loans</Link>      
                 </div>   
                </div>
                </>

            ) : (
                <>
                <h2 className="text-center text-lg font-semibold text-gray-500">Loading......</h2>
                </>
            )}

        </div>
    )
}

export default MemberDasboard