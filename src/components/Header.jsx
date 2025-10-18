export default function Header() {
    return (
        <header className="bg-gray-900 flex items-center p-3 w-full justify-between pb-10 pt-5">
            <h1 className="text-white text-[15px] md:text-2xl font-bold tracking-tight">JM</h1>
            <nav>
                <button className="text-white md:mr-50 flex justify-center px-3 py-3 items-center gap-8 bg-transparent font-bold rounded-lg shadow-md border-2 border-amber-100
                    hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95 focus-ring-2 text-[1rem] ">conversemos

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>

                </button>
            </nav>
        </header>
    );
}