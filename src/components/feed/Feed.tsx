import React, { useContext, useEffect, useState } from 'react'
import uniqueid from 'uniqid'
import '../../style/feed.css'
import { ThemeContext } from '../context/ThemeContext'
import { FeedProps, Post } from '../../Types.types'

const Feed = (props: FeedProps) => {
  const [posts, setPosts] = useState<Array<Post> | null>(null)
  const [feedStyle, setFeedStyle] = useState<React.CSSProperties | Object>({})
  const [postStyle, setPostStyle] = useState<React.CSSProperties | Object>({})
  const theme = useContext(ThemeContext)

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

  useEffect(()=> {
    let themes = Object.keys(theme)

    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setPostStyle({
            ...postStyle, 
            ...{borderBottom: thisTheme.border},
            ...props.thisStyle 
          })

          setFeedStyle({
            ...feedStyle, 
            ...{borderLeft: thisTheme.border, borderRight: thisTheme.border}, 
            ...props.thisStyle})
        }
      }
    }
  }, [props.thisStyle])

  return (
    <div className="feed-container" style={feedStyle}>
      {posts?.sort(function compare(a, b) {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB.valueOf() - dateA.valueOf();
      })
      .map((post: Post, index)=> {
        return(
          <div key={post.id} className="post-container" style={postStyle}>
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