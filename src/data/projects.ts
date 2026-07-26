/* 
  ============================================================
   Imágenes y tipos necesarios
  ============================================================ 
*/
import type { ImageMetadata } from "astro";

import academiaImage from "../assets/AcademIA.webp";
import eduvialImage from "../assets/EduvialCR.webp";
import eduvialLearningDashboardConcept from "../assets/EduvialCR1.webp";
import eduvialPracticeSimulatorConcept from "../assets/EduvialCR2.webp";
import eduvialSimulatorSelectionConcept from "../assets/EduvialCR3.webp";

import type { Language } from "../i18n/config";

/* 
  ============================================================
   Tipos generales de los proyectos
  ============================================================ 
*/

/* Estados permitidos para un proyecto. */
export type ProjectStatus = "completed" | "in-progress" | "archived";

/* Plataformas en las que puede estar disponible un proyecto. */
export type ProjectPlatform = "web" | "android" | "ios" | "desktop";

/* Identificadores únicos utilizados en las rutas de cada proyecto. */
export type ProjectSlug = "eduvialcr" | "academia" | "bingo-demo";

/* Tecnología utilizada dentro de un proyecto. */
export interface Tech {
  name: string;
  icon: string;
}

/*
 * Contenido multimedia de un proyecto.
 * Puede ser un video de YouTube o una imagen local.
 */
export type ProjectMedia =
  | {
      type: "youtube";
      videoId: string;
      title: string;
    }
  | {
      type: "image";
      image: ImageMetadata;
      alt: string;
    };

/* Información ampliada utilizada en la página individual del proyecto. */
export interface ProjectCaseStudy {
  heroDescription?: string;
  summary: string[];
  contributions?: string[];
}

/* Estructura completa que debe cumplir cada proyecto del portafolio. */
export interface Project {
  slug: ProjectSlug;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: ImageMetadata;

  category: "web" | "mobile" | "ai";
  categoryLabel: string;
  developmentType?: string;

  accentColor: string;
  status: ProjectStatus;
  platforms: ProjectPlatform[];

