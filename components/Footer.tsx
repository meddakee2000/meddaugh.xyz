"use client";
import data from '../metadata.json';
import styles from './Footer.module.css';

const Footer = () => {

    const handleClick = (url: string) => {
        window.open(url);
    }

    return (

        <div className = {`flex-centered ${styles.Footer}`}>

            <div className = {`flex-centered ${styles.Version}`}>
                {data.version}
            </div>

            <div className = {`flex-centered ${styles.GitHub}`} onClick = {() => handleClick('https://github.com/rh3t/Portfolio')}>
                <img src = '/icons/social/github.svg' width = {20}/>
                Visit on GitHub!
            </div>

        </div>
    )

}

export default Footer;