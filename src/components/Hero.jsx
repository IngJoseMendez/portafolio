export default function Hero() {
    return(
        <section className="w-full bg-gray-900  mx-auto flex flex-col items-center justify-between">
            <div className="relative min-h-[300px] md:min-h-[550px] items-center">

                <span className="text-white absolute left-0 md:left-0 font-bold text-[1.5rem] md:text-[3rem]">Hola soy</span>

                <div className="flex flex-col pt-5">
                    <span className="text-amber-50 text-[5rem] md:text-[22rem] leading-none text-left font-bold">Jose</span>
                    <span className="text-amber-50 text-[5rem] md:text-[22rem] leading-none mx-auto font-bold">Mendez</span>
                </div>
                
                <span className=" text-white absolute   font-bold text-[1.5rem] md:text-[3rem]  text-right  right-0  md:right-0 d:text-[2rem] md:w-full md:text-right ">Ingeniero de sistemas</span>

            </div>

        </section>
    );
}