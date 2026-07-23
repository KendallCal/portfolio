export type TechnologySize = "small" | "medium" | "large";

export interface Technology {
  name: string;
  icon: string;
  size: TechnologySize;
  position: { x: number; y: number };
}

// Add a technology here and its original icon from components/icons is loaded automatically.
export const technologies: Technology[] = [
  { name: "NextJS", icon: "NextJS", size: "large", position: { x: 12, y: 28 } },
  { name: "TypeScript", icon: "TypeScript", size: "medium", position: { x: 34, y: 18 } },
  { name: "Flutter", icon: "Flutter", size: "small", position: { x: 57, y: 31 } },
  { name: "Python", icon: "Python", size: "large", position: { x: 82, y: 20 } },
  { name: "FastAPI", icon: "FastAPI", size: "medium", position: { x: 22, y: 70 } },
  { name: "PostgreSQL", icon: "PostgreSQL", size: "small", position: { x: 45, y: 61 } },
  { name: "Supabase", icon: "Supabase", size: "large", position: { x: 66, y: 76 } },
  { name: "AWS", icon: "AWS", size: "medium", position: { x: 89, y: 62 } },
  { name: "GitHub", icon: "GitHub", size: "small", position: { x: 8, y: 84 } },
];
