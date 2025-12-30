import type { Metadata } from 'next';
import TypingText from '@/components/TypingText';

export const metadata: Metadata = {
    title: 'mobile • meddaugh.xyz'
}

const Mobile = () => {
    return (

        <div className = 'flex-centered' style = {{flexDirection: 'column'}}>
            <img src = '/icons/ui/question.svg' width = {'75'} style = {{paddingBottom: 15}}/>
            <span style = {{fontWeight: 'bold', fontSize: 35}}>
                <TypingText text = 'Uh oh!' speed = {40}/>
            </span>
            <span style = {{paddingTop: 15, textAlign: 'center', width: '90vw'}}>
                Mobile devices currently aren't supported.
            </span>
        </div>

    )
}

export default Mobile;