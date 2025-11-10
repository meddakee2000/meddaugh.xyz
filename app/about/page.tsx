import TypingText from '@/components/TypingText';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'about • meddaugh.xyz'
}

const Page = () => {
    return (
        <>
            
            <img src = '/images/banner.png' width = {'auto'}/>

            <div className = 'bordered-item' style = {{padding: '30px 0px', textAlign: 'center'}}>
                
                <span style = {{fontSize: 40, fontWeight: 'bold'}}>
                    <TypingText text = 'Nice to meet you! 🙋‍♂️' speed = {40}/>
                </span>

            </div>

            <div className = 'bordered-item' style = {{padding: '30px', textAlign: 'center', fontSize: 18}}>
                
                I'm Keegan! I'm a junior software developer located in the United States. I've been studying various computer science fields for almost 6 years, and have developed a sophisticated development skillset. <br/><br/> While I'm always working on new things, my experience mainly lies in web technologies and app and/or service development using languages like HTML, JavaScript (or TypeScript), Python, and bash, including services like GitHub, Cloudflare, and Google Cloud.
            </div>

        </>
    )
}

export default Page;