import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './PersonalInfo.module.css';

const PersonalInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <section className={styles.personalInfo}>
            <img src={props.profile.photos.large} alt=''/>
            Personal Info
        </section>
    )
};

export default PersonalInfo;