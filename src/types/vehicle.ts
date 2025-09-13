export interface Vehicle {
  id: string;
  name: string;
  category: 'Prime Mover' | 'Hybrid Vehicle';
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
  vehicle: Vehicle;
}