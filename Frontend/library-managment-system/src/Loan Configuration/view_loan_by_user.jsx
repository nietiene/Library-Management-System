import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const View_loan = () => {
    const [loan, setLoan] = useState([]);
    const [message, setMessage] = useState("");
    const { member_id } = useParams();

    axios.get(`http://localhost:3000/member/user`, {withCredentials: true})
    .then((res) => {
        
    })
    useEffect(() => {
        axios.get(`http://localhost:3000/loan/view_loan/${member_id}`, {withCredentials: true})
        .then((res) => {
            setLoan(res.data.loans);
        }).catch((err) => {
            setMessage(err.data.error);
        })
    }, [member_id]);

    return (
        <div>
            <h2>Your Loans</h2>
            <table border={2} cellPadding={5}>
                <tr>
                    {/* loan_id, book_id, member_id, staff_id, loan_date, return_date, actual_return_date, status */}
                    <th>Loan Code</th>
                    <th>Book Code</th>
                    <th>Book Name</th>
                    <th>Member Code</th>
                    <th>Member Name</th>
                    <th>Loan Date</th>
                    <th>Return Date</th>
                    <th>Status</th>
                </tr>

            
            {loan.map((loan) => (
                // loan_id, book_id, member_id, staff_id, loan_date, return_date, actual_return_date, status
                <tr key={loan.loan_id}>
                    <td>{loan.book_id}</td>
                    <td>{loan.title}</td>
                    <td>{loan.member_id}</td>
                    <td>{loan.name}</td>
                    <td>{loan.loan_date}</td>
                    <td>{loan.return_date}</td>
                    <td>{loan.status}</td>
                </tr>
            ))}
            </table>
        </div>
    )

}

export default View_loan;