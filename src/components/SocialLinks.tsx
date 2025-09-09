import React from 'react';
import { Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/federicobrancasi",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub"
  },
  {
    href: "https://linkedin.com/in/federicobrancasi",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn"
  },
  {
    href: "https://x.com/federicobrancasi",
    icon: <Twitter className="w-5 h-5" />,
    label: "X (Twitter)"
  },
  {
    href: "mailto:federicobrancasi@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    label: "Email"
  }
];

const SocialLinks: React.FC = () => {
  const handleDownloadCV = () => {
    // In a real implementation, this would link to your actual CV file
    alert('CV download functionality would be implemented here with a link to your PDF file.');
    // Example: window.open('/path/to/federico-brancasi-cv.pdf', '_blank');
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Social Links */}
      <div className="flex justify-center items-center gap-8 flex-wrap animate-fade-in-up [animation-delay:1.2s] [animation-fill-mode:both]">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="group flex items-center justify-center w-12 h-12 md:w-14 md:h-14 glass rounded-full text-portfolio-muted transition-all duration-300 hover:text-portfolio-primary hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative group-hover:scale-110 group-hover:rotate-[5deg] transition-transform duration-300">
              {link.icon}
            </div>
          </a>
        ))}
      </div>

      {/* Download CV Button */}
      <button
        onClick={handleDownloadCV}
        className="group inline-flex items-center glass text-portfolio-primary px-8 py-4 rounded-full font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 hover:scale-102 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] relative overflow-hidden animate-fade-in-up [animation-delay:1.4s] [animation-fill-mode:both] shimmer"
      >
        <FileText className="w-[18px] h-[18px] mr-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:rotate-[5deg]" />
        Download CV
      </button>
    </div>
  );
};

export default SocialLinks;