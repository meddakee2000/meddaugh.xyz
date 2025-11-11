"use client";

import styles from './Footer.module.css';
import { useEffect, useState } from 'react';

const Footer = () => {

    const handleClick = (url: string) => {
        window.open(url);
    }

    const [commitMessage, setCommitMessage] = useState("");
    async function getRepoVersion() {
        const res = await fetch('https://api.github.com/repos/rh3t/Portfolio/commits?per_page=1');
        const data = await res.json();

        return data[0].commit.message;
    }

    useEffect(() => {
        getRepoVersion().then(msg => {
            setCommitMessage(msg);
        })
    }, []);

    return (

        <div className = {`flex-centered ${styles.Footer}`}>

            <div className = {`flex-centered ${styles.Version}`}>
                {commitMessage}
            </div>

            <div className = {`flex-centered ${styles.GitHub}`} onClick = {() => handleClick('https://github.com/rh3t/Portfolio')}>
                <img src = '/icons/social/github.svg' width = {20}/>
                Visit on GitHub!
            </div>

        </div>
    )

}

export default Footer;