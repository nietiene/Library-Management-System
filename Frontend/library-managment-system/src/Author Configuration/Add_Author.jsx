import { useState } from "react";
import axios from "axios"

const Add_New_Author = () => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [message, setMessage] = useState();

    axios.post(`http://localhost:3000/Add_Author`, { name, bio})
    .then((res) => {
        
    })
}