import { Users, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface MissionCardProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  participants: number;
  points: number;
  image: string;
}

export const MissionCard = ({ 
  title, 
  description,
  progress, 
  totalTasks,
  completedTasks,
  participants,
  points, 
  image 
}: MissionCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3 p-3">
        <div className="relative w-24 h-24 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-mission/20 rounded-lg flex items-center justify-center">
            <Target className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="mission" className="text-xs">
                Mission
              </Badge>
              <span className="text-xs text-muted-foreground">
                {completedTasks}/{totalTasks} tasks
              </span>
            </div>
            <h3 className="font-semibold text-sm line-clamp-1">{title}</h3>
            <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{description}</p>
          </div>
          
          <div className="space-y-2 mt-2">
            <Progress value={progress} className="h-2" />
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Users className="w-3 h-3" />
                <span>{participants} joined</span>
              </div>
              <div className="font-bold text-mission text-base">{points}.-</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
