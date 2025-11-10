import './globals.css';
import Footer from '@/components/Footer';
import { Roboto_Mono } from 'next/font/google';
import OrbitDecal from '@/components/OrbitDecal';
import Navigation from '@/components/Navigation';

const font = Roboto_Mono({
    subsets: ['latin']
})

interface LayoutProps {
    children: React.ReactNode
}

const RootLayout = ({children}: LayoutProps) => {
    return (
        <html lang = 'en' className = {`${font.className} flex-centered`}>
            <body>

                {children}

                <Footer/>
                <Navigation/>
                <OrbitDecal size = {2000}/>

            </body>
        </html>
    )
}

export default RootLayout;