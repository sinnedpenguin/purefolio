import { SimpleIcon } from './simple-icons';
import skillsData from '../data/skills.json';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Separator } from './ui/separator';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsData {
  technologies: Skill[];
  tools: Skill[];
}

export default function Skills() {
  const { technologies, tools } = skillsData as SkillsData;

  return (
    <div className="w-full mx-auto md:w-[40vw]">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-2">
        Skills
      </h3>
      <Card>
        <CardHeader>
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center flex-wrap min-h-0">
          {technologies.map((technology) => (
            <div key={technology.name} className="flex flex-col items-center">
              <SimpleIcon icon={technology.icon} size={24} />
              <p className="text-sm text-muted-foreground mt-2">{technology.name}</p>
            </div>
          ))}
          <Separator className="mt-3" />
        </CardContent>
        <CardHeader className="p-0 pb-6 px-6">
          <CardTitle>Tools</CardTitle>
        </CardHeader>
        <CardContent className="gap-4 flex justify-center flex-wrap min-h-0">
          {tools.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center">
              <SimpleIcon icon={tool.icon} size={24} />
              <p className="text-sm text-muted-foreground mt-2">{tool.name}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};