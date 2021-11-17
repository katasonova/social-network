import React from 'react';
import styles from './Users.module.css';
import userImg from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';
import * as axios from 'axios';

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
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {withCredentials: true, headers: {
                    'API-KEY': 'e4737d71-6698-4c69-9e00-4465ab31f2d9'
                }
            }).then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(el.id)
                    }
                  })

                }}>Unfollow</button> 
                : <button onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, null, {withCredentials: true, headers: {
                    'API-KEY': 'e4737d71-6698-4c69-9e00-4465ab31f2d9'
                }}).then(response => {
                    if (response.data.resultCode === 0) {
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