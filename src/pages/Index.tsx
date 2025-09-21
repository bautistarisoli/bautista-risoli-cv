import { CVHeader } from "@/components/CVHeader";
import { CVSection, ExperienceItem, SkillItem } from "@/components/CVSection";
import { Briefcase, GraduationCap, Languages, User } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CVHeader />
            
            <div className="bg-cv-sidebar text-cv-sidebar-foreground p-8 space-y-6">
              {/* Idiomas */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 border-b border-cv-sidebar-foreground/20 pb-3">
                  <Languages className="w-5 h-5 text-cv-accent" />
                  <h3 className="text-lg font-semibold">Idiomas</h3>
                </div>
                <div className="space-y-2">
                  <SkillItem skill="Español" level="Nativo" />
                  <SkillItem skill="Inglés" level="B2 Avanzado" />
                </div>
              </div>

              {/* Información Personal */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 border-b border-cv-sidebar-foreground/20 pb-3">
                  <User className="w-5 h-5 text-cv-accent" />
                  <h3 className="text-lg font-semibold">Información Personal</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-cv-sidebar-foreground/80">Fecha de Nacimiento:</span>
                    <span>01/08/2001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cv-sidebar-foreground/80">Edad:</span>
                    <span>23 años</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 bg-cv-content space-y-6 p-8">
            {/* Educación */}
            <CVSection title="Educación" icon={<GraduationCap className="w-5 h-5" />}>
              <ExperienceItem
                title="Técnico en Comercialización"
                company="Universidad Nacional de Mar del Plata (UNMDP)"
                period="2021 - 2024"
                description="Formación técnica en estrategias comerciales, marketing y gestión empresarial."
              />
            </CVSection>

            {/* Experiencia Laboral */}
            <CVSection title="Experiencia Laboral" icon={<Briefcase className="w-5 h-5" />}>
              <div className="space-y-6">
                <ExperienceItem
                  title="Cajero y Vendedor"
                  company="Santa, Kiosco"
                  period="Abril 2025 - Agosto 2025"
                  description="Atención al cliente, manejo de caja y gestión de inventario en establecimiento comercial."
                />
                
                <ExperienceItem
                  title="Cajero Principal"
                  company="Santa, Restaurante"
                  period="Temporada 2024/25"
                  description="Responsable principal de caja, facturación y coordinación del área de cobros durante temporada alta."
                />
                
                <ExperienceItem
                  title="Encargado y Cajero Principal"
                  company="La Diva, Almacén Fiambrería"
                  period="Marzo 2023 - Diciembre 2023"
                  description="Gestión integral del establecimiento, control de inventario, atención al cliente y manejo de personal."
                />
                
                <ExperienceItem
                  title="Coordinador de Juego"
                  company="Ready, Laser Tag"
                  period="Temporada 2022/23"
                  description="Coordinación de actividades recreativas, atención al cliente y supervisión de equipos de entretenimiento."
                />
                
                <ExperienceItem
                  title="Camarero"
                  company="Santa, Restaurante"
                  period="Temporada 2021/22"
                  description="Atención al cliente en sector gastronómico, toma de pedidos y coordinación con cocina."
                />
                
                <ExperienceItem
                  title="Personal de Limpieza"
                  company="Quba, Café de Mar"
                  period="Temporada 2020/21"
                  description="Mantenimiento y limpieza de instalaciones en establecimiento gastronómico."
                />
              </div>
            </CVSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;