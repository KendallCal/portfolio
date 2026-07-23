import type { ImageMetadata } from "astro";
import academiaImage from "../assets/AcademIA.png";
import eduvialImage from "../assets/EduvialCR.png";

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
      caption?: string;
    };

export interface Project {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: ImageMetadata;
  category: "web" | "mobile" | "ai";
  categoryLabel: string;
  status: ProjectStatus;
  platforms: ProjectPlatform[];
  techs: Tech[];
  features?: string[];
  media?: ProjectMedia[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "eduvialcr",
    title: "EduvialCR",
    shortDesc: "Plataforma educativa con cursos y simuladores para prepararse para el examen teórico del COSEVI.",
    fullDesc: "EduvialCR es una plataforma web desarrollada con Next.js que permite a los usuarios prepararse para el examen de conducir de COSEVI mediante simulacros, teoría y seguimiento de progreso.",
    image: eduvialImage,
    category: "mobile",
    categoryLabel: "App móvil",
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
      "Simulacros orientados al examen teórico de COSEVI.",
      "Contenido de teoría organizado en una sola plataforma.",
      "Seguimiento del progreso durante la preparación.",
    ],
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
    ],
    liveUrl: "https://tu-dominio.com",
    repoUrl: "https://github.com/tu-usuario/academia",
  },
];

