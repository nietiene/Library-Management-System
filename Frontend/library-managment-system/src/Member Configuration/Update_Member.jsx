import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Update_Member = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [membership_date, setMembership_date] = useState("");
    const member_id = useParams();

    useEffect(() => {
        const handleFetchUser = () => {
             axios.get(``)
        }
    })

}