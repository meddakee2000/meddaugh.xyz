"use client";
import { useEffect } from 'react';

const MobileCheck = () => {

    useEffect(() => {
        if (screen.width <= 480 && location.pathname !== '/mobile') {
            location.href = '/mobile';
        }
    }, [])

    return null;

}

export default MobileCheck;