import { useContext } from "react"
import UserContext from "../context/UserContext"


export default function Profile () {
  const {user} = useContext(UserContext)
  if(!user) return <h1>Not Logged In</h1>
  return (
    <div>
      Profile: {user.username}
    </div>
  )
}