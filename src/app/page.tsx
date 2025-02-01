import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProjectGrid } from "@/components/project-grid"
import { AnimatedBackground } from "@/components/animated-background"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <Avatar className="w-32 h-32 mx-auto mb-4">
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/68031250?s=400&u=859500bbebc52782dc7c48d2e068441e9bb814f0&v=4"
                alt="Juan Botero"
              />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold text-white mb-2">Juan Botero 🧑🏻‍💻</h1>
            <p className="text-xl text-blue-300">Full Stack Developer</p>
          </header>

          <ProjectGrid />
        </div>
      </div>
    </div>
  )
}