  techs: Tech[];
  features?: string[];
  media?: ProjectMedia[];
  caseStudy?: ProjectCaseStudy;

  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

/* 
  ============================================================
   Utilidades
  ============================================================ 
*/
/*
 * Comprueba que una URL exista y que no sea una dirección temporal
 * utilizada como ejemplo durante el desarrollo.
*/
export const isAvailableProjectUrl = (url?: string) =>
  Boolean(url && url !== "#" && !/(?:tu-usuario|tu-dominio)/i.test(url));

/* 
  ============================================================
   Proyectos en español
  ============================================================ 
*/
export const projects: Project[] = [
  {
    /* Información principal */
    slug: "eduvialcr",
    title: "EduvialCR",
    shortDesc:
      "Plataforma EdTech para prepararse para el examen teórico de conducción del COSEVI mediante cursos, quizzes y simuladores adaptativos.",
    fullDesc:
      "EduvialCR ayuda a las personas en Costa Rica a prepararse para el examen teórico de conducción mediante una experiencia de aprendizaje modular, seguimiento de progreso y simulaciones orientadas a reforzar sus áreas débiles.",
    image: eduvialImage,

    /* Clasificación y estado */
    category: "mobile",
    categoryLabel: "App móvil",
    developmentType: "Full stack",
    accentColor: "rgb(251 191 36)",
    status: "in-progress",
    platforms: ["web", "android"],
    featured: true,

    /* Tecnologías principales */
    techs: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Flutter", icon: "flutter" },
      { name: "TypeScript", icon: "typescript" },
      { name: "AWS", icon: "aws" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],

    /* Funciones destacadas */
    features: [
      "Cursos modulares para licencias B1 y A1/A2.",
      "Quizzes y seguimiento del progreso de aprendizaje.",
      "Simuladores en modo práctica y examen.",
      "Preguntas adaptativas según las áreas por reforzar.",
      "Dashboard de avance, rendimiento e historial.",
    ],

    /* Imágenes mostradas en la página del proyecto */
    media: [
      {
        type: "image",
        image: eduvialSimulatorSelectionConcept,
        alt: "Selector de vehículo y modo de práctica de EduvialCR",
      },
      {
        type: "image",
        image: eduvialPracticeSimulatorConcept,
        alt: "Simulador de práctica con retroalimentación de EduvialCR",
      },
      {
        type: "image",
        image: eduvialLearningDashboardConcept,
        alt: "Lección y progreso de aprendizaje en EduvialCR",
      },
    ],

    /* Descripción ampliada del caso de estudio */
    caseStudy: {
      heroDescription:
        "Plataforma EdTech para prepararse para el examen teórico de conducción del COSEVI. Integra cursos, quizzes y seguimiento del progreso de aprendizaje. Sus simuladores adaptativos refuerzan las áreas que cada estudiante necesita practicar.",

      summary: [
        "EduvialCR es una plataforma EdTech que desarrollé para ayudar a las personas en Costa Rica a prepararse para el examen teórico de conducción del COSEVI. La experiencia reúne cursos modulares para automóvil y motocicleta, lecciones con video y contenido visual, quizzes, seguimiento de progreso y un simulador con modos de práctica y examen.",
        "Construí el proyecto como una solución multiplataforma: una aplicación web moderna, una API modular con persistencia relacional, un panel administrativo y una app móvil Flutter en evolución. Su principal diferenciador es un motor de simulación adaptativo que utiliza el historial del estudiante para reforzar áreas débiles, ofrecer retroalimentación útil y convertir cada intento en una guía concreta de estudio.",
      ],

      contributions: [
        "Producto y UX",
        "Frontend web",
        "Backend y API",
        "Base de datos",
        "Motor adaptativo",
        "Aplicación móvil",
      ],
    },

    /* Enlaces del proyecto */
    liveUrl: "https://eduvialcr.com",
    repoUrl: "https://github.com/tu-usuario/eduvialcr",
  },
  {
    /* Información principal */
    slug: "academia",
    title: "AcademIA",
    shortDesc:
      "Plataforma multiagente que automatiza la investigación, redacción y generación de proyectos universitarios con IA.",
    fullDesc:
      "AcademIA es una plataforma web multiagente que permite crear proyectos universitarios a partir de prompts, archivos y fuentes web, coordinando agentes de IA para investigar, redactar, revisar y generar entregables.",
    image: academiaImage,

    /* Clasificación y estado */
    category: "ai",
    categoryLabel: "Inteligencia artificial",
    developmentType: "Full stack",
    accentColor: "rgb(56 189 248)",
    status: "in-progress",
    platforms: ["web"],
    featured: true,

    /* Tecnologías principales */
    techs: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
      { name: "Supabase", icon: "supabase" },
    ],

    /* Funciones destacadas */
    features: [
      "Creación de proyectos desde prompts, archivos y fuentes web.",
      "Coordinación de agentes para investigar, redactar y revisar.",
      "Generación automatizada de entregables universitarios.",
      "Historial y seguimiento de cada proyecto.",
      "Espacios de trabajo colaborativos.",
    ],

    /* Imágenes mostradas en la página del proyecto */
    media: [
      {
        type: "image",
        image: academiaImage,
        alt: "Panel principal temporal de AcademIA",
      },
      {
        type: "image",
        image: academiaImage,
        alt: "Flujo multiagente temporal de AcademIA",
      },
    ],

    /* Descripción ampliada del caso de estudio */
    caseStudy: {
      heroDescription:
        "Plataforma de inteligencia artificial para organizar la investigación, redacción y revisión de proyectos académicos. Coordina agentes especializados y centraliza cada etapa en una experiencia clara y trazable.",

      summary: [
        "AcademIA es una plataforma multiagente creada para explorar nuevas formas de acompañar proyectos universitarios complejos. La experiencia reúne fuentes, archivos e instrucciones del usuario para convertirlos en un flujo de trabajo organizado.",
        "El proyecto combina una interfaz web moderna con servicios de inteligencia artificial que investigan, estructuran, redactan y revisan contenido. Actualmente funciona como una demostración técnica en evolución.",
      ],

      contributions: [
        "Producto y UX",
        "Frontend web",
        "Backend y API",
        "Orquestación de IA",
        "Base de datos",
        "Despliegue cloud",
      ],
    },

    /* Enlaces del proyecto */
    liveUrl: "https://kendallcal.github.io/academia",
    repoUrl: "https://github.com/KendallCal/academia",
  },

