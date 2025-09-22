import profilePhoto from "@/assets/profile-photo.jpg";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, GraduationCap } from "lucide-react";

export const ProfileHeader = () => {
  return (
    <Card className="bg-gradient-to-r from-cv-sidebar to-cv-sidebar/90 text-cv-sidebar-foreground p-4 shadow-xl border-0">
      <div className="flex items-center justify-center space-x-6">
        {/* Profile Photo */}
        <div className="relative">
          <div className="absolute inset-0 bg-cv-accent/20 rounded-full blur-xl"></div>
          <img
            src={profilePhoto}
            alt="Bautista Risoli"
            className="relative w-16 h-16 rounded-full object-cover border-3 border-cv-accent shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Main Info */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-cv-sidebar-foreground">Bautista Risoli</h1>
          <div className="flex items-center justify-center space-x-3 text-cv-accent text-sm font-semibold">
            <div className="flex items-center space-x-1">
              <GraduationCap className="w-4 h-4" />
              <span>Técnico en Comercialización</span>
            </div>
            <span className="text-cv-sidebar-foreground/60">•</span>
            <span className="text-xs bg-cv-accent/20 px-2 py-1 rounded-full">UNMDP 2021-2024</span>
          </div>
        </div>
        
        {/* Age and Address */}
        <div className="flex space-x-4 text-xs">
          <div className="flex items-center space-x-1 text-cv-sidebar-foreground/90">
            <Calendar className="w-3 h-3 text-cv-accent" />
            <div>
              <div className="font-medium">23 años</div>
              <div className="opacity-80">01/08/2001</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-1 text-cv-sidebar-foreground/90">
            <MapPin className="w-3 h-3 text-cv-accent" />
            <div>
              <div className="font-medium">Mar del Plata</div>
              <div className="opacity-80">España 3081</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};