import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userImg from '../../assets/img/user.png'

const Users = (props) => {
  
 let getUsers = () => { if (props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      debugger
      props.setUsers(response.data.items)
    }
    )
  }
}
  

    return (
      <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map(el => {
          return (
           
            <section key={el.id} class={styles.container}>
              <img src={el.photos.small !== null ? el.photos.small : userImg} alt="" />
              {el.isFollowed 
                ? <button onClick={() => {props.follow(el.id)}}>Follow</button> 
                : <button onClick={() => {props.unfollow(el.id)}}>Unfollow</button>}
              <div>
                  <p>{el.userName}</p>
                  <p>{el.status}</p>
                  <p>{"el.location.city"}</p>
                  <p>{"el.location.country"}</p>
              </div>
            </section>
          )
      })}  
    
    </div>)
}

export default Users;