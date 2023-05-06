// These styles apply to every route in the application
import './globals.css';

export const metadata = {
    title: 'CheckBook Effect',
    description: 'Tailwindcss Effect Checkbox',
};


export default function RootLayout({children}){
    return(
        <>
            <html>
                <body className='bg-neutral-100'>
                    {children}
                </body>
            </html>
        </>
    )
}