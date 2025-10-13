export default function Header() {
    return (
        <header className="bg-gray-900 flex items-center p-3 w-6xl justify-between pb-10">
            <h1 className="text-white text-[15px] md:text-2xl font-bold tracking-tight">JM</h1>
            <nav>
                <a href="#sobremi" className=" text-white  text-[15px] md:text-2xl ml-6 font-bold hover:underline hover:shadow-md " >Sobre Mi</a>
                <a href="#proyectos" className="text-white text-[15px] md:text-2xl ml-6 font-bold hover:underline">Proyectos</a>
                <a href="#contacto" className="text-white  text-[15px] md:text-2xl ml-6 font-bold hover:underline">Contacto</a>
            </nav>
        </header>
    );
}