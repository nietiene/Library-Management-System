import { useState } from "react";
import axios from "axios"

const Add_New_Author = () => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [message, setMessage] = useState();
    const [error, setError] = useState(null);

  const handleAddNewAuthor = () => {

    axios.post(`http://localhost:3000/Add_Author`, { name, bio})
    .then((res) => {
        setMessage(res.data.message);
    }).catch((err) => {
        setError(err.data.error);
    })
  }  
    if (error) return <p style={{color: 'red'}}>{error}</p>
    if (message) return <p style={{color: 'Green'}}>{message}</p>

    return (
        <div>
            <form onSubmit={handleAddNewAuthor}>
                <label>Name</label>
                <input type="text" name="name" 
                onChange={(e) => setName(e.target.value)}/> <br />

                <label>Bio</label>
                <input type="text" name="bio" 
                onChange={(e) => setBio(e.target.value)}/> <br />
            </form>
        </div>
    )
}