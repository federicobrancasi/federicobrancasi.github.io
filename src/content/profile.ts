export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string[];
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  period: string;
  category: string;
  summary: string;
  role: string;
  challenge: string;
  build: string[];
  outcome: string[];
  stack: string[];
  links?: ExternalLinkEntry[];
}

export interface ExternalLinkEntry {
  label: string;
  url: string;
}

export interface LanguageEntry {
  language: string;
  level: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  issued?: string;
  expires?: string;
  credentialId?: string;
  note?: string;
}

export interface PublicWorkEntry {
  title: string;
  description: string;
  context: string;
  url: string;
}

export interface AchievementEntry {
  title: string;
  description: string;
  url?: string;
}

export const vscodeReleaseLinks: ExternalLinkEntry[] = [
  {
    label: 'VS Code 1.122.1',
    url: 'https://github.com/microsoft/vscode/releases/tag/1.122.1',
  },
  {
    label: 'VS Code 1.122.0',
    url: 'https://github.com/microsoft/vscode/releases/tag/1.122.0',
  },
  {
    label: 'VS Code 1.121.0',
    url: 'https://github.com/microsoft/vscode/releases/tag/1.121.0',
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Microsoft',
    role: 'Research Engineer',
    location: 'Zurich, Switzerland',
    period: 'February 2026 - Present',
    summary: [
      'At Microsoft, I work on AI features in VS Code, including the auto model router, model evaluation workflows and testing new models for integration into the editor experience.',
      'I also build data pipelines for data collection, cleaning and evaluation workflows to support model development and product quality.',
      'I ship work across recent VS Code releases, including the latest stable releases.',
    ],
  },
  {
    company: 'CERN',
    role: 'Machine Learning Researcher',
    location: 'Geneva, Switzerland',
    period: 'August 2025 - February 2026',
    summary: [
      'Developed QuantDiff, an automated mixed-precision quantization framework that balances per-layer sensitivity against computational cost to hit target model-size budgets.',
      'Created Neural Anomaly Metric, an evaluation metric designed to better capture how quantization affects model quality.',
    ],
  },
  {
    company: 'ETH Zurich',
    role: 'Machine Learning Researcher',
    location: 'Zurich, Switzerland',
    period: 'January 2025 - July 2025',
    summary: [
      'Built a custom backend for AMD Brevitas to automate neural-network quantization and deployment on low-power embedded processors.',
      'Benchmarked quantization schemes with attention to non-linear operators and automatic network optimization for embedded deployments.',
    ],
  },
  {
    company: 'University of Trento',
    role: 'Research Assistant',
    location: 'Trento, Italy',
    period: 'February 2023 - July 2024',
    summary: [
      'Modernized Computational Logic course materials and helped develop a new textbook using knowledge-graph methods and technical visualizations.',
      'Supported a 30% increase in student pass rates through clearer materials and better teaching assets.',
    ],
  },
];

export const educationEntries: EducationEntry[] = [
  {
    institution: 'ETH Zurich',
    degree: 'Master in Computer Science',
    location: 'Zurich, Switzerland',
    period: 'September 2023 - January 2026',
  },
  {
    institution: 'University of Trento',
    degree: 'Master in Computer Science',
    location: 'Trento, Italy',
    period: 'September 2023 - January 2026',
  },
  {
    institution: 'Aalto University',
    degree: 'Master in Computer Science',
    location: 'Helsinki, Finland',
    period: 'September 2023 - January 2026',
  },
  {
    institution: 'Eotvos Lorand University',
    degree: 'Master in Computer Science',
    location: 'Budapest, Hungary',
    period: 'September 2023 - January 2026',
  },
  {
    institution: 'University of Trento',
    degree: 'Bachelor in Computer Science',
    location: 'Trento, Italy',
    period: 'September 2020 - September 2023',
  },
];

