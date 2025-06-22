import axios from "axios";
import { useEffect, useState } from "react"

const MemberDasboard = () => {

    const [member, setMember] = useState([]);
    
    useEffect(() => {
        axios.get(``)
    })
    return (
        <div>
            <h2>Welcome to member dashboard</h2>
        </div>
    )
}

export default MemberDasboard