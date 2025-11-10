"use client";

import styles from './RedirectButton.module.css';
import TypingText from './TypingText';

interface RedirectButtonProps {
    text: string,
    url: string,
    src?: string
}

const RedirectButton = ({text, src, url}: RedirectButtonProps) => {

    const handleClick = () => {
        window.open(url)
    }

    if (src) {
        return (

            <div className = {`flex-centered bordered-item ${styles.RedirectButton}`} onClick = {handleClick}>
                <img src = {src} width = {25}/>
                <TypingText text = {text} speed = {50}/>
            </div>

        )
    } else {
        return (

            <div className = {`flex-centered bordered-item ${styles.RedirectButton}`} onClick = {handleClick}>
                <TypingText text = {text} speed = {50}/>
            </div>            

        )
    }

}

export default RedirectButton;