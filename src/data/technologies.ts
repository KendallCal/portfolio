/* 
  ============================================================
   Tipos e interfaces
  ============================================================ 
*/

/* Tamaños disponibles para cada tecnología mostrada en el Hero. */
export type TechnologySize = "small" | "medium" | "large";

/* Estructura que debe cumplir cada tecnología. */
export interface Technology {
  name: string;
  icon: string;
  size: TechnologySize;
  position: {
    x: number;
    y: number;
  };
}

/* 
  ============================================================
   Tecnologías
  ============================================================ 
*/

/*
 * Lista de tecnologías mostradas.
 * Cada elemento define su nombre, icono, tamaño y posición.
 *
 * Para agregar una nueva tecnología, basta con incluirla aquí utilizando el nombre del icono correspondiente ubicado en components/icons.
 */
export const technologies: Technology[] = [
  { name: "Python", icon: "Python", size: "large", position: { x: 10, y: 16 } },
  { name: "C#", icon: "CSharp", size: "medium", position: { x: 31, y: 27 } },
  { name: "AWS", icon: "AWS", size: "small", position: { x: 55, y: 13 } },
  { name: "Java", icon: "Java", size: "large", position: { x: 87, y: 19 } },

  { name: "CSS", icon: "CSS", size: "small", position: { x: 16, y: 44 } },
  { name: "HTML", icon: "HTML", size: "medium", position: { x: 40, y: 38 } },
  { name: "Git", icon: "Git", size: "large", position: { x: 67, y: 34 } },
  { name: "GitHub", icon: "GitHub", size: "medium", position: { x: 90, y: 47 } },

  { name: "OpenAI", icon: "OpenAI", size: "medium", position: { x: 8, y: 72 } },
  { name: "Claude", icon: "Claude", size: "large", position: { x: 31, y: 63 } },
  { name: "OpenCode", icon: "OpenCode", size: "small", position: { x: 56, y: 72 } },
  { name: "MySQL", icon: "MySql", size: "medium", position: { x: 83, y: 67 } },

  { name: "Visual Studio Code", icon: "VSA", size: "small", position: { x: 17, y: 89 } },
  { name: "Visual Studio", icon: "VSM", size: "medium", position: { x: 42, y: 85 } },
  { name: "Next.js", icon: "NextJS", size: "large", position: { x: 68, y: 91 } },
  { name: "JavaScript", icon: "JavaScript", size: "medium", position: { x: 91, y: 84 } },
];