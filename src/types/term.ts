export interface Term {
  id: string;
  name: string;
  letter: string;
  category: 'Prime Mover' | 'Hybrid Vehicle' | 'General';
  thumbnailImage: string;
  largeImage: string;
  shortDefinition: string;
  keyFacts: string[];
  tags: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  term: Term;
}