import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Roboto_Mono } from 'next/font/google';
import OrbitDecal from '@/components/OrbitDecal';

export const metadata: Metadata = {
    title: 'meddaugh.xyz'
}

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

                <OrbitDecal size = {2000}/>
                <Footer/>

            </body>
        </html>
    )
}

export default RootLayout;