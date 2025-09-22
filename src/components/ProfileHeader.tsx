import profilePhoto from "@/assets/profile-photo.jpg";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <Card className="bg-gradient-to-r from-cv-sidebar to-cv-sidebar/90 text-cv-sidebar-foreground p-6 shadow-xl border-0">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Profile Photo */}
        <div className="relative">
          <div className="absolute inset-0 bg-cv-accent/20 rounded-full blur-xl"></div>
          <img
            src={profilePhoto}
            alt="Bautista Risoli"
            className="relative w-24 h-24 rounded-full object-cover border-4 border-cv-accent shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Name */}
        <h1 className="text-3xl font-bold text-cv-sidebar-foreground">Bautista Risoli</h1>
        
        {/* Profession */}
        <p className="text-cv-accent text-lg font-semibold flex items-center space-x-2">
          <GraduationCap className="w-5 h-5" />
          <span>Técnico en Comercialización</span>
        </p>
        
        {/* Age and Address side by side */}
        <div className="flex items-center justify-center space-x-8 text-sm">
          <div className="flex items-center space-x-2 text-cv-sidebar-foreground/90">
            <Calendar className="w-4 h-4 text-cv-accent" />
            <div>
              <div className="font-medium">23 años</div>
              <div className="text-xs opacity-80">01/08/2001</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-cv-sidebar-foreground/90">
            <MapPin className="w-4 h-4 text-cv-accent" />
            <div>
              <div className="font-medium">Mar del Plata</div>
              <div className="text-xs opacity-80">España 3081</div>
            </div>
          </div>
        </div>
        
        {/* Education Badge */}
        <div className="bg-cv-accent/20 border border-cv-accent/30 rounded-lg p-3 backdrop-blur-sm">
          <div className="text-cv-accent text-xs font-semibold mb-1">EDUCACIÓN</div>
          <div className="text-cv-sidebar-foreground text-sm font-medium">UNMDP</div>
          <div className="text-cv-sidebar-foreground/80 text-xs">2021 - 2024</div>
        </div>
      </div>
    </Card>
  );
};