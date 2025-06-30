import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const MemberDasboard = () => {

    const [member, setMember] = useState(null);
    const [book, setBook] = useState([]);
    const [searchedValue, setSearchedValue] = useState([]);
    const [query, setQuery] = useState("");
    
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

                  <table border={2} className="min-w-full bg-white divide-gray-500">
                    <tr>
                        <th>Book Code</th>
                        <th>Book Title</th>
                        <th>Isbn</th>
                        <th>Publisher</th>
                        <th>Publication Year</th>
                        <th>Copies Available</th>
                        <th>Category</th>
                    </tr>
                    <tbody>
                     {(searchedValue.length > 0 ? searchedValue : book).map((book) => (
                        <tr key={book.book_id}>
                            <td>{book.book_id}</td>
                            <td>{book.title}</td>
                            <td>{book.isbn}</td>
                            <td>{book.publisher}</td>
                            <td>{book.publication_year}</td>
                            <td>{book.copies_available}</td>
                            <td>{book.category}</td>
                        </tr>
                     ))}
                    </tbody>
                  </table>
                    
                  </div>
       <Link to={`/borrow`}>Borrow</Link>
       <Link to={`/return`}>Return</Link>
       <Link to={`/viewLoan`}>View loans</Link>      
                </div>
                </>

            ) : (
                <>
                <h2>Loading......</h2>
                </>
            )}

        </div>
    )
}

export default MemberDasboard