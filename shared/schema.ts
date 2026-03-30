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

// Definitions for the User and Auth
export interface User {
  id: string;
  name: string;
  role: 'student' | 'admin';
  avatar: string;
}

export interface AuthState {
  currentUser: User;
  isAuthenticated: boolean;
}

// Definitions for the Dashboard
export interface StatCard {
  label: string;
  value: string | number;
  trend: string;
}

// Definitions for Active Learning / Quizzes
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
}

// The "Master" Shape that combines everything
export interface FullMockData {
  auth: AuthState;
  dashboard: {
    stats: StatCard[];
    recentActivity: any[];
  };
  aiEditor: {
    currentProject: string;
    files: Array<{ name: string; language: string; content: string }>;
    aiSuggestions: string[];
  };
  activeLearning: {
    currentModule: string;
    progress: number;
    quiz: QuizQuestion[];
  };
}
export type Challenge = z.infer<typeof ChallengeSchema>;
export type AIHint = z.infer<typeof AIHintSchema>;