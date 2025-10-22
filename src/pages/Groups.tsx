import { useState } from "react";
import { ArrowLeft, Search, Plus, TrendingUp, Users as UsersIcon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GroupCard } from "@/components/GroupCard";
import { BottomNav } from "@/components/BottomNav";

const Groups = () => {
  const [selectedTab, setSelectedTab] = useState<"discover" | "my">("discover");

  const featuredGroups = [
    {
      id: "1",
      name: "Green Warriors",
      description: "Environmental activists making a real difference in our community",
      members: 456,
      activeTasks: 23,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=300&fit=crop",
      category: "Environment",
      trending: true,
    },
    {
      id: "2",
      name: "Community Builders",
      description: "Building stronger neighborhoods together",
      members: 312,
      activeTasks: 18,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      category: "Community",
      trending: true,
    },
    {
      id: "3",
      name: "Art Collective",
      description: "Bringing color and creativity to our streets",
      members: 234,
      activeTasks: 15,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=300&fit=crop",
      category: "Arts",
      trending: true,
    },
  ];

  const allGroups = [
    {
      id: "4",
      name: "Community Helpers",
      description: "Helping neighbors, building community bonds",
      members: 189,
      activeTasks: 12,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop",
      category: "Community",
    },
    {
      id: "5",
      name: "Clean City Squad",
      description: "Keeping our city clean and beautiful",
      members: 267,
      activeTasks: 20,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      category: "Environment",
    },
    {
      id: "6",
      name: "Garden Enthusiasts",
      description: "Growing together, one garden at a time",
      members: 145,
      activeTasks: 9,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=300&fit=crop",
      category: "Gardening",
    },
  ];

  const myGroups = [
    {
      id: "2",
      name: "Community Builders",
      description: "Building stronger neighborhoods together",
      members: 312,
      activeTasks: 18,
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      category: "Community",
      isJoined: true,
    },
    {
      id: "5",
      name: "Clean City Squad",
      description: "Keeping our city clean and beautiful",
      members: 267,
      activeTasks: 20,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
      category: "Environment",
      isJoined: true,
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
            <h1 className="text-2xl font-bold flex-1">Groups</h1>
            <Button size="icon" variant="group">
              <Plus className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search groups..."
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-full text-sm outline-none focus:ring-2 ring-accent"
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              variant={selectedTab === "discover" ? "default" : "outline"}
              className="flex-1 rounded-full"
              onClick={() => setSelectedTab("discover")}
            >
              Discover
            </Button>
            <Button
              variant={selectedTab === "my" ? "default" : "outline"}
              className="flex-1 rounded-full"
              onClick={() => setSelectedTab("my")}
            >
              My Groups
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-6">
        {selectedTab === "discover" ? (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-2">
              <Card className="p-3 text-center">
                <UsersIcon className="w-5 h-5 mx-auto mb-1 text-group" />
                <div className="text-lg font-bold">156</div>
                <div className="text-xs text-muted-foreground">Groups</div>
              </Card>
              <Card className="p-3 text-center">
                <TrendingUp className="w-5 h-5 mx-auto mb-1 text-task" />
                <div className="text-lg font-bold">2.3k</div>
                <div className="text-xs text-muted-foreground">Members</div>
              </Card>
              <Card className="p-3 text-center">
                <Sparkles className="w-5 h-5 mx-auto mb-1 text-mission" />
                <div className="text-lg font-bold">89</div>
                <div className="text-xs text-muted-foreground">Active</div>
              </Card>
            </div>

            {/* Create Group CTA */}
            <Card className="p-4 bg-gradient-to-br from-group/10 to-group/5 border-group/20">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Create Your Own Group</h3>
                  <p className="text-sm text-muted-foreground">
                    Start a community around your passion
                  </p>
                </div>
                <Button variant="group" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create
                </Button>
              </div>
            </Card>

            {/* Trending Groups */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-group" />
                <h2 className="text-lg font-bold">Trending Groups</h2>
              </div>
              <div className="space-y-3">
                {featuredGroups.map((group) => (
                  <GroupCard key={group.id} {...group} />
                ))}
              </div>
            </section>

            {/* All Groups */}
            <section>
              <h2 className="text-lg font-bold mb-3">All Groups</h2>
              <div className="space-y-3">
                {allGroups.map((group) => (
                  <GroupCard key={group.id} {...group} />
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            {/* My Groups */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold">Your Groups ({myGroups.length})</h2>
              </div>
              {myGroups.length > 0 ? (
                <div className="space-y-3">
                  {myGroups.map((group) => (
                    <GroupCard key={group.id} {...group} />
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <UsersIcon className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
                  <h3 className="font-semibold mb-2">No groups yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join groups to connect with others
                  </p>
                  <Button variant="group" onClick={() => setSelectedTab("discover")}>
                    Discover Groups
                  </Button>
                </Card>
              )}
            </section>
          </>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Groups;
