import React from 'react'

type PostType = {
  date: string
  content: string
}

type FeedProps = {
  thisStyle: React.CSSProperties,
  thisUser?: {
    handle: string,
    login: string,
    theme: string,
    posts: PostType
  }
}

const Feed = (props: FeedProps) => {
  return (
    <div className="feed-container">
      {props.thisUser?.posts.map((post: PostType, index) => {
        return (
          <div className="post-container">

          </div>
        );
      })}
    </div>
  )
}

export default Feed