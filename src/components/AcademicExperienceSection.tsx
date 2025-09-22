import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { GraduationCap } from "lucide-react";

const academicProjects = [
  {
    title: "Plan de Marketing",
    company: "FRENOSOL",
    link: "https://www.frenosol.com.ar/"
  },
  {
    title: "Investigación de Mercado",
    company: "La Gloria de la Peregrina",
    link: "https://lagloriadelaperegrina.com.ar/"
  },
  {
    title: "Investigación del comportamiento del consumidor",
    company: "Mini Anima",
    link: "https://www.minianima.com.ar/?srsltid=AfmBOoruWbYM0EN-Th3dS5HtwbIYdLiwsmYl3ingAM7oBaL66sUytdT9"
  },
  {
    title: "Estrategia de Comunicación y Visibilidad",
    company: "Vencedores, club de futbol"
  }
];

export const AcademicExperienceSection = () => {
  return (
    <Card className="bg-cv-content border-border/50 p-3 shadow-lg hover:shadow-xl transition-all duration-300">
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center justify-center space-x-2 cursor-pointer hover:bg-cv-accent/5 p-2 rounded-lg transition-all duration-200 group">
            <GraduationCap className="w-4 h-4 text-cv-accent group-hover:scale-110 transition-transform" />
            <h3 className="text-base font-semibold text-cv-content-foreground">Experiencia académica</h3>
            <div className="text-xs text-cv-text-light opacity-70">Click para ver</div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-72 bg-cv-content border-cv-accent/20 shadow-xl">
          <div className="space-y-3">
            <h4 className="font-semibold text-cv-content-foreground text-center border-b border-cv-accent/20 pb-2">
              Proyectos Académicos
            </h4>
            {academicProjects.map((project, index) => (
              <div key={index} className="space-y-2 p-2 rounded-lg hover:bg-cv-sidebar/5 transition-colors">
                <div className="space-y-1">
                  <h5 className="text-sm font-medium text-cv-content-foreground">
                    {project.title}
                  </h5>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cv-accent hover:text-cv-accent/80 transition-colors text-sm font-medium underline decoration-cv-accent/30 hover:decoration-cv-accent"
                    >
                      {project.company}
                    </a>
                  ) : (
                    <p className="text-cv-accent text-sm font-medium">{project.company}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </Card>
  );
};