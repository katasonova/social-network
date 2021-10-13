import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userImg from '../../assets/img/user.png'

class Users extends React.Component {
   componentDidMount() {
     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
       this.props.setUsers(response.data.items)
     })
   }

   render() {
    return (
      <div>
      {this.props.users.map(el => {
          return (
            <section key={el.id} className={styles.container}>
              <img src={el.photos.small !== null ? el.photos.small : userImg} alt="" />
              {el.isFollowed 
                ? <button onClick={() => {this.props.follow(el.id)}}>Follow</button> 
                : <button onClick={() => {this.props.unfollow(el.id)}}>Unfollow</button>}
              <div>
                  <p>{el.name}</p>
                  <p>{el.status}</p>
                  <p>{"el.location.city"}</p>
                  <p>{"el.location.country"}</p>
              </div>
            </section>
          )
      })}  
    
    </div>)
   }
}

export default Users;