import { useLoaderData } from "react-router-dom"
import NewUser from "../NewUser/NewUser"

const Users = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div className="text-center  mt-12" >
            <h2 className="font-medium text-2xl">Our users : {user.length}</h2>
            <p>This is Users Details </p>
            <div>
                {
                    user.map((data , idx) => <NewUser key={idx} mainData = {data}></NewUser>)
                }
            </div>
        </div>
    )
}

Users.propTypes = {}

export default Users