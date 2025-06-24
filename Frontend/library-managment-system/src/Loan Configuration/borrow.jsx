import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Borrow_book = () => {
    const [book_id, setBook_id] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        
        axios.post(`http://localhost:3000/loan/borrow`, {withCredentials: true})
        .then((res) => {
         
        })
    })

}