export const projectEntries: ProjectEntry[] = [
  {
    slug: 'deep-learning-book-and-visual-study-guide',
    title: 'Deep Learning Book and Visual Study Guide',
    period: '2024 - 2025',
    category: 'Open-source education',
    summary:
      'A free 100+ page deep learning study guide built with a university classmate, with 200+ custom illustrations designed to make neural networks, transformers and modern AI topics easier to understand.',
    role: 'Co-authored and designed the book, including the educational structure, written explanations and visual system.',
    challenge:
      'A lot of deep learning material is either too shallow to be useful or too dense to be intuitive. The goal was to create a resource that helps students actually understand the concepts instead of only memorizing formulas.',
    build: [
      'Built a comprehensive guide that moves from neural network basics to transformers and modern generative models.',
      'Created more than 200 custom TikZ illustrations to explain architectures, optimization and model mechanics visually.',
      'Structured the book as a progressive learning resource with guided explanations and open-source contribution paths.',
    ],
    outcome: [
      'Published a free and open-source deep learning resource with more than 100 GitHub stars and more than 20 forks.',
      'Turned a study project into a public educational asset that other students and practitioners can download, reuse and extend.',
    ],
    stack: ['LaTeX', 'TikZ', 'Technical writing', 'Deep learning', 'Educational design', 'Open source'],
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/federicobrancasi/Deep-Learning',
      },
      {
        label: 'Download PDF',
        url: 'https://github.com/federicobrancasi/Deep-Learning/blob/main/Deep_Learning.pdf',
      },
    ],
  },
  {
    slug: 'quantdiff-mixed-precision-framework',
    title: 'QuantDiff Mixed-Precision Framework',
    period: 'August 2025 - February 2026',
    category: 'Model optimization',
    summary:
      'An automated mixed-precision quantization framework designed to allocate bits across neural network layers while respecting a target size budget.',
    role: 'Researcher and engineer designing the framework, optimization logic and evaluation workflow.',
    challenge:
      'Compressed models often lose quality when precision decisions are made uniformly. The challenge was to automate bit allocation so each layer gets the right tradeoff between cost and sensitivity.',
    build: [
      'Built a mixed-precision framework that balances layer sensitivity against computational cost.',
      'Supported 4-bit, 8-bit and 16-bit precision choices across different parts of a network.',
      'Integrated evaluation workflows using FID and CLIP-style quality measurements to assess the effect of compression.',
    ],
    outcome: [
      'Enabled precise model compression to target budgets instead of relying on one-size-fits-all quantization.',
      'Created a practical research asset for model-efficiency experimentation at CERN.',
    ],
    stack: ['Python', 'PyTorch', 'Diffusion models', 'Quantization', 'Evaluation pipelines'],
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/federicobrancasi/quantdiff',
      },
      {
        label: 'Paper repository',
        url: 'https://github.com/federicobrancasi/quantdiff-paper',
      },
    ],
  },
  {
    slug: 'deepquant-quantization-framework',
    title: 'DeepQuant Neural Network Quantization Framework',
    period: 'January 2025 - July 2025',
    category: 'Embedded ML tooling',
    summary:
      'A framework for converting Brevitas-based quantized models into true integer-only representations for efficient deployment on embedded hardware.',
    role: 'Built the conversion pipeline, graph transformations and embedded-friendly inference logic.',
    challenge:
      'Quantized training frameworks do not automatically produce clean integer-only graphs that are ready for real embedded deployment. The main problem was bridging that gap in a reusable way.',
    build: [
      'Built graph transformation logic for splitting quantization nodes and unifying dequantization paths.',
      'Added custom forward-pass injection for neural network layers to support architectures such as ResNet and Vision Transformers.',
      'Focused the system on deployment scenarios where floating-point units are limited or unavailable.',
    ],
    outcome: [
      'Made quantized models significantly easier to move from research workflows into hardware-aware deployment.',
      'Created a reusable engineering layer on top of AMD Brevitas for low-power environments.',
    ],
    stack: ['Python', 'PyTorch', 'AMD Brevitas', 'ONNX', 'Graph transformations', 'Embedded ML'],
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/pulp-platform/DeepQuant',
      },
    ],
  },
  {
    slug: 'neural-anomaly-metric',
    title: 'Neural Anomaly Metric',
    period: 'August 2025 - February 2026',
    category: 'Evaluation and metrics',
    summary:
      'A metric designed to capture quality degradation from quantization more effectively than standard aggregate accuracy measurements.',
    role: 'Defined the metric, built the evaluation workflow and tested it across multiple neural network families.',
    challenge:
      'Existing metrics can miss subtle quality failures introduced by quantization. The goal was to build a measurement that better reflects how compression changes model behavior.',
    build: [
      'Built anomaly-detection-based evaluation logic to highlight degradation that common metrics can miss.',
      'Implemented support for Vision Transformers, ResNets and EfficientNet backbones.',
      'Enabled per-image quality assessment with statistical validation across compression levels.',
    ],
    outcome: [
      'Improved the ability to reason about quantized-model quality beyond blunt accuracy summaries.',
      'Produced a more discriminating evaluation tool for research and optimization loops.',
    ],
    stack: ['Python', 'PyTorch', 'Computer vision', 'Statistical analysis', 'Model evaluation'],
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/federicobrancasi/neural-anomaly-metric',
      },
    ],
  },
  {
    slug: 'enhanced-file-explorer-chrome-extension',
    title: 'Enhanced File Explorer for Chrome',
    period: 'September 2024 - February 2026',
    category: 'Shipped product',
    summary:
      'A browser extension built to improve local file browsing across Chromium browsers, with real user adoption beyond the prototype stage.',
    role: 'Designed and shipped the extension as an end-to-end product, from implementation to public distribution.',
    challenge:
      'Local file browsing in Chromium browsers is functional but clunky. The goal was to make the experience better enough that people would actually use it every day.',
    build: [
      'Built a browser extension focused on improving local file-browsing workflows across Chromium browsers.',
      'Handled product implementation, packaging and public release through the Chrome Web Store.',
      'Iterated the product into something usable enough to sustain recurring daily usage.',
    ],
    outcome: [
      'Reached more than 1,000 daily users.',
      'Passed 5,000 installations on the Chrome Web Store.',
    ],
    stack: ['JavaScript', 'TypeScript', 'Browser extensions', 'Product engineering', 'Chrome Web Store'],
    links: [
      {
        label: 'GitHub repository',
        url: 'https://github.com/federicobrancasi/Enhanced-File-Explorer-for-Chrome',
      },
    ],
  },
];

