export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  GAMEOVER = 'GAMEOVER',
  LEADERBOARD = 'LEADERBOARD'
}

export enum Topic {
  VOCABULARY = 'Naval Vocabulary & Terms',
  PAST_SIMPLE = 'Past Simple (Was/Were/Irregular)',
  SHOULD_IMPERATIVES = 'Should, Advice & Imperatives',
  PRESENT_CONT_VS_SIMPLE = 'Present Simple vs Continuous',
  MOVEMENT = 'Prepositions & Adverbs of Movement',
  REQUESTS_OFFERS = 'Requests & Offers (Hotel/Service)',
  MIXED = 'General Naval Drill (Mixed)'
}

export interface Question {
  id: string;
  scenario: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GameSession {
  score: number;
  streak: number;
  health: number;
  rank: string;
  topic: Topic;
  history: {
    questionCount: number;
    correctCount: number;
  };
  seenQuestions: Record<string, number>; // Hangi soru kaç kere görüldü?
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  rank: string;
  date: string;
}
