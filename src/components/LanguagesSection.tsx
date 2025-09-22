import { Card } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Languages } from "lucide-react";

const languages = [
  { name: "Español", level: "Nativo", proficiency: 100 },
  { name: "Inglés", level: "Avanzado B2", proficiency: 85, institute: "Instituto CEM English" }
];

export const LanguagesSection = () => {
  return (
    <Card className="bg-cv-content border-border/50 p-3 shadow-lg hover:shadow-xl transition-all duration-300">
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex items-center justify-center space-x-2 cursor-pointer hover:bg-cv-accent/5 p-2 rounded-lg transition-all duration-200 group">
            <Languages className="w-4 h-4 text-cv-accent group-hover:scale-110 transition-transform" />
            <h3 className="text-base font-semibold text-cv-content-foreground">Idiomas</h3>
            <div className="text-xs text-cv-text-light opacity-70">Click para ver</div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-64 bg-cv-content border-cv-accent/20 shadow-xl">
          <div className="space-y-3">
            <h4 className="font-semibold text-cv-content-foreground text-center border-b border-cv-accent/20 pb-2">
              Competencias Lingüísticas
            </h4>
            {languages.map((lang) => (
              <div key={lang.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-cv-content-foreground">{lang.name}</span>
                  <span className="text-sm text-cv-accent bg-cv-accent-light px-2 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
                {lang.institute && (
                  <div className="text-xs text-cv-content-foreground/70 italic">{lang.institute}</div>
                )}
                <div className="w-full bg-cv-sidebar/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cv-accent to-cv-accent/80 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </Card>
  );
};