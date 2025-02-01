"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { PinContainer } from "./ui/Pin";

const projects = [
    {
        id: 1,
        title: "FlightTickets",
        des: "Genera boletos de vuelo en formato PDF utilizando Node.js y Express, incorporando JWT, PDFKit, TypeORM y Bcrypt.",
        img: "https://th.bing.com/th/id/OIP._FLmFUDG-mKq-4JVOxL3FwHaFk?rs=1&pid=ImgDetMain",
        iconLists: ["/nodejs.svg", "/express.svg", "/jwt.svg", "/mysql.svg"],
        link: "https://github.com/Anvidneo/FlightTickets"
    },
    {
        id: 2,
        title: "Arch Hexagonal",
        des: "Implementación de la arquitectura hexagonal en una aplicación con Node.js y Express para fines de aprendizaje.",
        img: "https://th.bing.com/th/id/OIP.EoK-FONMZm8XzbV2SUAt9AHaEm?rs=1&pid=ImgDetMain",
        iconLists: ["/nodejs.svg", "/express.svg", "/ts.svg", "/mysql.svg"],
        link: "https://github.com/Anvidneo/arch-hexagonal"
    },
    {
        id: 3,
        title: "Product Management",
        des: "Aplicación de gestión de productos desarrollada con Laravel, que incluye autenticación y vistas utilizando Blade.",
        img: "https://img.freepik.com/psd-gratis/fondo-3d-soluciones-gestion-productos_23-2150668974.jpg?t=st=1738444767~exp=1738448367~hmac=0a5f14cb1bab0b195ded8f4ba6626bf87d6129ac08e5ecd51e92e91d456c778a&w=1380",
        iconLists: ["/laravel.svg", "/php.svg", "/js.svg", "/postgres.svg"],
        link: "https://github.com/Anvidneo/product-managment"
    },
    {
        id: 4,
        title: "Task API",
        des: "API para la gestión de tareas.",
        img: "https://th.bing.com/th/id/OIP.W1nwGHg-sRZckfvdrhhFOAHaGa?w=1200&h=1038&rs=1&pid=ImgDetMain",
        iconLists: ["/nodejs.svg", "/express.svg", "/js.svg"],
        link: "https://github.com/Anvidneo/taskApi"
    },
    {
        id: 5,
        title: "Task Management",
        des: "Aplicación de gestión de tareas construida con Laravel, que permite a los usuarios crear proyectos y tareas, así como agregar comentarios.",
        img: "https://snacknation.com/wp-content/uploads/2020/12/Best-Task-Management-Software-Platforms.png",
        iconLists: ["/laravel.svg", "/php.svg", "/mysql.svg"],
        link: "https://github.com/Anvidneo/taskManagement"
    }    
];

const RecentProjects = () => {
    return (
        <div className="py-20">
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
                {projects.map((item) => (
                <div
                    className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                    key={item.id}
                >
                    <PinContainer
                        title={item.title}
                        href={item.link}
                    >
                        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                            <div
                                className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                            >
                                <img src={item.img} alt="bgimg" />
                            </div>
                        </div>

                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {item.title}
                        </h1>

                        <p
                            className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                            style={{
                            color: "#BEC1DD",
                            margin: "1vh 0",
                            }}
                        >
                            {item.des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                            {item.iconLists.map((icon, index) => (
                                <div
                                    key={index}
                                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                    style={{
                                        transform: `translateX(-${5 * index + 2}px)`,
                                        backgroundColor: "rgb(10 26 46)"
                                    }}
                                >
                                    <img src={icon} alt="icon5" className="p-2" />
                                </div>
                            ))}
                            </div>

                            <div 
                                className="flex justify-center items-center"
                                onClick={() => window.open(item.link, "_blank")}
                            >
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                    Check Repository
                                </p>
                                <FaLocationArrow className="ms-3" color="#CBACF9" />
                            </div>
                        </div>
                    </PinContainer>
                </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;