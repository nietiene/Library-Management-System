import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserList = () => {
    const [member, setMember] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3000/Member_List`)
        .then((res) => {
            const Member = res.data.Member[0];
        })
    })
}