  {
    /* Información principal */
    slug: "bingo-demo",
    title: "Bingo Demo",
    shortDesc:
      "Aplicación web de bingo creada para probar experiencias multijugador simples y dinámicas.",
    fullDesc:
      "Bingo Demo es un proyecto temporal para validar la navegación del carrusel de proyectos destacados.",
    image: academiaImage,

    /* Clasificación y estado */
    category: "web",
    categoryLabel: "Aplicación web",
    developmentType: "Full stack",
    accentColor: "rgb(244 114 182)",
    status: "completed",
    platforms: ["web"],
    featured: true,

    /* Tecnologías principales */
    techs: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Supabase", icon: "supabase" },
    ],

    /* Funciones destacadas */
    features: [
      "Generación de cartones de bingo.",
      "Partidas rápidas para varios jugadores.",
      "Validación visual de estados ganadores.",
      "Control simple de partidas.",
      "Interfaz adaptable a dispositivos móviles.",
    ],

    /* Imágenes mostradas en la página del proyecto */
    media: [
      {
        type: "image",
        image: academiaImage,
        alt: "Sala de juego temporal de Bingo Demo",
      },
      {
        type: "image",
        image: academiaImage,
        alt: "Cartón temporal de Bingo Demo",
      },
    ],

    /* Descripción ampliada del caso de estudio */
    caseStudy: {
      heroDescription:
        "Aplicación web multijugador para crear partidas rápidas de bingo, generar cartones y comprobar resultados. El proyecto sirve como demostración de una experiencia simple, dinámica y adaptable.",

      summary: [
        "Bingo Demo es un proyecto experimental enfocado en validar interacciones multijugador sencillas dentro de una interfaz web clara. Permite crear una partida, generar cartones y seguir el avance de cada ronda.",
        "La implementación prioriza la rapidez de uso, la sincronización de estados y una experiencia adaptable. Su contenido e imágenes son temporales y podrán sustituirse cuando se publique el proyecto definitivo.",
      ],

      contributions: [
        "Producto y UX",
        "Frontend web",
        "Lógica de juego",
        "Estado en tiempo real",
        "Base de datos",
        "Despliegue web",
      ],
    },

    /* Enlaces del proyecto */
    liveUrl: "https://kendallcal.github.io/bingo-demo",
    repoUrl: "https://github.com/KendallCal/bingo-demo",
  },
];

/* 
  ============================================================
   Traducciones de los proyectos
  ============================================================ 
*/
/*
 * Define únicamente los campos que cambian según el idioma.
 * Los datos técnicos, enlaces, imágenes y estados se reutilizan.
 */
type ProjectTranslation = Pick<
  Project,
  | "shortDesc"
  | "fullDesc"
  | "categoryLabel"
  | "developmentType"
  | "features"
  | "media"
  | "caseStudy"
>;

/*
 * Traducciones en inglés organizadas por el identificador de cada proyecto.
 * Solo se traducen los campos visibles para el usuario.
 */
