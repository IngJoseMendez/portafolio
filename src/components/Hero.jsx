export default function Hero() {
    return (
        <section className="w-full bg-gray-900 mx-auto flex flex-col justify-center pb-20 px-4 md:px-8">
            <div className="flex flex-col items-center md:items-start w-full max-w-6xl mx-auto">

                <div className="w-full flex flex-col md:block text-center md:text-left pt-10 md:pt-20">
                    <span className="text-white font-bold text-xl md:text-4xl mb-2 block animate-fade-in-down">Hola soy</span>

                    <div className="flex flex-col leading-none w-full">
                        <h1 className="text-amber-50 text-[3.5rem] sm:text-7xl md:text-[8rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem] font-bold tracking-tighter break-words animate-fade-in-up delay-100 leading-[0.8]">Jose</h1>
                        <h2 className="text-amber-50 text-[3.5rem] sm:text-7xl md:text-[8rem] lg:text-[11rem] xl:text-[13rem] 2xl:text-[15rem] font-bold tracking-tighter break-words animate-fade-in-up delay-200 leading-[0.8]">Mendez</h2>
                    </div>

                    <span className="text-white font-bold text-lg md:text-4xl mt-6 md:mt-4 block md:text-right w-full animate-fade-in delay-300">
                        Ingeniero de sistemas
                    </span>
                </div>

                <div className="pt-12 md:pt-20 flex flex-col md:flex-row gap-4 md:gap-8 justify-center md:justify-between items-stretch md:items-center w-full">

                    <a href="#projects" className="text-white flex justify-center px-6 py-3 w-full md:w-auto items-center gap-3 bg-transparent border-2 border-amber-100 font-bold rounded-lg shadow-md
                    hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95 text-sm md:text-base whitespace-nowrap">
                        Mis proyectos destacados
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>

                    <a href="https://drive.google.com/file/d/1iwOC997UtA1Yx6h-zX3FAzR6R6O3wHEK/view?usp=sharing" className="text-white flex justify-center px-6 py-3 w-full md:w-auto items-center gap-3 bg-transparent font-bold rounded-lg shadow-md border-2 border-amber-100
                    hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95 text-sm md:text-base whitespace-nowrap">
                        Curriculum
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </a>

                </div>

                <div className="flex gap-6 items-center pt-16 justify-center w-full">
                    <a href="https://www.instagram.com/jose.mendez1207/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 hover:text-amber-100 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </a>

                    <a href="https://github.com/IngJoseMendez" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 hover:text-amber-100 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/jose-alberto-m%C3%A9ndez-dom%C3%ADnguez-91b473257/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 hover:text-amber-100 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}