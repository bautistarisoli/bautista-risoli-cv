import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Cajero y Vendedor",
    company: "Santa, Kiosco",
    period: "Abr-Ago 2025",
    year: "2025",
    description: "Atención al cliente, manejo de caja y gestión de inventario"
  },
  {
    title: "Cajero Principal", 
    company: "Santa, Restaurante",
    period: "Temp 2024/25",
    year: "2024",
    description: "Responsable principal de caja y coordinación del área de cobros"
  },
  {
    title: "Encargado y Cajero",
    company: "La Diva, Almacén",
    period: "Mar-Dic 2023",
    year: "2023", 
    description: "Gestión integral del establecimiento y control de inventario"
  },
  {
    title: "Coordinador de Juego",
    company: "Ready, Laser Tag",
    period: "Temp 2022/23",
    year: "2022",
    description: "Coordinación de actividades recreativas y supervisión"
  },
  {
    title: "Camarero",
    company: "Santa, Restaurante", 
    period: "Temp 2021/22",
    year: "2021",
    description: "Atención al cliente y coordinación con cocina"
  },
  {
    title: "Personal de Limpieza",
    company: "Quba, Café de Mar",
    period: "Temp 2020/21", 
    year: "2020",
    description: "Mantenimiento y limpieza de instalaciones"
  }
];

export const ExperienceTimeline = () => {
  return (
    <Card className="bg-cv-content border-border/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <Briefcase className="w-6 h-6 text-cv-accent" />
        <h3 className="text-xl font-semibold text-cv-content-foreground">Experiencia Laboral</h3>
      </div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cv-accent/20 via-cv-accent to-cv-accent/20"></div>
        
        <div className="flex justify-between items-start space-x-4 overflow-x-auto pb-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center min-w-[180px] group">
              {/* Timeline dot */}
              <div className="relative z-10 w-4 h-4 bg-cv-accent rounded-full shadow-lg group-hover:scale-125 transition-transform duration-200 border-2 border-cv-content">
                <div className="absolute inset-1 bg-cv-content rounded-full"></div>
              </div>
              
              {/* Year */}
              <div className="mt-2 text-sm font-bold text-cv-accent bg-cv-accent-light px-2 py-1 rounded-full">
                {exp.year}
              </div>
              
              {/* Experience card */}
              <div className="mt-3 p-3 bg-cv-sidebar/5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-cv-accent/10">
                <h4 className="font-semibold text-sm text-cv-content-foreground text-center leading-tight">
                  {exp.title}
                </h4>
                <p className="text-xs text-cv-accent font-medium mt-1 text-center">
                  {exp.company}
                </p>
                <p className="text-xs text-cv-text-light mt-1 text-center">
                  {exp.period}
                </p>
                <p className="text-xs text-cv-content-foreground/70 mt-2 text-center leading-tight">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};