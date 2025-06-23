import axios from "axios";
import { useEffect, useState } from "react"

const MemberDasboard = () => {

    const [member, setMember] = useState(null);
    const [book, setBook] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:3000/member/data/user`, {withCredentials: true})
        .then((res) => {
            console.log("Response:", res.data);
            setMember(res.data.memberInfo);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    // Available Books

    axios.get(`http://localhost:3000/books/Book_List/available`, {withCredentials: true})
    .then((res) => {
        setBook()
    })

    return (
        <div>
            {member ? (
                <>
                  <h2>Welcome {member.name} to member dashboard</h2>
      
                  <label>Search Book</label>
                  <input type="search" name="" />
                  
                  <h3>Available Books</h3>
                  
                </>

            ) : (
                <>
                <h2>Loading......</h2>
                </>
            )}

        </div>
    )
}

export default MemberDasboard