import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { projectEntries } from '@/content/profile';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const projectsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  url: 'https://branca.si/projects',
  name: 'Projects by Federico Brancasi',
  description:
    'Selected engineering and research projects by Federico Brancasi across model optimization, developer tooling, embedded machine learning, and technical education.',
  hasPart: projectEntries.map((project) => ({
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: `https://branca.si/projects#${project.slug}`,
    keywords: project.stack,
    sameAs: project.links?.map((link) => link.url),
  })),
};

const Projects: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="Projects | Federico Brancasi"
        description="Selected engineering and research projects by Federico Brancasi across model optimization, developer tooling, embedded machine learning, and technical education."
        path="/projects"
        structuredData={projectsStructuredData}
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

          <p className="text-sm uppercase tracking-[0.25em] text-portfolio-muted mb-4">Projects</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-[1.1] pb-1 mb-4">
            Selected work
          </h1>
          <p className="text-base sm:text-lg text-portfolio-muted leading-relaxed max-w-3xl">
            A closer look at the products, research tools, and educational resources I have built, including the
            problems behind them and the results they produced.
          </p>
        </motion.div>

        <section className="space-y-8" aria-label="Selected projects">
          {projectEntries.map((project, index) => (
            <motion.article
              key={project.slug}
              id={project.slug}
              aria-labelledby={`${project.slug}-title`}
              initial={createInitialProps()}
              animate={createAnimationProps(1, getAnimationDelay(index + 1))}
              className="glass rounded-2xl border border-portfolio-muted/15 p-6 sm:p-8 scroll-mt-8"
            >
              <header className="mb-8">
                <p className="text-sm uppercase tracking-[0.18em] text-portfolio-muted mb-3">
                  {project.category} · {project.period}
                </p>
                <h2
                  id={`${project.slug}-title`}
                  className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-4"
                >
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-portfolio-muted leading-relaxed max-w-3xl">
                  {project.summary}
                </p>
              </header>

              <div className="grid gap-4 lg:grid-cols-2 mb-6">
                <section className="rounded-xl border border-portfolio-muted/10 bg-background/20 p-5">
                  <h3 className="text-lg font-medium text-portfolio-primary mb-3">The challenge</h3>
                  <p className="text-sm text-portfolio-muted leading-relaxed">{project.challenge}</p>
                </section>
                <section className="rounded-xl border border-portfolio-muted/10 bg-background/20 p-5">
                  <h3 className="text-lg font-medium text-portfolio-primary mb-3">My role</h3>
                  <p className="text-sm text-portfolio-muted leading-relaxed">{project.role}</p>
                </section>
              </div>

              <div className="grid gap-4 lg:grid-cols-2 mb-6">
                <section className="rounded-xl border border-portfolio-muted/10 bg-background/20 p-5">
                  <h3 className="text-lg font-medium text-portfolio-primary mb-3">What I built</h3>
                  <ul className="space-y-3 text-sm text-portfolio-muted leading-relaxed">
                    {project.build.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="rounded-xl border border-portfolio-muted/10 bg-background/20 p-5">
                  <h3 className="text-lg font-medium text-portfolio-primary mb-3">Outcome</h3>
                  <ul className="space-y-3 text-sm text-portfolio-muted leading-relaxed">
                    {project.outcome.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary/80 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="flex flex-col gap-5 border-t border-portfolio-muted/10 pt-6">
                <div>
                  <h3 className="text-sm uppercase tracking-[0.18em] text-portfolio-muted mb-3">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-portfolio-muted/20 px-3 py-1 text-xs text-portfolio-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((entry) => (
                      <Button key={entry.url} asChild variant="outline" className="bg-transparent">
                        <a href={entry.url} target="_blank" rel="noopener noreferrer">
                          {entry.label}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
