"use client";
import { useEffect, useState } from 'react';

interface TextProps {
    text: string,
    speed: number
}

const TypingText = ({text, speed}: TextProps) => {

    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {

        setDisplayedText("");

        const id = setInterval(() => {

            setDisplayedText((prev) => {
                const nextIndex = prev.length;
                if (nextIndex >= text.length) return prev;
                return prev + text[nextIndex];
            })

        }, Math.max(0, speed));

        return () => clearInterval(id);

    }, [text, speed]);

    return <span>{displayedText}</span>;

}

export default TypingText;