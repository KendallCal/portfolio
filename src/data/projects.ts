import type { ImageMetadata } from "astro";

import bankerSimImage from "../assets/Simulador.webp";
import bstVisualizerImage from "../assets/BST_Visualizer.webp";
import eduvialImage from "../assets/EduvialCR.webp";
import eduvialLearningDashboardConcept from "../assets/EduvialCR1.webp";
import eduvialPracticeSimulatorConcept from "../assets/EduvialCR2.webp";
import eduvialSimulatorSelectionConcept from "../assets/EduvialCR3.webp";
import portfolioImage from "../assets/Portfolio.webp";
import videotecaUnedImage from "../assets/VideotecaUNED.webp";
import type { Language } from "../i18n/config";

export type ProjectStatus = "completed" | "in-progress" | "archived";
export type ProjectPlatform = "web" | "android" | "ios" | "desktop";
export type ProjectSlug =
  | "eduvialcr"
  | "videoteca-uned"
  | "binary-search-tree-visualizer"
  | "banker-sim"
  | "portfolio";

export interface Tech { name: string; icon: string; }
export type ProjectMedia =
  | { type: "youtube"; videoId: string; title: string }
  | { type: "image"; image: ImageMetadata; alt: string };
export interface ProjectCaseStudy {
  heroDescription?: string;
  summary: string[];
  contributions?: string[];
}
export interface Project {
  slug: ProjectSlug;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: ImageMetadata;
  category: "web" | "mobile" | "ai" | "desktop";
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
    category: "mobile", categoryLabel: "App móvil", developmentType: "Full stack",
    accentColor: "rgb(251 191 36)", status: "in-progress", platforms: ["web", "android"], featured: true,
    techs: [{ name: "Next.js", icon: "nextjs" }, { name: "Flutter", icon: "flutter" }, { name: "TypeScript", icon: "typescript" }, { name: "AWS", icon: "aws" }, { name: "PostgreSQL", icon: "postgresql" }],
    features: ["Cursos modulares para licencias B1 y A1/A2.", "Quizzes y seguimiento del progreso de aprendizaje.", "Simuladores en modo práctica y examen.", "Preguntas adaptativas según las áreas por reforzar.", "Dashboard de avance, rendimiento e historial."],
    media: [
      { type: "image", image: eduvialSimulatorSelectionConcept, alt: "Selector de vehículo y modo de práctica de EduvialCR" },
      { type: "image", image: eduvialPracticeSimulatorConcept, alt: "Simulador de práctica con retroalimentación de EduvialCR" },
      { type: "image", image: eduvialLearningDashboardConcept, alt: "Lección y progreso de aprendizaje en EduvialCR" },
    ],
    caseStudy: {
      heroDescription: "Plataforma EdTech para prepararse para el examen teórico de conducción del COSEVI. Integra cursos, quizzes y seguimiento del progreso de aprendizaje. Sus simuladores adaptativos refuerzan las áreas que cada estudiante necesita practicar.",
      summary: ["EduvialCR es una plataforma EdTech que desarrollé para ayudar a las personas en Costa Rica a prepararse para el examen teórico de conducción del COSEVI. La experiencia reúne cursos modulares para automóvil y motocicleta, lecciones con video y contenido visual, quizzes, seguimiento de progreso y un simulador con modos de práctica y examen.", "Construí el proyecto como una solución multiplataforma: una aplicación web moderna, una API modular con persistencia relacional, un panel administrativo y una app móvil Flutter en evolución. Su principal diferenciador es un motor de simulación adaptativo que utiliza el historial del estudiante para reforzar áreas débiles, ofrecer retroalimentación útil y convertir cada intento en una guía concreta de estudio."],
      contributions: ["Producto y UX", "Frontend web", "Backend y API", "Base de datos", "Motor adaptativo", "Aplicación móvil"],
    },
    liveUrl: "https://eduvialcr.com", repoUrl: "https://github.com/tu-usuario/eduvialcr",
  },
  {
    slug: "portfolio", title: "Personal Portfolio",
    shortDesc: "Portafolio personal bilingüe para presentar proyectos, experiencia profesional, tecnologías y perfil técnico.",
    fullDesc: "Sitio web personal responsivo construido para centralizar proyectos, experiencia, trayectoria profesional y áreas de interés en desarrollo de software, cloud computing e inteligencia artificial aplicada.",
    image: portfolioImage,
    category: "web", categoryLabel: "Aplicación web", developmentType: "Frontend",
    accentColor: "#02ADEB", status: "completed", platforms: ["web"], featured: true,
    techs: [{ name: "Astro", icon: "astro" }, { name: "Tailwind CSS", icon: "tailwindcss" }, { name: "JavaScript", icon: "javascript" }, { name: "Node.js", icon: "nodejs" }],
    features: ["Experiencia bilingüe en español e inglés.", "Catálogo de proyectos y páginas de detalle.", "Presentación de experiencia, perfil profesional y tecnologías.", "Currículum descargable y página de contacto dedicada.", "Diseño responsivo, animaciones sutiles y soporte de movimiento reducido."],
    caseStudy: {
      heroDescription: "Portafolio personal diseñado para comunicar proyectos, experiencia y evolución profesional con una experiencia clara y accesible.",
      summary: ["Este sitio funciona como el espacio central para presentar mi trabajo como profesional de tecnología, los proyectos que construyo y las áreas en las que continúo creciendo: desarrollo de software, computación en la nube e inteligencia artificial aplicada.", "Fue construido con Astro y Tailwind CSS mediante una arquitectura basada en componentes que mantiene separadas la presentación, el contenido, la localización y los datos de proyectos. Incluye rutas localizadas, páginas de detalle de proyectos, navegación responsiva y pruebas automatizadas."],
      contributions: ["Diseño y desarrollo", "Arquitectura de componentes", "Internacionalización", "Diseño responsivo", "Accesibilidad"],
    },
    liveUrl: "https://www.kendallc.dev/", repoUrl: "https://github.com/KendallCal/portfolio",
  },
  {
    slug: "binary-search-tree-visualizer", title: "Binary Search Tree Visualizer",
    shortDesc: "Aplicación de escritorio interactiva para explorar y visualizar las operaciones fundamentales de un árbol binario de búsqueda.",
    fullDesc: "Aplicación Java con interfaz gráfica que permite insertar, eliminar, buscar y recorrer nodos de un árbol binario de búsqueda, mostrando visualmente los cambios de su estructura.",
    image: bstVisualizerImage,
    category: "desktop", categoryLabel: "Aplicación de escritorio", developmentType: "Estructuras de datos",
    accentColor: "#18D0C3", status: "completed", platforms: ["desktop"], featured: true,
    techs: [{ name: "Java", icon: "java" }, { name: "Java Swing", icon: "javaswing" }, { name: "Apache NetBeans", icon: "netbeans" }],
    features: ["Inserción de nodos con validación de identificadores duplicados.", "Eliminación de nodos hoja, con un hijo y con dos hijos.", "Búsqueda de nodos y consulta de la información almacenada.", "Recorridos in-order, pre-order y post-order.", "Representación gráfica de la estructura actual del árbol."],
    caseStudy: {
      heroDescription: "Visualizador interactivo que convierte las operaciones de un árbol binario de búsqueda en una experiencia gráfica y práctica.",
      summary: ["Binary Search Tree Visualizer fue desarrollado para el curso de Estructuras de Datos de la UNED. La aplicación facilita observar cómo cambia un árbol binario de búsqueda cuando se insertan, eliminan o consultan nodos.", "El proyecto combina algoritmos recursivos, validación de datos, programación orientada a objetos y una interfaz Java Swing para transformar conceptos fundamentales de estructuras de datos en una experiencia interactiva."],
      contributions: ["Estructura de datos BST", "Algoritmos recursivos", "Interfaz Java Swing", "Visualización gráfica", "Validación de datos"],
    },
    repoUrl: "https://github.com/KendallCal/BinarySearchTreeVisualizer",
  },
  {
    slug: "videoteca-uned", title: "VideotecaUNED",
    shortDesc: "Sistema de gestión de alquiler de películas con arquitectura cliente-servidor, comunicación TCP/IP y persistencia en SQL Server.",
    fullDesc: "Aplicación de escritorio cliente-servidor para gestionar alquileres de películas, sucursales, clientes y catálogo mediante conexiones TCP/IP concurrentes y una base de datos SQL Server.",
    image: videotecaUnedImage,
    category: "desktop", categoryLabel: "Aplicación de escritorio", developmentType: "Cliente-servidor",
    accentColor: "#FDFF00", status: "completed", platforms: ["desktop"], featured: true,
    techs: [{ name: "C#", icon: "csharp" }, { name: ".NET", icon: "dotnet" }, { name: "SQL Server", icon: "sqlserver" }, { name: "TCP/IP", icon: "tcpip" }],
    features: ["Validación de clientes y consulta de sucursales disponibles.", "Catálogo de películas, solicitudes de alquiler e historial de alquileres.", "Gestión CRUD de categorías, películas, gerentes, sucursales y clientes.", "Manejo de múltiples conexiones mediante multihilo.", "Registro de actividad en tiempo real y persistencia en SQL Server."],
    caseStudy: {
      heroDescription: "Sistema de alquiler de películas que conecta aplicaciones cliente y servidor mediante TCP/IP, centralizando la lógica de negocio y la persistencia de datos.",
      summary: ["VideotecaUNED fue desarrollado como proyecto final del curso de Programación Avanzada de la UNED. El cliente permite validar usuarios, consultar sucursales y películas, solicitar alquileres y revisar su historial.", "El servidor concentra la lógica de negocio, procesa solicitudes concurrentes y mantiene la información del sistema en SQL Server. El proyecto aplica programación orientada a objetos, comunicación en red, concurrencia, operaciones CRUD, manejo de excepciones y registro de actividad."],
      contributions: ["Arquitectura cliente-servidor", "Aplicación de escritorio", "Comunicación TCP/IP", "Concurrencia", "Persistencia SQL Server"],
    },
    repoUrl: "https://github.com/KendallCal/VideotecaUNED",
  },
  {
    slug: "banker-sim", title: "BankerSim",
    shortDesc: "Simulador interactivo del algoritmo del banquero para analizar asignación segura de recursos y prevenir bloqueos del sistema.",
    fullDesc: "Aplicación de escritorio Java que simula procesos, recursos y estados seguros o inseguros mediante el algoritmo del banquero para evitar interbloqueos.",
    image: bankerSimImage,
    category: "desktop", categoryLabel: "Aplicación de escritorio", developmentType: "Sistemas operativos",
    accentColor: "#132232", status: "completed", platforms: ["desktop"], featured: true,
    techs: [{ name: "Java", icon: "java" }, { name: "Java Swing", icon: "javaswing" }, { name: "Apache NetBeans", icon: "netbeans" }, { name: "Banker's Algorithm", icon: "bankersalgorithm" }],
    features: ["Simulación interactiva del algoritmo del banquero.", "Evaluación de estados seguros e inseguros del sistema.", "Gestión de procesos y recursos disponibles.", "Uso de matrices y vectores para modelar la asignación de recursos.", "Visualización de los estados de los procesos y sus recursos asignados."],
    caseStudy: {
      heroDescription: "Simulador visual del algoritmo del banquero para comprender decisiones de asignación de recursos y prevención de bloqueos.",
      summary: ["BankerSim fue desarrollado para el curso de Sistemas Operativos de la UNED. Permite ingresar procesos y recursos, y analizar si el sistema puede conceder una asignación sin entrar en un estado de bloqueo.", "La aplicación presenta matrices de asignación, vectores de recursos disponibles y el estado de cada proceso en una interfaz gráfica. El proyecto aplica conceptos de gestión de procesos, asignación de recursos, estados seguros y algoritmos de prevención de interbloqueos."],
      contributions: ["Implementación del algoritmo", "Modelado de recursos", "Interfaz Java Swing", "Gestión de procesos", "Visualización de estados"],
    },
    repoUrl: "https://github.com/KendallCal/BankerSim",
  },
];

