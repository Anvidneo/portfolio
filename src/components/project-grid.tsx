"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"
import RecentProjects from "@/components/projects";

function calculateDuration(startDate: Date, endDate: Date | null = null): string {
    const end = endDate || new Date()
    const diffTime = Math.abs(end.getTime() - startDate.getTime())
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))

    let duration = ""
    if (diffYears > 0) {
        duration += `${diffYears} yr${diffYears > 1 ? "s" : ""}`
    }
    if (diffMonths > 0) {
        if (duration) duration += " "
        duration += `${diffMonths} mo${diffMonths > 1 ? "s" : ""}`
    }

    return duration
}

export function ProjectGrid() {
    const [copiedEmail, setCopiedEmail] = useState(false)
    const [copiedPhone, setCopiedPhone] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText("botero1400@gmail.com")
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
    }

    const copyPhone = () => {
        navigator.clipboard.writeText("+573192288710")
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
    }

    const experiences = [
        {
            company: "Domina Entrega Total",
            role: "Full-Stack Developer",
            startDate: new Date(2023, 1), // February 2023
            endDate: null, // Present
        },
        {
            company: "Konecta",
            role: "Developer",
            startDate: new Date(2021, 10), // November 2021
            endDate: new Date(2023, 1), // February 2023
        },
        {
            company: "Mercadeo Virtual",
            role: "Back End Developer",
            startDate: new Date(2021, 6), // July 2021
            endDate: new Date(2021, 10), // November 2021
        },
    ]

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
            {/* Presentación Principal */}
            <Card className="col-span-2 order-1 bg-gradient-to-br from-blue-600 to-teal-400 text-white border-none p-8">
                <h3 className="text-3xl font-bold mb-6 leading-tight">
                    👋🏼 Full-Stack developer with over 5 years of experience implementing efficient web solutions
                </h3>
                <div className="flex gap-2">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white"
                        onClick={() => window.open("https://github.com/Anvidneo", "_blank")}
                    >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white"
                        onClick={() => window.open("https://www.linkedin.com/in/juan-botero-c/", "_blank")}
                    >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                    </Button>
                    <Button
                        variant="secondary"
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white"
                        onClick={() => window.open("https://www.instagram.com/anvidcito/", "_blank")}
                    >
                        <Instagram className="w-4 h-4 mr-2" />
                        Instagram
                    </Button>
                </div>
            </Card>

            {/* Tech Stack */}
            <Card className="col-span-2 md:col-span- bg-[#0A1A2F] order-2 text-white border-none p-8">
                <div className="mb-6">
                    <p className="text-blue-300 mb-2">🚀 Currently learning Nest.js</p>
                    <h3 className="text-2xl font-bold">🛠️ Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "React", "Node.js", "Express", "NestJS", "PHP", "Laravel", "PostgreSQL", "MySQL", "AWS", "GCP", "Cloud Platform", "Git"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                            {tech}
                        </span>
                    ))}
                </div>
            </Card>

            {/* Experiencia */}
            <Card className="col-span-2 md:col-span- bg-[#0A1A2F] order-3 text-white border-none p-8">
                <h3 className="text-2xl font-bold mb-4">💼 Professional Experience</h3>
                <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div key={index} className="text-blue-300">
                        <p className="font-semibold text-white">
                            🏢 {exp.company}
                            <span className="text-sm ml-2 text-blue-300">
                            ({exp.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} -{" "}
                            {exp.endDate
                                ? exp.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
                                : "Present"}{" "}
                            · {calculateDuration(exp.startDate, exp.endDate)})
                            </span>
                        </p>
                        <p>{exp.role}</p>
                    </div>
                ))}
                </div>
            </Card>

            {/* Proyectos */}
            <Card className="col-span-2 order-4 bg-[#0A1A2F] text-white border-none p-8">
                <div className="mb-6">
                    <p className="text-blue-300 mb-2">🌟 Latest Projects</p>
                    <h3 className="text-2xl font-bold">🚀 Development Highlights</h3>
                </div>
                <div className="space-y-2">
                    <RecentProjects />
                </div>
            </Card>

            {/* Contact */}
            <Card className="col-span-2 order-5 bg-gradient-to-r from-blue-500 to-teal-400 text-white border-none p-8">
                <h3 className="text-3xl font-bold mb-4">🫱🏼‍🫲🏼 Let's work together on your next project</h3>
                <div className="flex gap-2 flex-wrap">
                <Button 
                    variant="secondary" 
                    onClick={copyEmail} 
                    className="bg-white/20 hover:bg-white/30 text-white"
                >
                    {copiedEmail ? "📋 ¡Copiado!" : "✉️ botero1400@gmail.com"}
                </Button>
                <Button
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 text-white"
                    onClick={copyPhone}
                >
                    {copiedPhone ? "📋 ¡Copiado!" : "📞 +57 319 228 8710"}
                </Button>
                </div>
            </Card>
        </div>
    )
}