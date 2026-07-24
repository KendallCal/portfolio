import type { ImageMetadata } from "astro";
import academiaImage from "../assets/AcademIA.png";
import eduvialImage from "../assets/EduvialCR.png";
import eduvialLearningDashboardConcept from "../assets/eduvial-learning-dashboard-concept.png";
import eduvialPracticeSimulatorConcept from "../assets/eduvial-practice-simulator-concept.png";
import eduvialSimulatorSelectionConcept from "../assets/eduvial-simulator-selection-concept.png";

export type ProjectStatus = "completed" | "in-progress" | "archived";
export type ProjectPlatform = "web" | "android" | "ios" | "desktop";

export interface Tech {
  name: string;
  icon: string;
}

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

export interface ProjectCaseStudy {
  heroDescription?: string;
  summary: string[];
  contributions?: string[];
}

export interface Project {
  slug: string;
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

export const isAvailableProjectUrl = (url?: string) =>
  Boolean(url && url !== "#" && !/(?:tu-usuario|tu-dominio)/i.test(url));

export const projects: Project[] = [
  {
    slug: "eduvialcr",
    title: "EduvialCR",
    shortDesc: "Plataforma EdTech para prepararse para el examen teórico de conducción del COSEVI mediante cursos, quizzes y simuladores adaptativos.",
    fullDesc: "EduvialCR ayuda a las personas en Costa Rica a prepararse para el examen teórico de conducción mediante una experiencia de aprendizaje modular, seguimiento de progreso y simulaciones orientadas a reforzar sus áreas débiles.",
    image: eduvialImage,
    category: "mobile",
    categoryLabel: "App móvil",
    developmentType: "Full stack",
    accentColor: "rgb(251 191 36)",
    status: "in-progress",
    platforms: ["web", "android"],
    featured: true,
    techs: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Flutter", icon: "flutter" },
      { name: "TypeScript", icon: "typescript" },
      { name: "AWS", icon: "aws" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
    features: [
      "Cursos modulares para licencias B1 y A1/A2.",
      "Quizzes y seguimiento del progreso de aprendizaje.",
      "Simuladores en modo práctica y examen.",
      "Preguntas adaptativas según las áreas por reforzar.",
      "Dashboard de avance, rendimiento e historial.",
    ],
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
    liveUrl: "https://eduvialcr.com",
    repoUrl: "https://github.com/tu-usuario/eduvialcr",
  },
  {
    slug: "academia",
    title: "AcademIA",
    shortDesc: "Plataforma multiagente que automatiza la investigación, redacción y generación de proyectos universitarios con IA.",
    fullDesc: "AcademIA es una plataforma web multiagente que permite crear proyectos universitarios a partir de prompts, archivos y fuentes web, coordinando agentes de IA para investigar, redactar, revisar y generar entregables.",
    image: academiaImage,
    category: "ai",
    categoryLabel: "Inteligencia artificial",
    developmentType: "Full stack",
    accentColor: "rgb(56 189 248)",
    status: "in-progress",
    platforms: ["web"],
    featured: true,
    techs: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
      { name: "Supabase", icon: "supabase" },
    ],
    features: [
      "Creación de proyectos desde prompts, archivos y fuentes web.",
      "Coordinación de agentes para investigar, redactar y revisar.",
      "Generación automatizada de entregables universitarios.",
      "Historial y seguimiento de cada proyecto.",
      "Espacios de trabajo colaborativos.",
    ],
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
    liveUrl: "https://kendallcal.github.io/academia",
    repoUrl: "https://github.com/KendallCal/academia",
  },
  {
    slug: "bingo-demo",
    title: "Bingo Demo",
    shortDesc:
      "Aplicación web de bingo creada para probar experiencias multijugador simples y dinámicas.",
    fullDesc:
      "Bingo Demo es un proyecto temporal para validar la navegación del carrusel de proyectos destacados.",
    image: academiaImage,
    category: "web",
    categoryLabel: "Aplicación web",
    developmentType: "Full stack",
    accentColor: "rgb(244 114 182)",
    status: "completed",
    platforms: ["web"],
    featured: true,
    techs: [
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Supabase", icon: "supabase" },
    ],
    features: [
      "Generación de cartones de bingo.",
      "Partidas rápidas para varios jugadores.",
      "Validación visual de estados ganadores.",
      "Control simple de partidas.",
      "Interfaz adaptable a dispositivos móviles.",
    ],
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
    liveUrl: "https://kendallcal.github.io/bingo-demo",
    repoUrl: "https://github.com/KendallCal/bingo-demo",
  },
];

