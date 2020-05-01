import React from 'react';
import styles from './Profile.module.css';
import Posts from './Posts/Posts';
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = () => {
    return (
        <>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJuQSiMfXlhyoh63BEzP_YvcCHLPC_Cf-Aj6JgiDsRSzVg7I7p&usqp=CAU'/>
            <PersonalInfo />
            <Posts/>
        </>
    );
}

export default Profile;