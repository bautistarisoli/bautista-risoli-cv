import { Card } from "@/components/ui/card";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const contactMethods = [
  {
    type: "Email",
    value: "bautistarisoli@gmail.com",
    href: "mailto:bautistarisoli@gmail.com",
    icon: FiMail,
    color: "text-blue-500"
  },
  {
    type: "WhatsApp",
    value: "+54 223 537-9717",
    href: "https://wa.me/542235379717",
    icon: FaWhatsapp,
    color: "text-green-500"
  },
  {
    type: "LinkedIn",
    value: "Bautista Risoli",
    href: "https://www.linkedin.com/in/bautista-risoli-202b32296/",
    icon: FaLinkedin,
    color: "text-blue-600"
  },
  {
    type: "Instagram",
    value: "@bautirisoli_",
    href: "https://www.instagram.com/bautirisoli_/",
    icon: FaInstagram,
    color: "text-pink-500"
  }
];

export const ContactSection = () => {
  return (
    <Card className="bg-cv-content border-border/50 p-4 shadow-lg hover:shadow-xl transition-all duration-300">
      <h3 className="text-lg font-semibold text-cv-content-foreground mb-4 text-center">
        Contacto
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {contactMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <a
              key={method.type}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 rounded-lg bg-cv-sidebar/5 hover:bg-cv-accent/10 transition-all duration-200 hover:scale-105 group cursor-pointer"
            >
              <IconComponent className={`w-4 h-4 ${method.color} group-hover:scale-110 transition-transform`} />
              <div className="text-xs">
                <div className="font-medium text-cv-content-foreground">{method.type}</div>
                <div className="text-cv-text-light truncate">{method.value}</div>
              </div>
            </a>
          );
        })}
      </div>
    </Card>
  );
};