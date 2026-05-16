import type { ProjectItem } from '@/types/portfolio'
import project1Poster from '@/assets/images/projects/1/poster.png'
import project1Architecture from '@/assets/images/projects/1/architecture_diagram.jpg'
import project1Content1 from '@/assets/images/projects/1/content1.png'
import project1Content2 from '@/assets/images/projects/1/content2.png'
import project1Content3 from '@/assets/images/projects/1/content3.png'
import project2Poster from '@/assets/images/projects/2/poster.png'
import project2Architecture from '@/assets/images/projects/2/architecture_diagram.png'
import project3Poster from '@/assets/images/projects/3/poster.png'
import project4Poster from '@/assets/images/projects/4/poster.png'
import project4Content1 from '@/assets/images/projects/4/content1.png'
import project4Content2 from '@/assets/images/projects/4/content2.png'
import project4Content3 from '@/assets/images/projects/4/content3.png'
import project5Poster from '@/assets/images/projects/5/poster.png'
import project6Poster from '@/assets/images/projects/6/poster.png'
import project7Content1 from '@/assets/images/projects/7/content1.png'
import project7Content2 from '@/assets/images/projects/7/content2.png'
import project7Content3 from '@/assets/images/projects/7/content3.png'
import project8Poster from '@/assets/images/projects/8/poster.png'

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    id: '1',
    title: 'JERC Sentry',
    subtitle: 'AI Scam Call Defence',
    description:
      'A real-time AI inference pipeline that uses the Deepgram and Groq APIs to classify live phone call scams at the network level with sub-second latency. The system includes an asynchronous FastAPI and WebSocket backend with Telnyx integrations for call control, a Flutter mobile app featuring Firebase FCM fraud alerts for family intervention, and infrastructure automated via Terraform.',
    techStack: [
      'FastAPI',
      'Flutter',
      'PostgreSQL',
      'Terraform',
      'GitHub Actions',
      'pytest',
      'Telnyx',
      'Groq',
      'Deepgram',
      'Firebase',
    ],
    demoUrl: 'https://jerc-beta.pages.dev',
    demoLabel: 'Documentation Site',
    media: [
      {
        type: 'video',
        src: '/videos/projects/1/demo.mp4',
        alt: 'JERC Sentry demo video showcasing real-time scam call detection and alerting features.',
        poster: project1Poster,
      },
      {
        type: 'image',
        src: project1Architecture,
        alt: 'Diagram showing the architecture of the JERC Sentry system.',
      },
      {
        type: 'image',
        src: project1Content1,
        alt: 'Screenshot of the JERC Sentry app dashboard.',
      },
      {
        type: 'image',
        src: project1Content2,
        alt: 'Screenshot of the JERC Sentry app dashboard showing a detected scam call with classification details.',
      },
      {
        type: 'image',
        src: project1Content3,
        alt: 'Screenshot of a mobile device showing a notification for a scam call alert.',
      },
    ],
  },
  {
    id: '2',
    title: 'AI Doctors',
    subtitle: 'Drug Interaction Predictor',
    description:
      'A FastAPI-based clinical decision support system that predicts drug-drug interaction risks from structured patient data. The system features Python ETL pipelines to normalize five medical datasets into PostgreSQL, a RAG pipeline utilizing Amazon Bedrock for LLM inference, an authenticated interactive React dashboard, and AWS infrastructure (ECS, RDS, and S3) provisioned via Terraform.',
    techStack: [
      'FastAPI',
      'React',
      'AWS',
      'Terraform',
      'PostgreSQL',
      'Docker',
      'Jest',
    ],
    githubUrl: 'https://github.com/rayceramsay/ai-ddi-predictor',
    media: [
      {
        type: 'video',
        src: '/videos/projects/2/demo.mp4',
        alt: 'AI Doctors demo video showcasing the drug interaction prediction features.',
        poster: project2Poster,
      },
      {
        type: 'image',
        src: project2Architecture,
        alt: 'Diagram showing the architecture of the AI Doctors system.',
      },
    ],
  },
  {
    id: '3',
    title: 'Studio Avele (Swim By Shea)',
    subtitle: 'Small Business E-Commerce Platform',
    description:
      'A full-stack e-commerce platform featuring Stripe payment integration and a custom CMS for inventory and order management. It involved migrating a legacy PHP monolith to a decoupled React and REST API architecture, which improved scalability and maintainability.',
    techStack: ['React', 'TailwindCSS', 'PHP', 'MySQL', 'Docker', 'Stripe'],
    media: [
      {
        type: 'video',
        src: '/videos/projects/3/demo.mp4',
        alt: 'Video showcasing the Studio Avele e-commerce platform, highlighting the product catalog, shopping cart, checkout process, and admin panel.',
        poster: project3Poster,
        muted: true,
      },
    ],
  },
  {
    id: '4',
    title: 'U of T Booking Bot',
    subtitle: 'Automated Activity Registration',
    description:
      'A Playwright-based automation tool featuring a PyQt6 desktop GUI designed to secure high-demand university activity bookings within seconds of release. The system integrates native OS schedulers and SQLite to automate registrations at precise intervals, consistently bypassing 30-second sell-out windows.',
    techStack: ['Python', 'Playwright', 'SQLite', 'PyQt6'],
    githubUrl: 'https://github.com/ethanmcf/UofTBookingBot',
    media: [
      {
        type: 'video',
        src: '/videos/projects/4/demo.mp4',
        alt: 'U of T Booking Bot demo video showcasing the GUI and automated booking process.',
        poster: project4Poster,
        muted: true,
      },
      {
        type: 'image',
        src: project4Content1,
        alt: 'Screenshot of the U of T Booking Bot showing the credentials setup screen.',
      },
      {
        type: 'image',
        src: project4Content2,
        alt: 'Screenshot of the U of T Booking Bot showing the run/booking screen.',
      },
      {
        type: 'image',
        src: project4Content3,
        alt: 'Screenshot of the U of T Booking Bot showing a successful booking schedule confirmation.',
      },
    ],
  },
  {
    id: '5',
    title: 'NHL Goaltender Height Analysis',
    subtitle: 'Goaltender Performance Study',
    description:
      'A statistical analysis of over 20 years of NHL goaltender data using R, tidyverse, GAMs, decision trees, and random forests to evaluate the correlation between player height and performance while surfacing long-term scouting trends.',
    techStack: ['R', 'Tidyverse', 'ggplot2', 'Machine Learning'],
    demoUrl: 'https://rayceramsay.github.io/nhl-goalie-height-analysis/',
    demoLabel: 'Interactive Analysis',
    media: [
      {
        type: 'video',
        src: '/videos/projects/5/demo.mp4',
        alt: 'Video summarizing the NHL Goaltender Height Analysis project, showcasing key findings and visualizations.',
        poster: project5Poster,
        muted: true,
      },
    ],
  },
  {
    id: '6',
    title: 'Music Trivia Game',
    subtitle: 'Single Player Trivia Game',
    description:
      'Led a five-member team to design and build a Java-based music trivia game using Clean Architecture and Test-Driven Development (TDD). Personally implemented audio playback, save/load functionality, and SQLite persistence while maintaining over 90% JUnit test coverage.',
    techStack: ['Java', 'SQLite', 'JUnit'],
    githubUrl:
      'https://github.com/rayceramsay/music-trivia/tree/post-semester-revision',
    media: [
      {
        type: 'video',
        src: '/videos/projects/6/demo.mp4',
        alt: 'Music Trivia Game demo video showcasing gameplay and features.',
        poster: project6Poster,
      },
    ],
  },
  {
    id: '7',
    title: 'Onyx Analytics Dashboard',
    subtitle: 'Nonprofit KPI Dashboard',
    description:
      'A React and Next.js analytics dashboard backed by PostgreSQL and GraphQL that enables a nonprofit organization to track key performance indicators (KPIs) through dynamic filters and interactive charts.',
    techStack: ['TypeScript', 'React', 'PostgreSQL', 'GraphQL'],
    githubUrl: 'https://github.com/onyx-initiative/onyx/pull/96',
    media: [
      {
        type: 'image',
        src: project7Content1,
        alt: 'Screenshot of the Onyx Analytics Dashboard showing aggregated statistics cards.',
      },
      {
        type: 'image',
        src: project7Content2,
        alt: 'Screenshot of the Onyx Analytics Dashboard showing aggregated statistics cards with date filters.',
      },
      {
        type: 'image',
        src: project7Content3,
        alt: 'Screenshot of the Onyx Analytics Dashboard showing an area/line chart.',
      },
    ],
  },
  {
    id: '8',
    title: 'Like It Or Dump It',
    subtitle: 'Small Business Website',
    description:
      'A single-page marketing website for a junk removal business, built using HTML5, CSS, JavaScript, and Vite, with a Node.js and Express backend.',
    techStack: ['HTML5', 'CSS', 'JavaScript', 'Express', 'Vite'],
    demoUrl: 'https://likeitordumpit.ca',
    demoLabel: 'Live Site',
    media: [
      {
        type: 'video',
        src: '/videos/projects/8/demo.mp4',
        alt: 'Video of the Like It Or Dump It homepage.',
        poster: project8Poster,
        muted: true,
      },
    ],
  },
]
