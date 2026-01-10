import"./globals.css";
export default function RootLayout({
    children,
}:{
    children:React.ReactNode;
}){
    return (
        <html lang="en">
            <body className="min-h-screen bg-cyan-300 py-8 font-sans">
                {children}
            </body>
        </html>
    );
}