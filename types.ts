export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  GAMEOVER = 'GAMEOVER',
  LEADERBOARD = 'LEADERBOARD'
}

export enum Topic {
  PAST_SIMPLE = 'Past Simple (Was/Were/Irregular)',
  SHOULD_IMPERATIVES = 'Should, Advice & Imperatives',
  PRESENT_CONT_VS_SIMPLE = 'Present Simple vs Continuous',
  MOVEMENT = 'Prepositions & Adverbs of Movement',
  REQUESTS_OFFERS = 'Requests & Offers (Hotel/Service)',
  MIXED = 'General Naval Drill (Mixed)'
}

export interface Question {
  id: string;
  scenario: string; // The naval context
  questionText: string; // The actual fill-in-the-blank or question
  options: string[];
  correctAnswer: string;
  explanation: string; // Why the answer is correct
}

export interface GameSession {
  score: number;
  streak: number;
  health: number; // Hull integrity
  rank: string;
  topic: Topic;
  history: {
    questionCount: number;
    correctCount: number;
  };
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  rank: string;
  date: string;
}