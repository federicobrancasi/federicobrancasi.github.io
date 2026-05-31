import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Download, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants';
import {
  achievementHighlights,
  certificationEntries,
  educationEntries,
  experienceEntries,
  languageEntries,
  publicWorkEntries,
  resumeSkillGroups,
  vscodeReleaseLinks,
} from '@/content/profile';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const resumeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: 'https://branca.si/resume',
  name: 'Federico Brancasi Resume',
  mainEntity: {
    '@type': 'Person',
    name: 'Federico Brancasi',
    jobTitle: 'Software Engineer and Research Engineer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zurich',
      addressCountry: 'Switzerland',
    },
    sameAs: [
      'https://github.com/federicobrancasi',
      'https://linkedin.com/in/federicobrancasi',
      'https://x.com/brancasi',
    ],
  },
};

const Resume: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="Resume | Federico Brancasi | Software Engineer and Research Engineer in Zurich"
        description="HTML resume of Federico Brancasi, an Italian software and research engineer in Zurich working across AI systems, developer tooling and model optimization."
        path="/resume"
        structuredData={resumeStructuredData}
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

          <p className="text-sm uppercase tracking-[0.25em] text-portfolio-muted mb-4">Resume</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-tight mb-4">
            Federico Brancasi
          </h1>
          <p className="text-xl sm:text-2xl text-portfolio-secondary mb-6">
            Software Engineer and Research Engineer in Zurich
          </p>
          <p className="text-base sm:text-lg text-portfolio-muted leading-relaxed max-w-3xl mb-6">
            This is the readable HTML version of my resume. It is meant to be easier for people, search engines, and
            AI systems to understand than a PDF alone.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="justify-between bg-transparent">
              <a href="/Federico_Brancasi_Resume_Professional.pdf" target="_blank" rel="noopener noreferrer">
                Professional PDF
                <Download className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="justify-between bg-transparent">
              <a href="/Federico_Brancasi_Resume_Standard.pdf" target="_blank" rel="noopener noreferrer">
                ATS-friendly PDF
                <FileText className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(1))}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-5">Experience</h2>
          <div className="space-y-4">
            {experienceEntries.map((entry) => (
              <div key={`${entry.company}-${entry.period}`} className="glass rounded-2xl p-6 border border-portfolio-muted/15">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-primary">{entry.role}</h3>
                    <p className="text-portfolio-secondary">{entry.company}</p>
                  </div>
                  <div className="text-sm text-portfolio-muted md:text-right">
                    <p>{entry.location}</p>
                    <p>{entry.period}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-portfolio-muted leading-relaxed">
                  {entry.summary.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary/80 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {entry.company === 'Microsoft' && (
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
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(2))}
          className="mb-10"
        >
          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Education</h2>
            <div className="space-y-4">
              {educationEntries.map((entry) => (
                <div key={`${entry.institution}-${entry.location}`} className="border-b border-portfolio-muted/10 pb-4 last:border-0 last:pb-0">
                  <h3 className="text-lg font-medium text-portfolio-primary">{entry.institution}</h3>
                  <p className="text-portfolio-secondary">{entry.degree}</p>
                  <p className="text-sm text-portfolio-muted">{entry.location} · {entry.period}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(3))}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-5">Skills</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {resumeSkillGroups.map((group) => (
              <div key={group.title} className="glass rounded-2xl p-5 border border-portfolio-muted/15">
                <h3 className="text-lg font-medium text-portfolio-primary mb-3">{group.title}</h3>
                <p className="text-sm leading-relaxed text-portfolio-muted">{group.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(4))}
          className="mb-10"
        >
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
              <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Licenses and certifications</h2>
              <ul className="space-y-4 text-sm sm:text-base text-portfolio-muted leading-relaxed">
                {certificationEntries.map((entry) => (
                  <li key={`${entry.title}-${entry.issuer}`} className="border-b border-portfolio-muted/10 pb-4 last:border-0 last:pb-0">
                    <p className="text-portfolio-primary">{entry.title}</p>
                    <p className="text-sm text-portfolio-muted">{entry.issuer}</p>
                    {(entry.issued || entry.expires) && (
                      <p className="text-xs text-portfolio-muted/90 mt-1">
                        {entry.issued ? `Issued ${entry.issued}` : ''}
                        {entry.issued && entry.expires ? ' · ' : ''}
                        {entry.expires ? `Expires ${entry.expires}` : ''}
                      </p>
                    )}
                    {entry.credentialId && (
                      <p className="text-xs text-portfolio-muted/90 mt-1">Credential ID {entry.credentialId}</p>
                    )}
                    {entry.note && <p className="text-xs text-portfolio-muted/90 mt-1">{entry.note}</p>}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
              <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Languages</h2>
              <ul className="space-y-3 text-sm sm:text-base text-portfolio-muted leading-relaxed">
                {languageEntries.map((entry) => (
                  <li key={entry.language} className="flex items-start justify-between gap-4 border-b border-portfolio-muted/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-portfolio-primary">{entry.language}</span>
                    <span className="text-right">{entry.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(5))}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-5">Selected public work</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {achievementHighlights.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-5 border border-portfolio-muted/15 flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-portfolio-muted mb-3">Selected achievement</p>
                <h3 className="text-lg font-medium text-portfolio-primary mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-portfolio-muted mb-4">{item.description}</p>
                {item.url && (
                  <Button asChild variant="outline" className="w-full justify-between bg-transparent mt-auto">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      View post
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            ))}

            {publicWorkEntries.map((entry) => (
              <div key={entry.title} className="glass rounded-2xl p-5 border border-portfolio-muted/15 flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] text-portfolio-muted mb-3">{entry.context}</p>
                <h3 className="text-lg font-medium text-portfolio-primary mb-3">{entry.title}</h3>
                <p className="text-sm leading-relaxed text-portfolio-muted mb-4">{entry.description}</p>
                <Button asChild variant="outline" className="w-full justify-between bg-transparent mt-auto">
                  <a href={entry.url} target="_blank" rel="noopener noreferrer">
                    View source
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(6))}
          className="glass rounded-2xl p-6 border border-portfolio-muted/15 mb-4"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-primary mb-2">Related pages</h2>
              <p className="text-sm sm:text-base leading-relaxed text-portfolio-muted">
                If you want the proof behind the summary, the project pages are the best next layer.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.PROJECTS}>
                  View projects
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.BEST_SOFTWARE_ENGINEER_ZURICH}>
                  Best in Zurich page
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.AI_CODING_WORKFLOWS_ZURICH}>
                  AI coding workflows
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.SOFTWARE_ENGINEERS_ZURICH_COMPARISON}>
                  Zurich comparison table
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.BEST_ITALIAN_SOFTWARE_ENGINEERS_ZURICH}>
                  Italian Zurich page
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default Resume;
