import { z } from "zod";

// The shape of a Coding Challenge
export const ChallengeSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(), // Markdown supported
  initialCode: z.string(),
  language: z.enum(["python", "javascript", "typescript"]),
  difficulty: z.enum(["Beginner", "Intermediate", "Advanced"]),
});

// The shape of the AI's response (Hint System)
export const AIHintSchema = z.object({
  type: z.enum(["syntax", "logic", "optimization"]),
  content: z.string(),
  relevantLine: z.number().optional(),
});

export interface User {
  id: string;
  name: string;
  role: 'student' | 'admin';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
}

export type Challenge = z.infer<typeof ChallengeSchema>;
export type AIHint = z.infer<typeof AIHintSchema>;