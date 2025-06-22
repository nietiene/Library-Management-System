import { useState } from "react";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();

const handleLogout = () => {

     axios.post(`http://localhost:3000/auth/logout`, {
            username, password }, {withCredentials: true})
            .then ((res) => {
            if (res.data.user) {
                 navigate("/Dashboard");
            } else {
                setMessage(res.data.error);
            }
        }).catch ((err) => {
          setError(err.data.error);
        });
    }
    
