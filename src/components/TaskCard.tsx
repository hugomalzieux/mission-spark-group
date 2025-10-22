import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface TaskCardProps {
  id: string;
  title: string;
  location: string;
  hours: number;
  expiresIn: string;
  points: number;
  image: string;
  category: string;
  isGroupTask?: boolean;
}

export const TaskCard = ({ 
  title, 
  location, 
  hours, 
  expiresIn, 
  points, 
  image, 
  category,
  isGroupTask 
}: TaskCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3 p-3">
        <div className="relative w-24 h-24 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex gap-2 mb-1">
              <Badge variant="task" className="text-xs">
                {category}
              </Badge>
              {isGroupTask && (
                <Badge variant="group" className="text-xs">
                  Group task
                </Badge>
              )}
            </div>
            <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
              <MapPin className="w-3 h-3" />
              <span className="line-clamp-1">{location}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-xs mt-2">
            <div className="flex items-center gap-3">
              <span className="font-medium">Hours: {hours}</span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Expires: {expiresIn}</span>
              </div>
            </div>
            <div className="font-bold text-task text-base">{points}.-</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
