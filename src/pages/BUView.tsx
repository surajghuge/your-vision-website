import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessUnits, agentsAndTools } from "@/data/catalogData";

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

          {/* Agent/Tool breakdown */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="font-heading text-3xl font-bold text-accent">
                {agents.length}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                AI Agents
              </div>
              <ul className="mt-4 space-y-2">
                {agents.map((a) => (
                  <li
                    key={a.id}
                    className="text-sm text-muted-foreground"
                  >
                    • {a.name}{" "}
                    <span className="text-xs text-muted-foreground/60">
                      ({a.lifecycleStage})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="font-heading text-3xl font-bold text-tool">
                {tools.length}
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                Tools
              </div>
              <ul className="mt-4 space-y-2">
                {tools.map((t) => (
                  <li
                    key={t.id}
                    className="text-sm text-muted-foreground"
                  >
                    • {t.name}{" "}
                    <span className="text-xs text-muted-foreground/60">
                      ({t.lifecycleStage})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BUView;
