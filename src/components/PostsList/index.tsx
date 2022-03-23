import { useEffect, useState } from "react"
import { Posts } from './index.interface'

function PostsList() {
    const [posts, setPosts] = useState<Posts[]>([])

    const handleResize = () => {
        console.log("resized!")
    }

    useEffect(() => {
      console.log('fetching!')
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((json) => setPosts(json))
        // run every time it renders your component
    }, []) //depencies

    console.log('rendered!')
    return <h1>Arjimson</h1>
}

export default PostsList
