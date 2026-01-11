import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gray-900 w-full px-4 md:px-8 py-6">
            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
                <Link to="/" className="text-white text-2xl md:text-3xl font-bold tracking-tight hover:scale-105 transition-transform">JM</Link>
                <nav>
                    <a href="mailto:contact@example.com" className="text-white flex justify-center px-3 py-2 md:px-4 md:py-2 items-center gap-2 bg-transparent font-bold rounded-lg shadow-md border-2 border-amber-100
                        hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95 text-xs md:text-sm whitespace-nowrap">
                        Conversemos
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 md:size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </a>
                </nav>
            </div>
        </header>
    );
}