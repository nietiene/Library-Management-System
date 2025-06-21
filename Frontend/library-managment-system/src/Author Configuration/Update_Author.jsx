import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const Update_Author = () => {
    const {name, setName} = useState("");
    const [bio, setBio] = useState("");
    const [error, setError] = useState(null);
    const {author_id} = useParams();

    axios.get(`http://localhost:3000/Get_Single_Author/${author_id}`)
    .then((res) => {
        const Author = res.data.Author[0];
        setName(Author.name);
        setBio(Author.bio);
    }).catch((err) => {
        setError(err.data.error);
    });

    return (
        <div>
            <form>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <label>Name</label>
                <input type="text" name="name" 
                onChange={(e) => setName(e.target.value)}
                value={name}/> <br />

                <label>Bio</label>
                <input type="text" name="bio" 
                onChange={(e) => setBio(e.target.value)}
                value={bio}/> <br />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    )
}

export default Update_Author;