export const resumeSkillGroups = [
  {
    title: 'AI and ML',
    items: [
      'Machine learning',
      'Deep learning',
      'LLMs',
      'AI agents',
      'RAG',
      'Generative AI',
      'Quantization',
      'Diffusion models',
      'Prompt engineering',
      'Model evaluation',
      'Computer vision',
      'PyTorch',
    ],
  },
  {
    title: 'Engineering',
    items: [
      'Python',
      'Rust',
      'C/C++',
      'TypeScript',
      'Software engineering',
      'Developer tooling',
      'React',
      'FastAPI',
      'Node.js',
      'Git',
      'Linux',
      'GitHub Actions',
    ],
  },
  {
    title: 'Cloud and infrastructure',
    items: [
      'AWS',
      'Cloud computing',
      'MLOps',
      'System architecture',
      'Docker',
      'CI/CD',
      'PostgreSQL',
      'MongoDB',
      'Vector databases',
      'Vercel',
      'Supabase',
    ],
  },
];

export const achievementHighlights: AchievementEntry[] = [
  {
    title: 'Anthropic Claude 4 Hackathon London',
    description: 'Won the London hackathon in June 2025 by shipping a full-stack prototype under tight time constraints.',
    url: 'https://www.linkedin.com/posts/federicobrancasi_honored-to-have-been-selected-as-a-winner-activity-7344707397388570624-6gCj/',
  },
  {
    title: 'AI Hackathon Munich',
    description: 'Won the prototyping sprint in August 2025 at the OpenAI and AWS event in Munich.',
    url: 'https://www.linkedin.com/posts/federicobrancasi_won-a-hackathon-in-munich-a-few-days-activity-7368564601539510273-uDpy/',
  },
  {
    title: 'Startup Lab',
    description: 'Placed second and received 30K EUR in pre-incubation funding for an agritech prototype.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7202636306252808192/',
  },
  {
    title: 'Industrial AI Challenge',
    description: 'Won with a solution that reduced inventory waste by 60 percent.',
    url: 'https://www.linkedin.com/posts/blmgroup_aichallenge-artificialintelligence-ai-activity-7138444559025410049-zOmW/',
  },
];

export const languageEntries: LanguageEntry[] = [
  {
    language: 'Italian',
    level: 'Native',
  },
  {
    language: 'English',
    level: 'Professional working proficiency',
  },
  {
    language: 'German',
    level: 'B1',
  },
  {
    language: 'French',
    level: 'A1',
  },
];

