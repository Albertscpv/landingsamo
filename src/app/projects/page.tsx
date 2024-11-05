"use client";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Image from "next/image"
import Gargantua from "@/app/assets/gargantua.jpg"

interface project{
    name: string;
    description:string;
    html_url:string;
}

const ProjectPage = () =>{
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/samospace/repos")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, ([]))
    return(
        <>
        {projects.length >= 1? (
            <section>
                <h2>Conozca nuestros proyectos de desarrollo:</h2>
                <div>
                    <div className="grid md:grid-cols-[1fr_1fr] gap-5 text-[14px] my-6">
                        {projects.map((project : project) => (
                            <a key={project.name} href={project.html_url} target="_blank" className="p-2">
                                <div
                                    className="flex items-center p-4 justify-between bg-[#262626] border-2 border-white rounded-md min-h-[100px] "
                                >
                                    <div className="text-left ">
                                        <p className="font-bold text-2xl mb-4">{project.name}</p>
                                        <p className="text-lg">{project.description}</p>
                                    </div>
                                    {/* icon */}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        ) : (
            <Loader/>
        )
    }
        </>
    )
}
export default ProjectPage;
