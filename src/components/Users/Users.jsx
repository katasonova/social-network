import React from 'react';
import styles from './Users.module.css';
import userImg from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';
import {usersAPI} from './../../api/api'

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
              <NavLink to={'/profile/' + el.id}>
                <img src={el.photos.small !== null ? el.photos.small : userImg} alt="" />
              </NavLink>
              {el.followed 
                ? <button onClick={() => {
                  usersAPI.unfollowUser(el.id).then(data => {
                    if (data.resultCode === 0) {
                      props.unfollow(el.id)
                    }
                  })

                }}>Unfollow</button> 
                : <button onClick={() => { 
                  usersAPI.followUser(el.id).then(data => {
                    if (data.resultCode === 0) {
                      props.follow(el.id)
                    }
                  })

                }}>Follow</button>}
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