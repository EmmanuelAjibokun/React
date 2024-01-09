// To set some form of uniqueness to a page
import {useParams} from 'react-router-dom'

export default function User() {
  const { userId } = useParams()
  return (
    <div
    className='bg-orange-500 text-black text-3xl text-center py-3'
    >User: {userId}</div>
  )
}