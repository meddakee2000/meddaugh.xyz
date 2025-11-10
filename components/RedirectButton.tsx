"use client";

import styles from './RedirectButton.module.css';

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
                {text}
            </div>

        )
    } else {
        return (

            <div className = {`flex-centered bordered-item ${styles.RedirectButton}`} onClick = {handleClick}>
                {text}
            </div>            

        )
    }

}

export default RedirectButton;