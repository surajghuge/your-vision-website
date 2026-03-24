import { useState, useMemo } from "react";
import { Search, Bot, Wrench, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { agentsAndTools, businessUnits } from "@/data/catalogData";
import { AgentTool, BusinessUnit } from "@/types/catalog";
import AgentCard from "@/components/AgentCard";
import AgentDetailModal from "@/components/AgentDetailModal";
import { cn } from "@/lib/utils";

const Catalog = () => {
  const [search, setSearch] = useState("");
  const [selectedBU, setSelectedBU] = useState<BusinessUnit | "all">("all");
  const [selectedType, setSelectedType] = useState<"all" | "agent" | "tool">("all");
  const [selectedAgent, setSelectedAgent] = useState<AgentTool | null>(null);

  const filtered = useMemo(() => {
    return agentsAndTools.filter((item) => {
      // Exclude cancelled/merged/perpetual POC
      if (item.lifecycleStage === "Retired") return false;

      const matchesSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesBU = selectedBU === "all" || item.businessUnit === selectedBU;
      const matchesType = selectedType === "all" || item.type === selectedType;

      return matchesSearch && matchesBU && matchesType;
    });
  }, [search, selectedBU, selectedType]);

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="mb-2 font-heading text-3xl font-bold text-foreground">
            Agentic Catalog
          </h1>
          <p className="text-muted-foreground">
            Browse all agents and tools across Services business units.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search agents and tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            <FilterButton
              active={selectedBU === "all"}
              onClick={() => setSelectedBU("all")}
              icon={Filter}
            >
              All BUs
            </FilterButton>
            {businessUnits.map((bu) => (
              <FilterButton
                key={bu.id}
                active={selectedBU === bu.id}
                onClick={() => setSelectedBU(bu.id)}
              >
                {bu.id}
              </FilterButton>
            ))}
          </div>

          <div className="flex gap-2">
            <FilterButton
              active={selectedType === "all"}
              onClick={() => setSelectedType("all")}
            >
              All
            </FilterButton>
            <FilterButton
              active={selectedType === "agent"}
              onClick={() => setSelectedType("agent")}
              icon={Bot}
            >
              Agents
            </FilterButton>
            <FilterButton
              active={selectedType === "tool"}
              onClick={() => setSelectedType("tool")}
              icon={Wrench}
            >
              Tools
            </FilterButton>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4 text-sm text-muted-foreground">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-20">
            <Search className="mb-4 h-12 w-12 text-muted-foreground/40" />
            <p className="text-lg font-medium text-muted-foreground">No results found</p>
            <p className="text-sm text-muted-foreground/70">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((agent, i) => (
              <AgentCard
                key={agent.id}
                agent={agent}
                index={i}
                onClick={() => setSelectedAgent(agent)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedAgent && (
        <AgentDetailModal
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </div>
  );
};

const FilterButton = ({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon?: React.ElementType;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      active
        ? "bg-accent text-accent-foreground"
        : "bg-muted text-muted-foreground hover:bg-muted/80"
    )}
  >
    {Icon && <Icon className="h-3.5 w-3.5" />}
    {children}
  </button>
);

export default Catalog;
