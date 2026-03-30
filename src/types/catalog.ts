export type AgentType = "agent" | "tool";

export type LifecycleStage =
  | "Ideation"
  | "POC"
  | "Development"
  | "Plan"
  | "Pilot"
  | "Production"
  | "Production - Continued Enhancements"
  | "Retired";

export type BusinessUnit = "Deployment" | "Support" | "E-Support";

export interface AgentTool {
  id: string;
  name: string;
  description: string;
  type: AgentType;
  businessUnit: BusinessUnit;
  lifecycleStage: LifecycleStage;
  pointOfContact: string;
  inputDetails: string;
  outputDetails: string;
  example: string;
  useCases: string[];
  tags: string[];
}

export interface BUInfo {
  id: BusinessUnit;
  title: string;
  subtitle: string;
  description: string;
  heroDescription: string;
  stats: { label: string; value: string }[];
}