export const certificationEntries: CertificationEntry[] = [
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    issued: 'September 2025',
    credentialId: '3yyz7ip4n5r8',
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'October 2024',
    expires: 'October 2027',
  },
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    issued: 'September 2024',
    expires: 'September 2027',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issued: 'July 2024',
    expires: 'July 2027',
  },
  {
    title: 'Building RAG Agents with LLMs',
    issuer: 'NVIDIA',
    issued: 'June 2024',
    credentialId: 'j2Df5LzUQ5SHZbV4YqnMKg',
  },
  {
    title: 'Kaggle Learn Courses',
    issuer: 'Kaggle',
    issued: 'February 2024',
  },
  {
    title: 'Mathematics for Machine Learning Specialization',
    issuer: 'Imperial College London',
    issued: 'December 2023',
  },
  {
    title: 'Google Certifications',
    issuer: 'Google',
    note: 'Multiple AI and Responsible AI certifications listed on my public LinkedIn profile.',
  },
  {
    title: 'IELTS Academic Band 8',
    issuer: 'IELTS Official',
    issued: 'March 2023',
  },
];

export const publicWorkEntries: PublicWorkEntry[] = [
  {
    title: 'Deep-Learning',
    description: 'A comprehensive LaTeX-based deep learning guide with custom TikZ illustrations and structured explanations.',
    context: 'Pinned GitHub repository and public study resource',
    url: 'https://github.com/federicobrancasi/Deep-Learning',
  },
  {
    title: 'Blockchain',
    description: 'A course PDF from the University of Trento designed as a clear and practical introduction to blockchain concepts.',
    context: 'University coursework published as a public TeX repository',
    url: 'https://github.com/federicobrancasi/Blockchain',
  },
  {
    title: 'Mathematics',
    description: 'Detailed notes and exercises for the Mathematics for Machine Learning specialization, organized as reusable study material.',
    context: 'Pinned GitHub repository and educational proof of work',
    url: 'https://github.com/federicobrancasi/Mathematics',
  },
  {
    title: 'Kaggle-Courses',
    description: 'Hands-on exercises and notes from Kaggle data science and machine learning courses.',
    context: 'Public notebook-based learning repository',
    url: 'https://github.com/federicobrancasi/Kaggle-Courses',
  },
  {
    title: 'Neural Anomaly Metric',
    description: 'Research code for per-image quality assessment of quantized diffusion models using anomaly detection on Vision Transformer features.',
    context: 'Public research repository',
    url: 'https://github.com/federicobrancasi/neural-anomaly-metric',
  },
  {
    title: 'QuantDiff paper',
    description: 'The paper companion to QuantDiff, documenting the mixed-precision quantization framework and its sensitivity-driven optimization logic.',
    context: 'Public research paper repository',
    url: 'https://github.com/federicobrancasi/quantdiff-paper',
  },
  {
    title: 'Neural Anomaly Metric paper',
    description: 'The paper companion to Neural Anomaly Metric, focused on per-image evaluation beyond FID and CLIP.',
    context: 'Public research paper repository',
    url: 'https://github.com/federicobrancasi/neural-anomaly-metric-paper',
  },
  {
    title: 'Test-Time Adaptation for Image Classification',
    description: 'A project on improving neural network robustness for image classification through test-time adaptation.',
    context: 'Public machine learning research repository',
    url: 'https://github.com/federicobrancasi/Test-Time-Adaptation-for-Image-Classification',
  },
  {
    title: 'VS Code',
    description: 'My public fork of VS Code, tied to work on AI features, model integration and recent release shipping.',
    context: 'Public product engineering repository',
    url: 'https://github.com/federicobrancasi/vscode',
  },
  {
    title: 'Deeploy',
    description: 'A compiler-oriented codebase where I worked on kernels for optimizing machine learning models on low-power chips.',
    context: 'Low-power ML systems work in a public fork',
    url: 'https://github.com/federicobrancasi/Deeploy',
  },
  {
    title: 'Claude Code talk in Zurich',
    description: 'Shared a practical workflow for Claude Code in Zurich, covering prompt engineering, subagents, MCP setup and AI coding workflows with the local community.',
    context: 'Public talk and LinkedIn post from an Anthropic Claude Code community event',
    url: 'https://www.linkedin.com/posts/federicobrancasi_how-can-you-maximize-your-development-workflow-activity-7383781182938812416-86sU',
  },
];
