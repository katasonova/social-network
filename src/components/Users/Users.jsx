import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userImg from '../../assets/img/user.png'

class Users extends React.Component {
   componentDidMount() {
     axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
       this.props.setUsers(response.data.items)
       this.props.setTotalUsersCount(response.data.totalCount)
     })
   }

   onPageChange = (p) => {
    this.props.updateCurrentPage(p);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`).then(response => {
       this.props.setUsers(response.data.items)
     })
   }

   render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    const pages = [];
    for (let i = 1; i <= pageCount; i += 1) {
      pages.push(i);
    }
  

    return (
      <div>
        <ul className={styles.pagination}>
        {pages.map(p => {
          return <li onClick={(e) => {this.onPageChange(p)}} className={p === this.props.currentPage ? styles.active : ''}>{p}</li>
        })}
        </ul>
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