import React from 'react'
import { PostType } from '../basic/Main'

type FeedProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
    movies: Array<Object>,
    posts: Array<PostType>
  }
}

const Feed = (props: FeedProps) => {
  return (
    <div className="feed-container">
      {props.thisUser?.posts.map((post: PostType, index) => {
        return (
          <div key={index} className="post-container">
            {post.content}
            

          </div>
        );
      })}
    </div>
  )
}

export default Feed