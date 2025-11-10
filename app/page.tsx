import TypingText from '@/components/TypingText';
import StackDisplay from '@/components/StackDisplay';
import RedirectButton from '@/components/RedirectButton';

const Page = () => {
    return (
        <>

            <div id = 'content'>

                <div className = 'flex-centered'>
                    {"( ͡°∩ ͡° ) ( ͡⚆ ͜ʖ ͡⚆ ) ( ͡°Ɛ ͡° ) ( ͡☭ ͜ʖ ͡☭ ) ( ͡ຈ ͜ʖ ͡ຈ )"}
                </div>
                
                <div id = 'title' className = 'bordered-item' style = {{padding: '30px 0px'}}>
                    <TypingText text = 'meddaugh.xyz 🧑‍💻' speed = {50}/>
                    <span id = 'description'>
                        <TypingText text = 'Keegan Meddaugh, Software Developer' speed = {25}/>
                    </span>
                </div>

                <div className = 'flex-centered bordered-item' style = {{padding: '30px 0px'}}>
                    <StackDisplay width = {35} gap = {40}/>
                </div>

                <div className = 'flex-centered' style = {{gap: 25}}>

                    <RedirectButton text = 'GitHub' src = '/icons/github.svg' url = 'https://github.com/rh3t'/>
                    <RedirectButton text = 'Discord' src = '/icons/discord.svg' url = 'https://discord.com/users/996964730252042320'/>
                    <RedirectButton text = 'Gmail' src = 'icons/gmail.svg' url = 'mailto:me@meddaugh.xyz'/>

                </div>

                <div className = 'flex-centered' style = {{gap: 25}}>

                    <RedirectButton text = 'Steam' src = '/icons/steam.svg' url = 'https://steamcommunity.com/id/rh3t_/'/>
                    <RedirectButton text = 'MonkeyType' src = '/icons/monkeytype.svg' url = 'https://monkeytype.com/profile/Rh3t_'/>
                    
                </div>

                <div className = 'flex-centered'>
                    {"( ͡° ͜ʟ ͡° ) ( ͡ಠ ͜ʖ ͡ಠ ) ( ͡° ͜⍨ ͡° ) ( ͡• ͜ʖ ͡• ) ( ͡º ͜ʖ ͡º )"}
                </div>

            </div>

        </>
    )
}

export default Page;