const englishProjectTranslations: Record<ProjectSlug, ProjectTranslation> = {
  eduvialcr: {
    shortDesc:
      "An EdTech platform for preparing for Costa Rica's COSEVI driving theory test through courses, quizzes, and adaptive simulators.",
    fullDesc:
      "EduvialCR helps people in Costa Rica prepare for the driving theory test through a modular learning experience, progress tracking, and simulations designed to reinforce their weaker areas.",
    categoryLabel: "Mobile app",
    developmentType: "Full stack",

    features: [
      "Modular courses for B1 and A1/A2 licenses.",
      "Quizzes and learning progress tracking.",
      "Practice and exam simulation modes.",
      "Adaptive questions based on areas that need reinforcement.",
      "Progress, performance, and history dashboard.",
    ],

    media: [
      {
        type: "image",
        image: eduvialSimulatorSelectionConcept,
        alt: "EduvialCR vehicle and practice mode selector",
      },
      {
        type: "image",
        image: eduvialPracticeSimulatorConcept,
        alt: "EduvialCR practice simulator with feedback",
      },
      {
        type: "image",
        image: eduvialLearningDashboardConcept,
        alt: "EduvialCR lesson and learning progress",
      },
    ],

    caseStudy: {
      heroDescription:
        "An EdTech platform for preparing for Costa Rica's COSEVI driving theory test. It combines courses, quizzes, and learning progress tracking. Its adaptive simulators reinforce the areas each student needs to practice.",

      summary: [
        "EduvialCR is an EdTech platform I developed to help people in Costa Rica prepare for the COSEVI driving theory test. The experience brings together modular courses for cars and motorcycles, lessons with video and visual content, quizzes, progress tracking, and a simulator with practice and exam modes.",
        "I built the project as a cross-platform solution: a modern web application, a modular API with relational persistence, an administration panel, and an evolving Flutter mobile app. Its main differentiator is an adaptive simulation engine that uses the student's history to reinforce weaker areas, provide useful feedback, and turn every attempt into a concrete study guide.",
      ],

      contributions: [
        "Product and UX",
        "Web frontend",
        "Backend and API",
        "Database",
        "Adaptive engine",
        "Mobile application",
      ],
    },
  },

  academia: {
    shortDesc:
      "A multi-agent platform that automates research, writing, and the creation of university projects with AI.",
    fullDesc:
      "AcademIA is a multi-agent web platform that creates university projects from prompts, files, and web sources by coordinating AI agents to research, write, review, and generate deliverables.",
    categoryLabel: "Artificial intelligence",
    developmentType: "Full stack",

    features: [
      "Project creation from prompts, files, and web sources.",
      "Agent coordination for research, writing, and review.",
      "Automated generation of university deliverables.",
      "History and tracking for every project.",
      "Collaborative workspaces.",
    ],

    media: [
      {
        type: "image",
        image: academiaImage,
        alt: "Temporary AcademIA main dashboard",
      },
      {
        type: "image",
        image: academiaImage,
        alt: "Temporary AcademIA multi-agent workflow",
      },
    ],

    caseStudy: {
      heroDescription:
        "An artificial intelligence platform for organizing the research, writing, and review of academic projects. It coordinates specialized agents and centralizes every stage in a clear, traceable experience.",

      summary: [
        "AcademIA is a multi-agent platform created to explore new ways of supporting complex university projects. The experience brings together sources, files, and user instructions and turns them into an organized workflow.",
        "The project combines a modern web interface with artificial intelligence services that research, structure, write, and review content. It currently serves as an evolving technical demonstration.",
      ],

      contributions: [
        "Product and UX",
        "Web frontend",
        "Backend and API",
        "AI orchestration",
        "Database",
        "Cloud deployment",
      ],
    },
  },

  "bingo-demo": {
    shortDesc:
      "A web bingo application created to test simple, dynamic multiplayer experiences.",
    fullDesc:
      "Bingo Demo is a temporary project used to validate navigation in the featured projects carousel.",
    categoryLabel: "Web application",
    developmentType: "Full stack",

    features: [
      "Bingo card generation.",
      "Quick games for multiple players.",
      "Visual validation of winning states.",
      "Simple game controls.",
      "A mobile-friendly interface.",
    ],

    media: [
      {
        type: "image",
        image: academiaImage,
        alt: "Temporary Bingo Demo game room",
      },
      {
        type: "image",
        image: academiaImage,
        alt: "Temporary Bingo Demo card",
      },
    ],

    caseStudy: {
      heroDescription:
        "A multiplayer web application for creating quick bingo games, generating cards, and checking results. The project demonstrates a simple, dynamic, and adaptable experience.",

      summary: [
        "Bingo Demo is an experimental project focused on validating simple multiplayer interactions in a clear web interface. It lets users create a game, generate cards, and follow the progress of each round.",
        "The implementation prioritizes ease of use, state synchronization, and an adaptable experience. Its content and images are temporary and may be replaced when the final project is published.",
      ],

      contributions: [
        "Product and UX",
        "Web frontend",
        "Game logic",
        "Real-time state",
        "Database",
        "Web deployment",
      ],
    },
  },
};

/* 
  ============================================================
   Obtención de proyectos según el idioma
  ============================================================ 
*/
/*
 * Devuelve los proyectos en español o inglés.
 *
 * En español se utiliza el arreglo original.
 * En inglés se conservan los datos técnicos y se reemplazan
 * únicamente los campos que tienen traducción.
 */
export const getProjects = (language: Language): Project[] =>
  language === "es"
    ? projects
    : projects.map((project) => ({
        ...project,
        ...englishProjectTranslations[project.slug],
      }));
