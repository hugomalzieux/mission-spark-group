import { Users, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GroupCardProps {
  id: string;
  name: string;
  description: string;
  members: number;
  activeTasks: number;
  image: string;
  category?: string;
  isJoined?: boolean;
}

export const GroupCard = ({ 
  name, 
  description,
  members,
  activeTasks,
  image,
  category,
  isJoined = false
}: GroupCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3 p-3">
        <div className="relative w-24 h-24 flex-shrink-0">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="group" className="text-xs">
                {category || "Community"}
              </Badge>
              {isJoined && (
                <Badge variant="outline" className="text-xs">
                  Joined
                </Badge>
              )}
            </div>
            <h3 className="font-semibold text-sm line-clamp-1">{name}</h3>
            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{description}</p>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{members}</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>{activeTasks} tasks</span>
              </div>
            </div>
            <Button 
              size="sm" 
              variant={isJoined ? "outline" : "group"}
              className="h-7 px-3 text-xs"
            >
              {isJoined ? "View" : "Join"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
