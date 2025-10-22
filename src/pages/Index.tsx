import { useState } from "react";
import { Search, Bell, Heart, Settings, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TaskCard } from "@/components/TaskCard";
import { MissionCard } from "@/components/MissionCard";
import { GroupCard } from "@/components/GroupCard";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"all" | "my">("all");

  const categories = [
    { label: "All", count: 324, value: "all" },
    { label: "Group", count: 9, value: "group" },
    { label: "Cleaning", count: 8, value: "cleaning" },
    { label: "Popular", count: 10, value: "popular" },
  ];

  const tasks = [
    {
      id: "1",
      title: "Painting Limbrichter Poles",
      location: "Dautzenbergstraat 22, 6411 LC Heerlen",
      hours: 1,
      expiresIn: "2 days",
      points: 30,
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
      category: "Painting",
    },
    {
      id: "2",
      title: "Painting Limbrichter Poles",
      location: "Dautzenbergstraat 22, 6411 LC Heerlen",
      hours: 1,
      expiresIn: "2 days",
      points: 100,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      category: "Cleaning",
      isGroupTask: true,
    },
  ];

  const missions = [
    {
      id: "1",
      title: "Community Garden Revival",
      description: "Transform the neighborhood garden",
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
      description: "Keep our streets clean and beautiful",
      progress: 40,
      totalTasks: 8,
      completedTasks: 3,
      participants: 18,
      points: 350,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
    },
  ];

  const groups = [
    {
      id: "1",
      name: "Green Warriors",
      description: "Environmental activists making a difference",
      members: 156,
      activeTasks: 12,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      category: "Environment",
    },
    {
      id: "2",
      name: "Community Helpers",
      description: "Helping neighbors, building community",
      members: 89,
      activeTasks: 8,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      category: "Community",
      isJoined: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Home</h1>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="ghost">
                <Settings className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Bell className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search job or location"
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-full text-sm outline-none focus:ring-2 ring-accent"
            />
            <Button 
              size="icon" 
              variant="task"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-6">
        {/* Tasks Tab */}
        <div className="flex gap-2 mb-4">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            className="flex-1 rounded-full"
            onClick={() => setActiveTab("all")}
          >
            All Tasks
          </Button>
          <Button
            variant={activeTab === "my" ? "default" : "outline"}
            className="flex-1 rounded-full"
            onClick={() => setActiveTab("my")}
          >
            My Tasks
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Badge
              key={cat.value}
              variant={cat.value === "all" ? "task" : "outline"}
              className="px-4 py-2 cursor-pointer whitespace-nowrap"
            >
              {cat.label} {cat.count}
            </Badge>
          ))}
        </div>

        {/* Tasks Section */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Available Tasks</h2>
            <Link to="/tasks">
              <Button variant="ghost" size="sm" className="gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {tasks.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        </section>

        {/* Missions Section */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Active Missions</h2>
            <Link to="/missions">
              <Button variant="ghost" size="sm" className="gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {missions.map((mission) => (
              <MissionCard key={mission.id} {...mission} />
            ))}
          </div>
        </section>

        {/* Groups Section */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold">Recommended Groups</h2>
            <Link to="/groups">
              <Button variant="ghost" size="sm" className="gap-1">
                See all <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {groups.map((group) => (
              <GroupCard key={group.id} {...group} />
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
