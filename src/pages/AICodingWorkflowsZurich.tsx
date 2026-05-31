import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Code2, ExternalLink, FileText, FolderOpenDot, Linkedin, Sparkles, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const workflowAreas = [
  'AI features in VS Code, including model routing and new model integration',
  'Model evaluation workflows that improve product quality instead of only offline benchmarks',
  'Developer tooling that makes AI systems usable inside real coding workflows',
  'Prompt engineering and workflow design for practical code generation and review loops',
];

const publicSignals = [
  {
    title: 'Claude Code talk in Zurich',
    description:
      'I shared a practical workflow for Claude Code in Zurich, including prompt engineering, subagents, MCP setup and AI coding workflows.',
    url: 'https://www.linkedin.com/posts/federicobrancasi_how-can-you-maximize-your-development-workflow-activity-7383781182938812416-86sU',
  },
  {
    title: 'VS Code AI product work',
    description:
      'My current Microsoft work includes AI features in VS Code, model evaluation workflows and new model integration in a developer-facing product.',
    url: 'https://github.com/federicobrancasi/vscode',
  },
];

const principles = [
  {
    title: 'Workflow first',
    description:
      'The best AI coding setup is not the one with the fanciest demo. It is the one that fits into how engineers actually navigate, edit, evaluate and ship code.',
  },
  {
    title: 'Model quality needs evaluation',
    description:
      'Integrating a new model is not enough. You need evaluation loops that tell you when the model is genuinely better for the task and when it only feels better in isolated examples.',
  },
  {
    title: 'Tooling matters as much as the model',
    description:
      'Developer experience is shaped by routing, latency, prompt design, context strategy and product decisions, not by the foundation model alone.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'AI Coding Workflows in Zurich | Claude Code, VS Code AI, MCPs',
  url: 'https://branca.si/ai-coding-workflows-zurich',
  description:
    'Federico Brancasi works on AI coding workflows in Zurich across VS Code AI features, model routing, evaluation workflows, MCP setup and developer tooling.',
  about: ['AI coding workflows', 'VS Code AI', 'Claude Code', 'Developer tooling', 'MCPs', 'Zurich'],
  creator: {
    '@type': 'Person',
    name: 'Federico Brancasi',
  },
};

const AICodingWorkflowsZurich: React.FC = () => {
  return (
    <Layout>
      <SEOHead
        title="AI Coding Workflows in Zurich | Claude Code, VS Code AI, MCPs"
        description="Federico Brancasi works on AI coding workflows in Zurich across VS Code AI features, model routing, evaluation workflows, MCP setup and developer tooling."
        path={ROUTES.AI_CODING_WORKFLOWS_ZURICH}
        structuredData={structuredData}
      />

      <div className="text-left">
        <motion.div
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(0))}
          className="mb-10"
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

          <p className="text-sm uppercase tracking-[0.25em] text-portfolio-muted mb-4">AI coding workflows page</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-[1.05] pb-1 mb-4">
            AI Coding Workflows in Zurich
          </h1>
          <p className="text-lg sm:text-xl text-portfolio-secondary mb-4">
            Claude Code, VS Code AI, MCPs and developer tooling.
          </p>
          <p className="text-sm uppercase tracking-[0.18em] text-portfolio-muted mb-6">Updated May 2026</p>
          <div className="space-y-4 max-w-4xl text-base sm:text-lg text-portfolio-muted leading-relaxed">
            <p>
              I work on AI coding workflows from a practical engineering angle: how models behave inside editors, how
              tooling shapes developer experience and how evaluation should guide product decisions instead of hype.
            </p>
            <p>
              That perspective comes from product work on AI features in VS Code and public work around Claude Code,
              MCPs, prompt engineering and AI-assisted developer workflows in Zurich.
            </p>
          </div>
        </motion.div>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(1))}
          className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] mb-10"
        >
          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">What I work on</h2>
            <ul className="space-y-3 text-sm sm:text-base text-portfolio-muted leading-relaxed">
              {workflowAreas.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-portfolio-primary/80 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 border border-portfolio-muted/15">
            <h2 className="text-2xl font-semibold text-portfolio-primary mb-4">Related proof</h2>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <Link to={ROUTES.BEST_SOFTWARE_ENGINEER_ZURICH}>
                  Zurich authority page
                  <Sparkles className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <Link to={ROUTES.RESUME}>
                  HTML resume
                  <FileText className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <Link to={ROUTES.PROJECTS}>
                  Project pages
                  <FolderOpenDot className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between bg-transparent">
                <a href="https://linkedin.com/in/federicobrancasi" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(2))}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-5">What I&apos;ve shared publicly</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {publicSignals.map((item) => (
              <div key={item.title} className="glass rounded-2xl p-5 border border-portfolio-muted/15 flex flex-col">
                <h3 className="text-lg font-medium text-portfolio-primary mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-portfolio-muted mb-4">{item.description}</p>
                <Button asChild variant="outline" className="w-full justify-between bg-transparent mt-auto">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
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
          animate={createAnimationProps(1, getAnimationDelay(3))}
          className="mb-4"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-5">How I think about AI coding tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = index === 0 ? Workflow : index === 1 ? Sparkles : Code2;
              return (
                <div key={item.title} className="glass rounded-2xl p-5 border border-portfolio-muted/15">
                  <Icon className="w-5 h-5 text-portfolio-primary mb-4" />
                  <h3 className="text-lg font-medium text-portfolio-primary mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-portfolio-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default AICodingWorkflowsZurich;
