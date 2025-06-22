import { useState } from "react";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const handleLogout = () => {

    const [message, setMessage] = useState("");
     axios.get(`http://localhost:3000/auth/logout`, {withCredentials: true})
            .then (() => {
                 navigate("/login");
 
        }).catch ((err) => {
          setMessage(err.data.error);
        });

        if ( message ) return <p style={{color: 'red'}}>{message}</p>
    }

    

export default handleLogout;
