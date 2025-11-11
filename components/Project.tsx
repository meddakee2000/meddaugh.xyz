"use client";

import styles from './Project.module.css';
import TypingText from './TypingText';

interface ProjectProps {
    title: string,
    desc: string,
    color: string,
    url: string,
    children: React.ReactNode
}

const Project = ({title, desc, url, color, children}: ProjectProps) => {

    const handleClick = (url: string) => {
        window.open(url);
    }

    return (

        <div className = {styles.Project} onClick = {() => handleClick(url)}>
            <div className = {styles.Title}>
                <span style = {{color: color}}>
                    <TypingText text = {title} speed = {50}/>
                </span>
                <div className = {styles.Icons}>
                    {children}
                </div>
            </div>
            {desc}
        </div>

    )   
}

export default Project