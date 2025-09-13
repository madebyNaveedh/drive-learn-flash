import { Button } from "@/components/ui/button";
import { getAllLetters } from "@/data/terms";

interface AlphabetNavigationProps {
  selectedLetter: string | null;
  onLetterChange: (letter: string | null) => void;
}

export const AlphabetNavigation = ({
  selectedLetter,
  onLetterChange,
}: AlphabetNavigationProps) => {
  const availableLetters = getAllLetters();
  const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="flex flex-wrap gap-1 justify-center">
      <Button
        variant={selectedLetter === null ? "default" : "outline"}
        size="sm"
        onClick={() => onLetterChange(null)}
        className="min-w-[40px]"
      >
        All
      </Button>
      {allLetters.map((letter) => {
        const hasTerms = availableLetters.includes(letter);
        return (
          <Button
            key={letter}
            variant={selectedLetter === letter ? "default" : "outline"}
            size="sm"
            onClick={() => hasTerms ? onLetterChange(letter) : null}
            disabled={!hasTerms}
            className="min-w-[40px]"
          >
            {letter}
          </Button>
        );
      })}
    </div>
  );
};