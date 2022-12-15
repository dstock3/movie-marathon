import {useState, useEffect} from 'react'

const Friends = () => {
  const [friends, setFriends] = useState<Array<Object>>([])

  useEffect(()=> {
    //API call to get friends

    //setFriends(friends) 
  }, [])

  return (
    <div className="friends-container">
      <h3>Friends</h3>
      <div className="friends">
        {friends && friends.map((friend: Object, index: number)=> {
          return (
            <div className="friend" key={index}></div>
          )
        })}
      </div>
    </div>
  )
}

export default Friends