import { useState } from "react";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MissionCard } from "@/components/MissionCard";
import { BottomNav } from "@/components/BottomNav";

const Missions = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { label: "All", value: "all" },
    { label: "In Progress", value: "progress" },
    { label: "New", value: "new" },
    { label: "Ending Soon", value: "ending" },
  ];

  const missions = [
    {
      id: "1",
      title: "Community Garden Revival",
      description: "Transform the neighborhood garden into a thriving space",
      progress: 65,
      totalTasks: 10,
      completedTasks: 6,
      participants: 24,
      points: 500,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
    },
    {
      id: "2",
      title: "Clean Streets Initiative",
      description: "Keep our streets clean and beautiful all year round",
      progress: 40,
      totalTasks: 8,
      completedTasks: 3,
      participants: 18,
      points: 350,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
    },
    {
      id: "3",
      title: "Park Restoration Project",
      description: "Restore and beautify our local parks",
      progress: 80,
      totalTasks: 15,
      completedTasks: 12,
      participants: 45,
      points: 750,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      id: "4",
      title: "Urban Painting Mission",
      description: "Add color to our city with community art",
      progress: 25,
      totalTasks: 12,
      completedTasks: 3,
      participants: 32,
      points: 600,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
    },
    {
      id: "5",
      title: "Neighborhood Watch",
      description: "Build a safer community together",
      progress: 55,
      totalTasks: 6,
      completedTasks: 3,
      participants: 28,
      points: 400,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Link to="/">
              <Button size="icon" variant="ghost">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold flex-1">All Missions</h1>
            <Button size="icon" variant="ghost">
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search missions..."
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-full text-sm outline-none focus:ring-2 ring-accent"
            />
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <Badge
              key={filter.value}
              variant={selectedFilter === filter.value ? "mission" : "outline"}
              className="px-4 py-2 cursor-pointer whitespace-nowrap"
              onClick={() => setSelectedFilter(filter.value)}
            >
              {filter.label}
            </Badge>
          ))}
        </div>

        {/* Mission List */}
        <div className="space-y-3">
          {missions.map((mission) => (
            <MissionCard key={mission.id} {...mission} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Missions;
