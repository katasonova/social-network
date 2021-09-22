import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
  
  if (props.users.length === 0) {
    props.setUsers([
        {id: 1, userName: 'User1', status: 'Hello there!', location: {city: 'London', country: 'UK'}, isFollowed: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJEbNBW7WgMiqHuSO0OPtl8yxP218c-U-4Q&usqp=CAU'},
        {id: 2, userName: 'User2', status: 'Hello there!', location: {city: 'London', country: 'UK'}, isFollowed: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJEbNBW7WgMiqHuSO0OPtl8yxP218c-U-4Q&usqp=CAU'},
        {id: 3, userName: 'User3', status: 'Hello there!', location: {city: 'London', country: 'UK'}, isFollowed: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNJEbNBW7WgMiqHuSO0OPtl8yxP218c-U-4Q&usqp=CAU'},
      ])
  }
  

    return (
      props.users.map(el => {
          return (
            <section key={el.id} class={styles.container}>
              <img src={el.img} alt="" />
              {el.isFollowed 
                ? <button onClick={() => {props.follow(el.id)}}>Follow</button> 
                : <button onClick={() => {props.unfollow(el.id)}}>Unfollow</button>}
              <div>
                  <p>{el.userName}</p>
                  <p>{el.status}</p>
                  <p>{el.location.city}</p>
                  <p>{el.location.country}</p>
              </div>
            </section>
          )
      })  
    )
}

export default Users;