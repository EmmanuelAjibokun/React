import { useEffect } from "react"
import { useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function User() {
  // const [data, setData] = useState([])
  // useEffect(()=> {
  //   fetch("https://api.github.com/users/EmmanuelAjibokun")
  //   .then(res=>res.json())
  //   .then(data => {
  //     console.log(data)
  //     setData(data)
  //   })
  // }, [])

  const data = useLoaderData()

  return (
    <div
    className='text-white font-bold bg-gray-600 text-center text-3xl m-2 py-3'
    >Github followers: {data.followers}
    <img src={data.avatar_url} alt="profile picture" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/EmmanuelAjibokun")
  return response.json()
}