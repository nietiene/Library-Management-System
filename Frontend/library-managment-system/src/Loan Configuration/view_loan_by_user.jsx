import axios from "axios";
import e from "express";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const view_loan = () => {
    const [loan, setLoan] = useState({});
    const [message, setMessage] = useState("");
    const member_id = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/loan/view_loan/${member_id}`, {withCredentials: true})
        .then((res) => {
            setLoan(res.data.loans);
        }).catch((err) => {
            setMessage(err.data.error);
        })
    })

}

export default view_loan;