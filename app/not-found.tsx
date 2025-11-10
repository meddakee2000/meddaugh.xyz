import type { Metadata } from 'next';
import Lennies from '@/components/Lennies';
import TypingText from '@/components/TypingText';

export const metadata: Metadata = {
    title: '404 • meddaugh.xyz'
}

const notFound = () => {
    return (
        <>

            <Lennies/>

            <div className = 'flex-centered bordered-item' style = {{fontSize: 30, fontWeight: 'bold', flexDirection: 'column', padding: '30px 0px'}}>
                <img src = '/icons/question.svg' width = {60} style = {{paddingBottom: 10}}/>
                <TypingText text = '404 - Item Not Found!' speed = {40}/>
            </div>

            <Lennies/>

        </>
    )
}

export default notFound;