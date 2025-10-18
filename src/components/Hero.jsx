export default function Hero() {
    return (
        <section className="w-full bg-gray-900  mx-auto flex flex-col  justify-between pb-20">
            <div className="relative min-h-[300px] md:min-h-[550px] items-center">

                <span className="text-white absolute left-0 md:left-0 md:top-7 font-bold text-[1.5rem] md:text-[2rem]">Hola soy</span>

                <div className="flex flex-col pt-5 ">
                    <span className="text-amber-50 text-[5rem] md:text-[15rem] leading-none text-left font-bold md:pt-8">Jose</span>
                    <span className="text-amber-50 text-[5rem] md:text-[15rem] leading-none font-bold text-left">Mendez</span>
                </div>

                <span className=" text-white absolute font-bold text-[1.5rem] md:text-[2rem] text-right md:top-130 right-50 md:right-193 md:w-full md:text-right ">Ingeniero de sistemas</span>

                <div className="pt-20 flex justify-between items-center w-full">

                    <button className="text-white flex justify-center px-5 py-2 items-center gap-3 md:ml-28 bg-transparent border-2 border-amber-100 font-bold rounded-lg shadow-md
                    hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95 focus-ring-2 text-[1rem]">Mis proyectos

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>

                    <button className="text-white md:mr-30 flex justify-center px-5 py-2 items-center gap-3 bg-transparent font-bold rounded-lg shadow-md border-2 border-amber-100
                    hover:scale-105 hover:shadow-lg transition-all duration-200 active:scale-95 focus-ring-2 text-[1rem] ">curriculum

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>

                </div>

            </div>

            <div className="flex gap-1 items-center pt-15 justify-center">

                <a href=" https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" className=" text-white  hover:scale-110 transition-all duration-200 ">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-40 h-16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>



                </a>


                <a href=" https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1" className=" text-white  hover:scale-110 transition-all duration-200 items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-40 h-16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>

                </a>


                <a href=" https://www.linkedin.com/in/jose-mendez-3b4b25210/" className=" text-white  hover:scale-110 transition-all duration-200 items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-40 h-16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>

                </a>

            </div>

        </section>
    );
}