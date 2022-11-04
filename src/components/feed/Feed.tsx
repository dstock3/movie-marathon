import React, { useEffect, useState } from 'react'
import { Users, ThisUser } from '../basic/Main'

type FeedProps = {
  users: Users,
  thisStyle: React.CSSProperties,
  thisUser?: ThisUser
}

type allPosts = {
  handle: string, 
  content: string, 
  date: string
}

const Feed = (props: FeedProps) => {
  const [posts, setPosts] = useState<Array<allPosts> | null>(null)

  useEffect(()=> {
    let postArray = []
    for (let i = 0; i < props.users.length; i++) {
      for (let x = 0; x < props.users[i].posts.length; x++) {
        let post = props.users[i].posts[x]
        postArray.push({
          handle: props.users[i].handle, 
          content: post.content, 
          date: post.date
        });
      }
    }
    setPosts(postArray)
  }, [props.users])

  useEffect(()=> {
    posts?.sort(function compare(a, b) {
      let dateA = new Date(a.date);
      let dateB = new Date(b.date);
      return dateB.valueOf() - dateA.valueOf();
    });
    console.log(posts)
  }, [posts])

  return (
    <div className="feed-container">

    </div>
  )
}

export default Feed