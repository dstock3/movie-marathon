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
  const [fillColor, setFillColor] = useState("")

  useEffect(()=> {
    let postArray = []
    for (let i = 0; i < props.users.length; i++) {
      for (let x = 0; x < props.users[i].posts.length; x++) {
        let post: any = props.users[i].posts[x]

        postArray.push({
          id: uniqueid(),
          handle: props.users[i].handle, 
          content: post.content, 
          date: post.date,
          likes: post.likes
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

          setFillColor(thisTheme.text)

        }
      }
    }
  }, [props.thisStyle])

  const clickHandler = (post:Post):void => {
    /*need to do a POST request once API is developed:
      -add like to corresponding post
      -notify the author that a user has liked their post
    */

    console.log(props.thisUser?.handle + " likes " + post.content)
  }

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
            <div className="post-panel">
              <div className="likes-container">
                <svg className="likes-icon" onClick={()=>clickHandler(post)}xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                  <path fill={fillColor} d="m12 21-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4 2 9.3 2 8.15 2 5.8 3.575 4.225 5.15 2.65 7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55 1.175-.55 2.475-.55 2.35 0 3.925 1.575Q22 5.8 22 8.15q0 1.15-.387 2.25-.388 1.1-1.363 2.412-.975 1.313-2.625 2.963-1.65 1.65-4.175 3.925Zm0-2.7q2.4-2.15 3.95-3.688 1.55-1.537 2.45-2.674.9-1.138 1.25-2.026.35-.887.35-1.762 0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662-1 .663-1.375 1.688h-1.9q-.375-1.025-1.375-1.688-1-.662-2.175-.662-1.5 0-2.5 1t-1 2.5q0 .875.35 1.762.35.888 1.25 2.026.9 1.137 2.45 2.674Q9.6 16.15 12 18.3Zm0-6.825Z"/>
                </svg>
                <div className="post-likes">{post.likes}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Feed