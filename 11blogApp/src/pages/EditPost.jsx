import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import Container from "../components/container/Container";
import PostForm from "../components/post-form/PostForm"

function EditPost() {
  const [post, setPost] = useState()
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then(post => {
        if (post) {
          setPost(post)
        } else {
          navigate("/")
        }
      })
    }
  }, [slug, navigate])

  return (
    <div className="py-6">
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  )
}

export default EditPost;