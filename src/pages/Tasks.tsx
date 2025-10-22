import { useState } from "react";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TaskCard } from "@/components/TaskCard";
import { BottomNav } from "@/components/BottomNav";

const Tasks = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { label: "All", count: 324, value: "all" },
    { label: "Painting", count: 45, value: "painting" },
    { label: "Cleaning", count: 89, value: "cleaning" },
    { label: "Gardening", count: 67, value: "gardening" },
    { label: "Repair", count: 53, value: "repair" },
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
      title: "Community Garden Cleanup",
      location: "Park Street 45, 6411 Amsterdam",
      hours: 2,
      expiresIn: "1 day",
      points: 100,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      category: "Cleaning",
      isGroupTask: true,
    },
    {
      id: "3",
      title: "Fix Broken Benches",
      location: "Central Park, Rotterdam",
      hours: 3,
      expiresIn: "3 days",
      points: 150,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
      category: "Repair",
    },
    {
      id: "4",
      title: "Plant New Trees",
      location: "Green District, Utrecht",
      hours: 4,
      expiresIn: "5 days",
      points: 200,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
      category: "Gardening",
    },
    {
      id: "5",
      title: "Street Art Project",
      location: "Arts Quarter, The Hague",
      hours: 2,
      expiresIn: "4 days",
      points: 120,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
      category: "Painting",
      isGroupTask: true,
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
            <h1 className="text-2xl font-bold flex-1">All Tasks</h1>
            <Button size="icon" variant="ghost">
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-full text-sm outline-none focus:ring-2 ring-accent"
            />
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <Badge
              key={cat.value}
              variant={selectedCategory === cat.value ? "task" : "outline"}
              className="px-4 py-2 cursor-pointer whitespace-nowrap"
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label} {cat.count}
            </Badge>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Tasks;
