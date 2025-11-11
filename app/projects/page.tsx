import type { Metadata } from 'next';
import Project from '@/components/Project';
import TypingText from '@/components/TypingText';
import RedirectButton from '@/components/RedirectButton';

export const metadata: Metadata = {
    title: 'projects • meddaugh.xyz'
}

const Page = () => {
    return (

        <>

            <div id = 'title' className = 'flex-centered bordered-item' style = {{padding: 30, flexDirection: 'row'}}>
                <TypingText text = 'Projects 🛠️' speed = {40}/>
            </div>

            <Project
                title = 'PinFluence'
                desc = 'PinFluence is a static imageboard with a layout similar to Pinterest. Created with Next.js and React.'
                color = '#fc7a57'
                url = 'https://google.com'
            >
            
                <img src = '/icons/react.svg'/>
                <img src = '/icons/typescript.svg'/>
                <img src = '/icons/nextjs.svg'/>
            
            </Project>

            <Project
                title = 'LynkNest'
                desc = 'Lynknest is a bulk link sharing tool that can be used for sharing a series of links with the world.'
                color = '#2b77ceff'
                url = 'https://google.com'
            >
            
                <img src = '/icons/nodejs.svg'/>
                <img src = '/icons/html.svg'/>
                <img src = '/icons/css.svg'/>
            
            </Project>

            <Project
                title = 'Mocha'
                desc = 'Mocha is a text based operating system built with the Python programming language.'
                color = '#ffee00ff'
                url = 'https://google.com'
            >
            
                <img src = '/icons/python.svg'/>
            
            </Project>

            <RedirectButton text = 'Older Projects' src = '/icons/ui/archive.svg' url = ''/>
        
        </>

    )
}

export default Page;