type ProjectTranslation = Pick<Project, "shortDesc" | "fullDesc" | "categoryLabel" | "developmentType" | "features" | "media" | "caseStudy">;

const englishProjectTranslations: Record<ProjectSlug, ProjectTranslation> = {
  eduvialcr: {
    shortDesc: "An EdTech platform for preparing for Costa Rica's COSEVI driving theory test through courses, quizzes, and adaptive simulators.",
    fullDesc: "EduvialCR helps people in Costa Rica prepare for the driving theory test through a modular learning experience, progress tracking, and simulations designed to reinforce their weaker areas.",
    categoryLabel: "Mobile app", developmentType: "Full stack",
    features: ["Modular courses for B1 and A1/A2 licenses.", "Quizzes and learning progress tracking.", "Practice and exam simulation modes.", "Adaptive questions based on areas that need reinforcement.", "Progress, performance, and history dashboard."],
    media: [{ type: "image", image: eduvialSimulatorSelectionConcept, alt: "EduvialCR vehicle and practice mode selector" }, { type: "image", image: eduvialPracticeSimulatorConcept, alt: "EduvialCR practice simulator with feedback" }, { type: "image", image: eduvialLearningDashboardConcept, alt: "EduvialCR lesson and learning progress" }],
    caseStudy: {
      heroDescription: "An EdTech platform for preparing for Costa Rica's COSEVI driving theory test. It combines courses, quizzes, and learning progress tracking. Its adaptive simulators reinforce the areas each student needs to practice.",
      summary: ["EduvialCR is an EdTech platform I developed to help people in Costa Rica prepare for the COSEVI driving theory test. The experience brings together modular courses for cars and motorcycles, lessons with video and visual content, quizzes, progress tracking, and a simulator with practice and exam modes.", "I built the project as a cross-platform solution: a modern web application, a modular API with relational persistence, an administration panel, and an evolving Flutter mobile app. Its main differentiator is an adaptive simulation engine that uses the student's history to reinforce weaker areas, provide useful feedback, and turn every attempt into a concrete study guide."],
      contributions: ["Product and UX", "Web frontend", "Backend and API", "Database", "Adaptive engine", "Mobile application"],
    },
  },
  "videoteca-uned": {
    shortDesc: "A movie rental management system with client-server architecture, TCP/IP communication, and SQL Server persistence.",
    fullDesc: "A client-server desktop application for managing movie rentals, branches, clients, and catalog data through concurrent TCP/IP connections and a SQL Server database.",
    categoryLabel: "Desktop application", developmentType: "Client-server",
    features: ["Client validation and available branch lookup.", "Movie catalog, rental requests, and rental history.", "CRUD management for categories, movies, managers, branches, and clients.", "Multithreaded handling of multiple connections.", "Real-time activity logging and SQL Server persistence."],
    caseStudy: { heroDescription: "A movie rental system that connects client and server applications over TCP/IP, centralizing business logic and data persistence.", summary: ["VideotecaUNED was developed as the final project for UNED's Advanced Programming course. The client lets users validate accounts, browse branches and movies, submit rental requests, and review rental history.", "The server centralizes business logic, processes concurrent requests, and maintains system data in SQL Server. The project applies object-oriented programming, network communication, concurrency, CRUD operations, exception handling, and activity logging."], contributions: ["Client-server architecture", "Desktop application", "TCP/IP communication", "Concurrency", "SQL Server persistence"] },
  },
  "binary-search-tree-visualizer": {
    shortDesc: "An interactive desktop application for exploring and visualizing fundamental Binary Search Tree operations.",
    fullDesc: "A Java application with a graphical interface for inserting, deleting, searching, and traversing Binary Search Tree nodes while visually showing structural changes.",
    categoryLabel: "Desktop application", developmentType: "Data structures",
    features: ["Node insertion with duplicate ID validation.", "Deletion of leaf nodes and nodes with one or two children.", "Node search and stored-information lookup.", "In-order, pre-order, and post-order traversals.", "Graphical representation of the current tree structure."],
    caseStudy: { heroDescription: "An interactive visualizer that turns Binary Search Tree operations into a practical graphical experience.", summary: ["Binary Search Tree Visualizer was developed for UNED's Data Structures course. The application makes it easier to observe how a Binary Search Tree changes as nodes are inserted, deleted, or queried.", "The project combines recursive algorithms, data validation, object-oriented programming, and a Java Swing interface to turn foundational data-structure concepts into an interactive experience."], contributions: ["BST data structure", "Recursive algorithms", "Java Swing interface", "Graphical visualization", "Data validation"] },
  },
  "banker-sim": {
    shortDesc: "An interactive Banker's Algorithm simulator for analyzing safe resource allocation and preventing system deadlocks.",
    fullDesc: "A Java desktop application that simulates processes, resources, and safe or unsafe states using the Banker's Algorithm to avoid deadlocks.",
    categoryLabel: "Desktop application", developmentType: "Operating systems",
    features: ["Interactive Banker's Algorithm simulation.", "Safe and unsafe system-state evaluation.", "Process and available-resource management.", "Matrices and vectors for modeling resource allocation.", "Visualization of process states and assigned resources."],
    caseStudy: { heroDescription: "A visual Banker's Algorithm simulator for understanding resource-allocation decisions and deadlock prevention.", summary: ["BankerSim was developed for UNED's Operating Systems course. It lets users enter processes and resources, then analyze whether the system can grant an allocation without entering a deadlock state.", "The application presents allocation matrices, available-resource vectors, and each process's state through a graphical interface. It applies process-management, resource-allocation, safe-state, and deadlock-avoidance concepts."], contributions: ["Algorithm implementation", "Resource modeling", "Java Swing interface", "Process management", "State visualization"] },
  },
  portfolio: {
    shortDesc: "A bilingual personal portfolio showcasing projects, professional experience, technologies, and technical background.",
    fullDesc: "A responsive personal website that centralizes projects, professional experience, career journey, and interests in software development, cloud computing, and applied artificial intelligence.",
    categoryLabel: "Web application", developmentType: "Frontend",
    features: ["Bilingual Spanish and English experience.", "Project catalog and detail pages.", "Professional experience, profile, and technology presentation.", "Downloadable résumé and dedicated contact page.", "Responsive layout, subtle animations, and reduced-motion support."],
    caseStudy: { heroDescription: "A personal portfolio designed to communicate projects, experience, and professional growth through a clear, accessible experience.", summary: ["This website is the central place for presenting my work as a technology professional, the projects I build, and the areas where I continue developing: software development, cloud computing, and applied artificial intelligence.", "It was built with Astro and Tailwind CSS using a component-based architecture that keeps presentation, content, localization, and project data separate. It includes localized routes, project-detail pages, responsive navigation, and automated tests."], contributions: ["Design and development", "Component architecture", "Internationalization", "Responsive design", "Accessibility"] },
  },
};

export const getProjects = (language: Language): Project[] =>
  language === "es"
    ? projects
    : projects.map((project) => ({ ...project, ...englishProjectTranslations[project.slug] }));
