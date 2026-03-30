import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { businessUnits, agentsAndTools } from "@/data/catalogData";
import { AgentTool } from "@/types/catalog";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

const lifecycleColors: Record<string, string> = {
  Ideation: "bg-muted text-muted-foreground",
  POC: "bg-warning/10 text-warning",
  Development: "bg-accent/10 text-accent",
  Pilot: "bg-tool/10 text-tool",
  Production: "bg-success/10 text-success",
  Retired: "bg-destructive/10 text-destructive",
};

const PaginatedList = ({ items, title, accentClass }: { items: AgentTool[]; title: string; accentClass: string }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / ITEMS_PER_PAGE));
  const paginated = items.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <span className={cn("font-heading text-2xl font-bold", accentClass)}>{items.length}</span>
          <span className="text-sm font-medium text-foreground">{title}</span>
        </div>
        {totalPages > 1 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{page} / {totalPages}</span>
          </div>
        )}
      </div>

      <div className="divide-y divide-border">
        {paginated.map((item) => (
          <div key={item.id} className="flex items-center justify-between px-6 py-3 hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-sm font-medium text-foreground truncate">{item.name}</span>
            </div>
            <Badge variant="secondary" className={cn("text-xs shrink-0 ml-3", lifecycleColors[item.lifecycleStage])}>
              {item.lifecycleStage}
            </Badge>
          </div>
        ))}
        {items.length === 0 && (
          <div className="px-6 py-4 text-sm text-muted-foreground">No items found.</div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-1 border-t border-border px-4 py-3">
          <Button variant="ghost" size="icon" className="h-8 w-8" disabled={page <= 1} onClick={() => setPage(page - 1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              variant={page === i + 1 ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8 text-xs"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button variant="ghost" size="icon" className="h-8 w-8" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

const BUView = () => {
  const { buId } = useParams<{ buId: string }>();
  const bu = businessUnits.find(
    (b) => b.id.toLowerCase() === buId?.toLowerCase()
  );

  if (!bu) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Business unit not found.</p>
      </div>
    );
  }

  const buAgents = agentsAndTools.filter(
    (a) => a.businessUnit === bu.id && a.lifecycleStage !== "Retired"
  );
  const agents = buAgents.filter((a) => a.type === "agent");
  const tools = buAgents.filter((a) => a.type === "tool");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero px-6 py-20 text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h1 className="mb-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {bu.title}
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            {bu.heroDescription}
          </p>
          <Button asChild size="lg" className="gradient-accent border-0 text-accent-foreground font-semibold hover:opacity-90">
            <Link to="/catalog">
              View All Agents & Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card px-6 py-10">
        <div className="container mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
          {bu.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">
            About {bu.title}
          </h2>
          <p className="mb-10 text-base leading-relaxed text-muted-foreground">
            {bu.description}
          </p>

          {/* Agent/Tool breakdown with pagination */}
          <div className="grid gap-6 sm:grid-cols-2">
            <PaginatedList items={agents} title="AI Agents" accentClass="text-accent" />
            <PaginatedList items={tools} title="Tools" accentClass="text-tool" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BUView;
