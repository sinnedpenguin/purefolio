import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import projectsData from "../data/projects.json";
import { Separator } from './ui/separator';
import { SimpleIcon } from './simple-icons';

type Technology = {
  name: string
  icon: string
}

type Project = {
  name: string
  description: string
  repository: string
  demo: string
  technologies?: Technology[]
}

export default function Projects() {
  const projects = projectsData as Project[];

  return (
    <div className="w-full mx-auto md:w-[40vw]">
      {projects.length > 0 && (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-2">
          Projects
        </h3>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map(project => (
        <Card key={project.repository} className="flex flex-col h-full justify-between">
          <CardHeader>
            <CardTitle>{project.name}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center flex-wrap gap-7">
          <Separator />
            {project.technologies && project.technologies.map(tech => (
              <div key={tech.name} className="flex flex-col items-center">
                <SimpleIcon icon={tech.icon} size={24} />
              </div>
            ))}
          <Separator />
          </CardContent>
          <div className="flex flex-col justify-center items-center mb-4">
            <a 
              href={project.repository} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-muted-foreground mt-2 hover:underline"
            >
              GitHub Repository
            </a>
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-muted-foreground mt-2 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </Card>
      ))}
      </div>
    </div>
  )
}