import { Link } from "react-router-dom";
import { Bot, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { agentsAndTools, businessUnits } from "@/data/catalogData";

const Landing = () => {
  const totalAgents = agentsAndTools.filter((a) => a.type === "agent").length;
  const totalTools = agentsAndTools.filter((a) => a.type === "tool").length;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden px-6 py-24 text-primary-foreground lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(217_100%_58%/0.15),transparent_50%)]" />
        <div className="container relative mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm text-accent-foreground">
            <Sparkles className="h-4 w-4" />
            Centralized Agent & Tool Registry
          </div>
          <h1 className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-6xl">
            Welcome to the Services
            <br />
            <span className="bg-gradient-to-r from-accent-foreground to-accent-foreground/70 bg-clip-text">
              Agentic Store
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            Discover, explore, and leverage AI agents and tools built across
            Services. A governed, centralized registry to prevent duplication,
            encourage reuse, and enforce interoperability standards.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gradient-accent border-0 text-accent-foreground font-semibold px-8 hover:opacity-90">
              <Link to="/catalog">
                Browse Catalog
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card px-6 py-12">
        <div className="container mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: totalAgents.toString(), label: "AI Agents" },
            { value: totalTools.toString(), label: "Tools" },
            { value: businessUnits.length.toString(), label: "Business Units" },
            { value: "100%", label: "Governed" },
          ].map((stat) => (
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

      {/* Features */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">
            Why the Agentic Store?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Bot,
                title: "Centralized Visibility",
                description:
                  "Single source of truth for all agents and tools across Deployment, Support, and E-Support services.",
              },
              {
                icon: Shield,
                title: "Governed & Compliant",
                description:
                  "Enforce interoperability standards and track lifecycle stages from ideation to production.",
              },
              {
                icon: Zap,
                title: "Prevent Duplication",
                description:
                  "Discover existing solutions before building new ones. Encourage reuse across business units.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-card-hover"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BU Cards */}
      <section className="border-t border-border bg-muted/30 px-6 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold text-foreground">
            Explore by Business Unit
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {businessUnits.map((bu) => (
              <Link
                key={bu.id}
                to={`/bu/${bu.id.toLowerCase()}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
              >
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {bu.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {bu.subtitle}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-accent">
                  Explore
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
