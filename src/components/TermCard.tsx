import { Term } from "@/types/term";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface TermCardProps {
  term: Term;
}

export const TermCard = ({ term }: TermCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group cursor-pointer transition-smooth hover:shadow-elegant hover:-translate-y-1 bg-gradient-card"
      onClick={() => navigate(`/term/${term.id}`)}
    >
      <CardContent className="p-0">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <img
            src={term.thumbnailImage}
            alt={term.name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {term.letter}
              </div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
                {term.name}
              </h3>
            </div>
            <Badge 
              variant={
                term.category === 'Prime Mover' ? 'default' : 
                term.category === 'Hybrid Vehicle' ? 'secondary' : 'outline'
              }
              className="ml-2 shrink-0"
            >
              {term.category}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {term.shortDefinition}
          </p>
          <div className="flex flex-wrap gap-1">
            {term.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {term.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{term.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};