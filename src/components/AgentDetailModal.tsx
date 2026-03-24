import { AgentTool } from "@/types/catalog";
import { Bot, Wrench, X, User, FileInput, FileOutput, Lightbulb, Tag, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AgentDetailModalProps {
  agent: AgentTool;
  onClose: () => void;
}

const AgentDetailModal = ({ agent, onClose }: AgentDetailModalProps) => {
  const isAgent = agent.type === "agent";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-card p-8 shadow-xl animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-center gap-4">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-xl",
              isAgent ? "bg-accent/10" : "bg-tool/10"
            )}
          >
            {isAgent ? (
              <Bot className="h-7 w-7 text-accent" />
            ) : (
              <Wrench className="h-7 w-7 text-tool" />
            )}
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {agent.name}
            </h2>
            <div className="mt-1 flex items-center gap-2">
              <Badge variant="secondary" className={isAgent ? "bg-accent/10 text-accent" : "bg-tool/10 text-tool"}>
                {agent.type}
              </Badge>
              <Badge variant="outline">{agent.lifecycleStage}</Badge>
              <Badge variant="outline">{agent.businessUnit}</Badge>
            </div>
          </div>
        </div>

        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          {agent.description}
        </p>

        <div className="space-y-6">
          <DetailSection icon={FileInput} title="Input" content={agent.inputDetails} />
          <DetailSection icon={FileOutput} title="Output" content={agent.outputDetails} />
          <DetailSection icon={Lightbulb} title="Example" content={agent.example} isCode />
          
          <div className="flex items-start gap-3">
            <Tag className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h4 className="mb-2 font-heading text-sm font-semibold text-foreground">Use Cases</h4>
              <div className="flex flex-wrap gap-2">
                {agent.useCases.map((uc) => (
                  <Badge key={uc} variant="secondary">{uc}</Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Activity className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h4 className="mb-2 font-heading text-sm font-semibold text-foreground">Lifecycle Stage</h4>
              <p className="text-sm text-muted-foreground">{agent.lifecycleStage}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <User className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <div>
              <h4 className="mb-2 font-heading text-sm font-semibold text-foreground">Point of Contact</h4>
              <p className="text-sm text-muted-foreground">{agent.pointOfContact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailSection = ({
  icon: Icon,
  title,
  content,
  isCode,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  isCode?: boolean;
}) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
    <div className="min-w-0 flex-1">
      <h4 className="mb-2 font-heading text-sm font-semibold text-foreground">{title}</h4>
      {isCode ? (
        <pre className="whitespace-pre-wrap rounded-lg bg-muted p-4 text-sm text-muted-foreground">
          {content}
        </pre>
      ) : (
        <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
      )}
    </div>
  </div>
);

export default AgentDetailModal;
