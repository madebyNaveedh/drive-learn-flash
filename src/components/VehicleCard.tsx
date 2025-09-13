import { Vehicle } from "@/types/vehicle";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group cursor-pointer transition-smooth hover:shadow-elegant hover:-translate-y-1 bg-gradient-card"
      onClick={() => navigate(`/vehicle/${vehicle.id}`)}
    >
      <CardContent className="p-0">
        <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
          <img
            src={vehicle.thumbnailImage}
            alt={vehicle.name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
              {vehicle.name}
            </h3>
            <Badge 
              variant={vehicle.category === 'Prime Mover' ? 'default' : 'secondary'}
              className="ml-2 shrink-0"
            >
              {vehicle.category}
            </Badge>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
            {vehicle.shortDefinition}
          </p>
          <div className="flex flex-wrap gap-1">
            {vehicle.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {vehicle.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{vehicle.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};