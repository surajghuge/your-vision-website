import { AgentTool } from "@/types/catalog";
import { Bot, Wrench, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  agent: AgentTool;
  onClick: () => void;
  index: number;
}

const lifecycleColors: Record<string, string> = {
  Ideation: "bg-muted text-muted-foreground",
  POC: "bg-warning/10 text-warning",
  Development: "bg-accent/10 text-accent",
  Pilot: "bg-tool/10 text-tool",
  Production: "bg-success/10 text-success",
  Retired: "bg-destructive/10 text-destructive",
};

const AgentCard = ({ agent, onClick, index }: AgentCardProps) => {
  const isAgent = agent.type === "agent";

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-card p-6 text-left shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="mb-4 flex items-start justify-between">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg",
            isAgent ? "bg-accent/10" : "bg-tool/10"
          )}
        >
          {isAgent ? (
            <Bot className="h-5 w-5 text-accent" />
          ) : (
            <Wrench className="h-5 w-5 text-tool" />
          )}
        </div>
        <Badge
          variant="secondary"
          className={cn("text-xs font-medium", lifecycleColors[agent.lifecycleStage])}
        >
          {agent.lifecycleStage}
        </Badge>
      </div>

      <h3 className="mb-2 font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {agent.name}
      </h3>

      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {agent.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {agent.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
      </div>
    </button>
  );
};

export default AgentCard;
