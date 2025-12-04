import type { Metadata } from 'next';
import TypingText from '@/components/TypingText';

export const metadata: Metadata = {
    title: 'mobile • meddaugh.xyz'
}

const Mobile = () => {
    return (

        <div className = 'flex-centered bordered-item' style = {{fontSize: 30, fontWeight: 'bold', flexDirection: 'column', padding: '30px 0px'}}>
            <img src = '/icons/ui/question.svg' width = {60} style = {{paddingBottom: 15}}/>
            <TypingText text = 'Mobile Device Detected!' speed = {40}/>
        </div>

    )
}

export default Mobile;