import { useState, useMemo } from "react";
import { TermCard } from "@/components/TermCard";
import { SearchAndFilter } from "@/components/SearchAndFilter";
import { AlphabetNavigation } from "@/components/AlphabetNavigation";
import { Button } from "@/components/ui/button";
import { terms } from "@/data/terms";
import { useNavigate } from "react-router-dom";
import { BookOpen, Brain } from "lucide-react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredTerms = useMemo(() => {
    return terms.filter((term) => {
      const matchesSearch = term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === null || term.category === selectedCategory;
      const matchesLetter = selectedLetter === null || term.letter === selectedLetter;

      return matchesSearch && matchesCategory && matchesLetter;
    });
  }, [searchTerm, selectedCategory, selectedLetter]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground shadow-elegant">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Dictionary A-Z
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Prime Movers and Hybrid Vehicle Terms
              </p>
            </div>
            <Button
              variant="secondary"
              onClick={() => navigate('/quiz')}
              className="flex items-center gap-2"
            >
              <Brain className="h-4 w-4" />
              Take Quiz
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-6">
          <SearchAndFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div>
            <p className="text-sm text-muted-foreground mb-3 text-center">
              Browse by letter:
            </p>
            <AlphabetNavigation
              selectedLetter={selectedLetter}
              onLetterChange={setSelectedLetter}
            />
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-muted-foreground">
            {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''} found
            {selectedLetter && ` for letter "${selectedLetter}"`}
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTerms.map((term) => (
            <TermCard key={term.id} term={term} />
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No terms found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;