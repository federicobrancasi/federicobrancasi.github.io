import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { projectEntries } from '@/content/profile';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectEntries.find((entry) => entry.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="text-left">
          <Button
            variant="ghost"
            asChild
            className="mb-6 px-0 text-portfolio-muted hover:text-portfolio-primary hover:bg-transparent"
          >
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Link>
          </Button>
          <h1 className="text-4xl font-bold text-gradient mb-4">Project not found</h1>
          <p className="text-portfolio-muted">That project page does not exist.</p>
        </div>
      </Layout>
    );
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    url: `https://branca.si/projects/${project.slug}`,
    creator: {
      '@type': 'Person',
      name: 'Federico Brancasi',
    },
    about: project.stack,
    abstract: project.summary,
  };

  return (
    <Layout>
      <SEOHead
        title={`${project.title} | Federico Brancasi`}
        description={project.summary}
        path={`/projects/${project.slug}`}
        structuredData={structuredData}
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
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Link>
          </Button>

          <p className="text-sm uppercase tracking-[0.25em] text-portfolio-muted mb-4">{project.category}</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-portfolio-secondary mb-4">{project.period}</p>
          <p className="text-base sm:text-lg text-portfolio-muted leading-relaxed max-w-3xl">
            {project.summary}
          </p>
        </motion.div>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(1))}
          className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] mb-10"
        >
          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">The challenge</h2>
            <p className="text-sm sm:text-base text-portfolio-muted leading-relaxed">{project.challenge}</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">My role</h2>
            <p className="text-sm sm:text-base text-portfolio-muted leading-relaxed">{project.role}</p>
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(2))}
          className="grid gap-4 md:grid-cols-2 mb-10"
        >
          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">What I built</h2>
            <ul className="space-y-3 text-sm sm:text-base text-portfolio-muted leading-relaxed">
              {project.build.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary/80 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Outcome</h2>
            <ul className="space-y-3 text-sm sm:text-base text-portfolio-muted leading-relaxed">
              {project.outcome.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary/80 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(3))}
          className="glass rounded-2xl p-6 border border-portfolio-muted/15 mb-4"
        >
          <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-portfolio-muted/20 px-3 py-1 text-sm text-portfolio-muted">
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        {project.links && project.links.length > 0 && (
          <motion.section
            initial={createInitialProps()}
            animate={createAnimationProps(1, getAnimationDelay(4))}
            className="glass rounded-2xl p-6 border border-portfolio-muted/15 mb-4"
          >
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.map((entry) => (
                <a
                  key={entry.label}
                  href={entry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-portfolio-muted/20 px-4 py-2 text-sm text-portfolio-muted transition-colors hover:border-portfolio-primary/40 hover:text-portfolio-primary"
                >
                  {entry.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </Layout>
  );
};

export default ProjectDetail;
