import { useState, useEffect } from 'react'
import apiUtils from "../utils/apiUtils"
import uuid from 'react-uuid';


const One = () => {
    const [users, setUsers] = useState([]);

    const URL = apiUtils.getUrl()

    useEffect(() => {
        const getStudents = async () => {
            try {
                const response = await apiUtils.getAxios().get(URL)
                setUsers(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getStudents()
    }, [URL]);

    return (
        <div className="center">
            <table className="table table-dark">
                <thead className="mt-head">
                    <tr>
                        <th className="mt-head-title">Name</th>
                        <th className="mt-head-title">Email</th>
                        <th className="mt-head-title">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <tr key={uuid()}><td>{user.name}</td><td>{user.email}</td><td>{user.age}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default One