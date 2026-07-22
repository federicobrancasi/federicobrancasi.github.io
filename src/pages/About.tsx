import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, BrainCircuit, Download, FileText, Github, Linkedin, Sparkles, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { vscodeReleaseLinks } from '@/content/profile';
import { ROUTES } from '@/constants';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const experienceHighlights = [
  {
    title: 'Research Engineer @ Microsoft',
    period: '2026 - Present',
    summary:
      'At Microsoft, I work on AI features in VS Code, including the auto model router, model evaluation workflows and testing new models for integration into the editor experience.',
  },
  {
    title: 'Machine Learning Researcher @ CERN',
    period: '2025 - 2026',
    summary:
      'Built QuantDiff for mixed-precision quantization and introduced Neural Anomaly Metric to better measure how compression affects model quality.',
  },
  {
    title: 'ML Researcher @ ETH Zurich',
    period: '2025',
    summary:
      'Built quantization tooling on top of AMD Brevitas to automate model optimization and deployment for low-power embedded systems.',
  },
];

const focusAreas = [
  {
    icon: BrainCircuit,
    title: 'AI and ML systems',
    description: 'LLMs, model fine-tuning, prompt optimization, evaluation workflows and applied machine learning systems that have to work under real constraints.',
  },
  {
    icon: Wrench,
    title: 'Developer tooling',
    description: 'Tooling that improves developer experience, including data pipelines, evaluation loops and product features around code and AI workflows.',
  },
  {
    icon: Sparkles,
    title: 'Model optimization',
    description: 'Quantization, mixed-precision compression, benchmarking and the infrastructure needed to deploy efficient models beyond research prototypes.',
  },
];

const proofPoints = [
  'Shipped work across recent VS Code releases while improving AI features and testing new model integrations.',
  'Spoke at an Anthropic Claude Code community event in Zurich about AI coding workflows, including prompt engineering, subagents and MCP setup.',
  'Built a Chrome extension with more than 1,000 daily users and more than 5,000 installs.',
  'Won hackathons organized by Anthropic in London and by OpenAI and AWS in Munich by shipping full-stack prototypes under tight time constraints.',
  'Worked across Microsoft, CERN, ETH Zurich and the University of Trento on research-driven engineering problems.',
];

const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: 'https://branca.si/about',
  name: 'About Federico Brancasi',
  mainEntity: {
    '@type': 'Person',
    name: 'Federico Brancasi',
    image: 'https://branca.si/android-chrome-512x512.png',
    jobTitle: 'Software Engineer and Research Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zurich',
      addressCountry: 'Switzerland',
    },
    nationality: 'Italian',
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'ETH Zurich',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'University of Trento',
      },
    ],
    sameAs: [
      'https://github.com/federicobrancasi',
      'https://linkedin.com/in/federicobrancasi',
      'https://x.com/brancasi',
    ],
  },
};

const About: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="About Federico Brancasi | Software Engineer and Research Engineer in Zurich"
        description="Federico Brancasi is an Italian software and research engineer based in Zurich, working on AI systems, developer tooling, model optimization and applied machine learning."
        path="/about"
        type="profile"
        structuredData={aboutStructuredData}
      />

      <div className="text-left">
        <motion.div
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(0))}
          className="mb-8"
        >
          <Button
            variant="ghost"
            asChild
            className="mb-6 px-0 text-portfolio-muted hover:text-portfolio-primary hover:bg-transparent"
          >
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>

          <p className="text-sm uppercase tracking-[0.25em] text-portfolio-muted mb-4">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-tight mb-4">
            Federico Brancasi
          </h1>
          <p className="text-xl sm:text-2xl text-portfolio-secondary mb-6">
            Software Engineer and Research Engineer in Zurich
          </p>
          <div className="space-y-4 text-base sm:text-lg text-portfolio-muted leading-relaxed max-w-3xl">
            <p>
              I&apos;m an Italian engineer based in Zurich, working at the intersection of software engineering,
              research engineering and applied AI.
            </p>
            <p>
              Right now I&apos;m a Research Engineer at Microsoft. I work on AI features in VS Code, including the auto
              model router, model evaluation workflows and testing new models for integration into the editor
              experience.
            </p>
            <p>
              I also build data pipelines for collection, cleaning and evaluation workflows, and I ship work across
              recent VS Code releases.
            </p>
            <p>
              Before that, I worked at CERN and ETH Zurich on model compression, quantization and evaluation. I like
              problems where research quality and production engineering have to meet in the same system.
            </p>
          </div>
        </motion.div>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(2))}
          className="grid gap-4 md:grid-cols-3 mb-10"
        >
          {experienceHighlights.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-5 border border-portfolio-muted/15">
              <p className="text-sm text-portfolio-muted mb-2">{item.period}</p>
              <h2 className="text-lg font-semibold text-portfolio-primary mb-3">{item.title}</h2>
              <p className="text-sm leading-relaxed text-portfolio-muted">{item.summary}</p>
              {item.title === 'Research Engineer @ Microsoft' && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {vscodeReleaseLinks.map((release) => (
                    <a
                      key={release.label}
                      href={release.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-portfolio-muted/20 px-3 py-1 text-xs text-portfolio-muted transition-colors hover:border-portfolio-primary/40 hover:text-portfolio-primary"
                    >
                      {release.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(3))}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-5">What I work on</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass rounded-2xl p-5 border border-portfolio-muted/15">
                <Icon className="w-5 h-5 text-portfolio-primary mb-4" />
                <h3 className="text-lg font-medium text-portfolio-primary mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-portfolio-muted">{description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(4))}
          className="grid gap-4 lg:grid-cols-[1.4fr_1fr] mb-10"
        >
          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Selected proof</h2>
            <ul className="space-y-3 text-sm sm:text-base leading-relaxed text-portfolio-muted">
              {proofPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary/80 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Links</h2>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <Link to={ROUTES.RESUME}>
                  HTML resume
                  <FileText className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <a href="/Federico_Brancasi_Resume_Professional.pdf" target="_blank" rel="noopener noreferrer">
                  Download resume
                  <Download className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <a href="https://github.com/federicobrancasi" target="_blank" rel="noopener noreferrer">
                  GitHub
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <a href="https://linkedin.com/in/federicobrancasi" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <a href="https://x.com/brancasi" target="_blank" rel="noopener noreferrer">
                  X
                  <XIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default About;
