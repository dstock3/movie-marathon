import React, {useContext, useState, useEffect} from 'react'
import Loader from '../basic/Loader'
import { FriendsProps } from '../../Types.types'
import { ThemeContext } from '../context/ThemeContext'

const Friends = (props: FriendsProps) => {
  const [friends, setFriends] = useState<Array<string> | undefined>([])
  const [friendsContainerStyle, setFriendsContainerStyle] = useState<React.CSSProperties | Object>({})
  const [friendsHeadStyle, setFriendsHeadStyle] = useState<React.CSSProperties | Object>({})
  const theme = useContext(ThemeContext)
  useEffect(()=> {
    //API call to get friends

    //setFriends(friends)
    setFriends(props.thisUser?.friends)
  }, [])

  useEffect(()=> {
    let themes = Object.keys(theme)

    if (props.thisUser) {
      for (let i = 0; i < themes.length; i++) {
        if (themes[i] === props.thisUser.theme) {
          
          let thisTheme: any = theme[themes[i] as keyof Object]

          setFriendsContainerStyle({border: thisTheme.border})
          setFriendsHeadStyle({borderBottom: thisTheme.border})
        }
      }
    } 
  }, [props.thisStyle])

  return (
    <div className="friends-container" style={friendsContainerStyle}>
      <h3 className="friends-head" style={friendsHeadStyle}>
        Friends <span>({friends?.length})</span>
      </h3>
      {friends ?
        <div className="friends">
          {friends.length > 0 && friends.map((friend: string, index: number)=> {
            return (
              <div className="friend" key={index}>{friend}</div>
            )
          })}
        </div> : 
        <Loader thisUser={props.thisUser} thisStyle={props.thisStyle} isMini={true} /> 
      }
    </div>
  )
}

export default Friends