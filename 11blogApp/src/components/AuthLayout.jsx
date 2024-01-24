/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";


function Authenticate({children, authentication = true}) {
  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const [loader, setLoader] = useState(true)

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login")
    } else if (!authentication && authStatus !== authentication) { // you are not supposed to be logged in to see this page but you are already logged-in
      navigate("/")
    }
    setLoader(false)
  }, [authStatus, authentication, navigate])

  return loader ? null : <div>{children}</div>    // Create a loading component if loader is true
}

export default Authenticate;