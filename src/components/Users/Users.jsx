import React from 'react';
import styles from './Users.module.css';
import userImg from '../../assets/img/user.png'

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = [];
    for (let i = 1; i <= pageCount; i += 1) {
      pages.push(i);
    }
  

    return (
      <div>
        <ul className={styles.pagination}>
        {pages.map(p => {
          return <li onClick={(e) => {props.onPageChange(p)}} className={p === props.currentPage ? styles.active : ''}>{p}</li>
        })}
        </ul>
      {props.users.map(el => {
          return (
            <section key={el.id} className={styles.container}>
              <img src={el.photos.small !== null ? el.photos.small : userImg} alt="" />
              {el.isFollowed 
                ? <button onClick={() => {props.follow(el.id)}}>Follow</button> 
                : <button onClick={() => {props.unfollow(el.id)}}>Unfollow</button>}
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

export default Users;