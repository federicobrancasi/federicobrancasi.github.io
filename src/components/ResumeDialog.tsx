import React from 'react';
import { Download } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ResumeDialogProps {
  children: React.ReactNode;
}

const resumeOptions = [
  {
    title: 'Professional',
    subtitle: 'Nice design',
    href: '/Federico_Brancasi_Resume_Professional.pdf',
    preview: '/resume-preview-professional.png',
  },
  {
    title: 'Standard',
    subtitle: 'ATS friendly',
    href: '/Federico_Brancasi_Resume_Standard.pdf',
    preview: '/resume-preview-standard.png',
  },
];

export const ResumeDialog: React.FC<ResumeDialogProps> = ({ children }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[90vw] sm:max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0a0a0a] border-portfolio-muted/20">
        <DialogHeader>
          <DialogTitle className="text-portfolio-primary text-center">
            Download Resume
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4">
          {resumeOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 sm:gap-3 p-2 sm:p-4 rounded-lg border border-portfolio-muted/20 bg-[#111111] hover:bg-[#1a1a1a] hover:border-portfolio-primary/30 transition-all duration-200"
            >
              <div className="relative w-full aspect-[8.5/11] rounded-md overflow-hidden border border-portfolio-muted/10">
                <img
                  src={option.preview}
                  alt={`${option.title} resume preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex flex-col items-center gap-0.5 w-full">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-medium text-portfolio-primary">
                    {option.title}
                  </h3>
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-portfolio-muted group-hover:text-portfolio-primary transition-colors" />
                </div>
                <p className="text-[10px] sm:text-xs text-portfolio-muted">
                  {option.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
