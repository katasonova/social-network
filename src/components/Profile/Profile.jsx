import React from 'react';
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJuQSiMfXlhyoh63BEzP_YvcCHLPC_Cf-Aj6JgiDsRSzVg7I7p&usqp=CAU'/>
            <PersonalInfo/>
            <PostsContainer store={props.store}/>
        </>
    );
}

export default Profile;