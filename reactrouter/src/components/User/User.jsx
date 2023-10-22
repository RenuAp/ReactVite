import { useParams } from "react-router-dom"

const User = () => {
    const {userid} = useParams()
  return (
    <>
      <h4>This is User Page</h4>
      <div className="text-center bg-gray-600 text-white p-20 m-20">
      <p>User : {userid}</p>
      </div>

    </>
  )
}

export default User
