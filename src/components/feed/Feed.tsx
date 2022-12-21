import React, { useContext, useEffect, useState } from 'react'
import Suggestions from './Suggestions'
import Friends from './Friends'
import uniqueid from 'uniqid'
import '../../style/feed.css'
import { ThemeContext } from '../context/ThemeContext'
import { FeedProps, Post } from '../../Types.types'
import Loader from '../basic/Loader'
import PostContainer from './PostContainer'

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

  const clickHandler = (post:Post, pathId: string):void => {
    /*need to do a POST request once API is developed:
      -add like to corresponding post
      -notify the author that a user has liked their post
    */
    //if post is liked, change color of heart
    let themes = Object.keys(theme)

    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          let path = document.getElementById(pathId)
          if (path) {
            path.style.stroke = thisTheme.text
          }
        }
      }
    }

    console.log(props.thisUser?.handle + " likes " + post.content)
  }

  return (
    <React.Fragment>
    <Suggestions thisUser={props.thisUser} thisStyle={props.thisStyle}/>
    <Friends thisUser={props.thisUser} thisStyle={props.thisStyle}/>
    <div className="feed-container" style={feedStyle}>
      {!posts && <Loader thisUser={props.thisUser} thisStyle={props.thisStyle} isMini={true} />}
      {posts?.sort(function compare(a, b) {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateB.valueOf() - dateA.valueOf();
      })
      .map((post: Post, index)=> {
        return(
          <PostContainer post={post} clickHandler={clickHandler} postStyle={postStyle} fillColor={fillColor} pathId={index} />
        )
      })}
    </div>
    </React.Fragment>
  )
}

export default Feed