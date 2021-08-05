import React from 'react';

const Users = (props) => {
    return (
      props.users.map(el => {
          return (
            <section key={el.id}>
              <img src={el.img} alt="" />
              {el.isFollowed ? <button onClick={() => {props.follow(el.id)}}>Follow</button> : <button onClick={() => {props.unfollow(el.id)}}>Unfollow</button>}
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