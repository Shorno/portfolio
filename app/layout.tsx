import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {ThemeProvider} from "@/components/theme-provider";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'Shorno | Portfolio',
    description: 'Personal portfolio and showcase of projects by Shorno',
};

const navItems = [
    {name: "About", link: "#about"},
    {name: "Skills", link: "#skills"},
    {name: "Experience", link: "#experience"},
    {name: "Projects", link: "#projects"},
    {name: "Contact", link: "#contact"},
];

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} `}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey={"theme"}

        >
            <FloatingNav navItems={navItems}/>
            {children}
        </ThemeProvider>

        </body>
        </html>
    );
}
