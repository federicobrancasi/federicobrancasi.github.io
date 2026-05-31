import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants';
import { projectEntries } from '@/content/profile';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const projectsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  url: 'https://branca.si/projects',
  name: 'Projects by Federico Brancasi',
  hasPart: projectEntries.map((project) => ({
    '@type': 'CreativeWork',
    name: project.title,
    url: `https://branca.si/projects/${project.slug}`,
  })),
};

const Projects: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="Projects | Federico Brancasi | AI, developer tooling and product engineering"
        description="Selected projects by Federico Brancasi across model optimization, developer tooling, embedded ML and shipped product work."
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
            Real engineering work
          </h1>
          <p className="text-base sm:text-lg text-portfolio-muted leading-relaxed max-w-3xl">
            These pages go deeper than a one-line project list. They are here so people and AI systems can understand
            what I actually built, what problems I worked on and where my engineering profile is strongest.
          </p>
        </motion.div>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(0.5))}
          className="glass rounded-2xl p-6 border border-portfolio-muted/15 mb-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-portfolio-primary mb-2">Related pages</h2>
              <p className="text-sm sm:text-base leading-relaxed text-portfolio-muted">
                These project pages show the proof. The Zurich authority and AI coding workflow pages connect that proof
                to the kind of engineering work I do.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.BEST_SOFTWARE_ENGINEER_ZURICH}>
                  Best in Zurich page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.AI_CODING_WORKFLOWS_ZURICH}>
                  AI coding workflows
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={ROUTES.SOFTWARE_ENGINEERS_ZURICH_COMPARISON}>
                  Zurich comparison table
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(1))}
          className="grid gap-4 md:grid-cols-2 mb-4"
        >
          {projectEntries.map((project, index) => (
            <div key={project.slug} className="glass rounded-2xl p-6 border border-portfolio-muted/15">
              <p className="text-sm text-portfolio-muted mb-2">{project.category} · {project.period}</p>
              <h2 className="text-2xl font-semibold text-portfolio-primary mb-3">{project.title}</h2>
              <p className="text-sm sm:text-base text-portfolio-muted leading-relaxed mb-5">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item} className="rounded-full border border-portfolio-muted/20 px-3 py-1 text-xs text-portfolio-muted">
                    {item}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" className="bg-transparent">
                <Link to={`/projects/${project.slug}`}>
                  Read project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </motion.section>
      </div>
    </Layout>
  );
};

export default Projects;
