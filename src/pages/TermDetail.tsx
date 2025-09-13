import { useParams, useNavigate } from "react-router-dom";
import { terms, getAdjacentTerm } from "@/data/terms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const TermDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const term = terms.find(t => t.id === id);
  const nextTerm = term ? getAdjacentTerm(term.id, 'next') : null;
  const prevTerm = term ? getAdjacentTerm(term.id, 'prev') : null;

  if (!term) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Term not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-primary-foreground shadow-elegant">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary-foreground text-primary rounded-full flex items-center justify-center text-xl font-bold">
                {term.letter}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{term.name}</h1>
                <Badge 
                  variant={
                    term.category === 'Prime Mover' ? 'default' : 
                    term.category === 'Hybrid Vehicle' ? 'secondary' : 'outline'
                  }
                  className="mt-2"
                >
                  {term.category}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <Card className="overflow-hidden shadow-card">
              <CardContent className="p-0">
                <img
                  src={term.largeImage}
                  alt={term.name}
                  className="w-full aspect-[4/3] object-cover"
                />
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <div className="space-y-6">
            {/* Definition */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Definition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {term.shortDefinition}
                </p>
              </CardContent>
            </Card>

            {/* Key Facts */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Key Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {term.keyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{fact}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {term.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t">
          <Button
            variant="outline"
            onClick={() => prevTerm && navigate(`/term/${prevTerm.id}`)}
            disabled={!prevTerm}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            {prevTerm ? (
              <span>
                <span className="font-bold">{prevTerm.letter}</span> - {prevTerm.name}
              </span>
            ) : (
              'Previous'
            )}
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Navigate alphabetically through terms
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => nextTerm && navigate(`/term/${nextTerm.id}`)}
            disabled={!nextTerm}
            className="flex items-center gap-2"
          >
            {nextTerm ? (
              <span>
                <span className="font-bold">{nextTerm.letter}</span> - {nextTerm.name}
              </span>
            ) : (
              'Next'
            )}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default TermDetail;