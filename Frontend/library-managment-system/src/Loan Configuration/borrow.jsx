import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Borrow_book = () => {
    const [book_id, setBook_id] = useState("");
    const [message, setMessage] = useState("");

        axios.post(`http://localhost:3000/loan/borrow`, 
            { book_id },
            { withCredentials: true })
        .then((res) => {
          setMessage(res.data.message || "Book broweed");
        }).catch((err) => {
            console.error(err)
            setMessage(err.data.error); 
        })


    return (
        <div>
            <h3>Borrow a book</h3>

            <input type="text" name="Enter a Book code" 
            value={book_id} onChange={(e) => setBook_id(e.target.value)}
            /> <br />
        </div>
    )
}