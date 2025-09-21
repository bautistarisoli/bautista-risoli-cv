import { ProfileHeader } from "@/components/ProfileHeader";
import { ContactSection } from "@/components/ContactSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Profile Header */}
        <ProfileHeader />
        
        {/* Interactive Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactSection />
          <LanguagesSection />
        </div>
        
        {/* Experience Timeline */}
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Index;