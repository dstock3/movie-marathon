import React, { useEffect, useState } from 'react'
import { Users, ThisUser } from '../basic/Main'
import uniqueid from 'uniqid'

type FeedProps = {
  users: Users,
  thisStyle: React.CSSProperties,
  thisUser?: ThisUser
}

type Post = {
  id: string,
  handle: string, 
  content: string, 
  date: string
}

const Feed = (props: FeedProps) => {
  const [posts, setPosts] = useState<Array<Post> | null>(null)

  useEffect(()=> {
    let postArray = []
    for (let i = 0; i < props.users.length; i++) {
      for (let x = 0; x < props.users[i].posts.length; x++) {
        let post = props.users[i].posts[x]
        postArray.push({
          id: uniqueid(),
          handle: props.users[i].handle, 
          content: post.content, 
          date: post.date
        });
      }
    }
    setPosts(postArray)
  }, [props.users])

  return (
    <div className="feed-container">
      {posts?.sort(function compare(a, b) {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB.valueOf() - dateA.valueOf();
      })
      .map((post: Post, index)=> {
        return(
          <div key={post.id} className="post-container">
            <div className="post-head">
              <div className="post-handle">{post.handle}</div>
              <div className="post-date">{post.date}</div>
            </div>

            <div className="post-content">{post.content}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Feed