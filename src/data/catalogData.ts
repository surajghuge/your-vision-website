import { AgentTool, BUInfo } from "@/types/catalog";

export const businessUnits: BUInfo[] = [
  {
    id: "Deployment",
    title: "Deployment Services",
    subtitle: "Accelerating deployments with intelligent automation",
    description:
      "Deployment Services leverages agentic AI to streamline and automate complex deployment workflows. From infrastructure provisioning to configuration management, our agents reduce manual effort and accelerate time-to-value for customers.",
    heroDescription:
      "Discover how AI-powered agents are transforming deployment operations across the enterprise.",
    stats: [
      { label: "Active Agents", value: "12" },
      { label: "Tools", value: "8" },
      { label: "Avg. Time Saved", value: "65%" },
      { label: "Deployments Assisted", value: "2.4K" },
    ],
  },
  {
    id: "Support",
    title: "Support Services",
    subtitle: "Enhancing customer support with AI-driven intelligence",
    description:
      "Support Services is building AI agents to enhance case resolution, automate diagnostics, and provide proactive support recommendations. Our tools integrate with existing support workflows to deliver faster, more accurate outcomes.",
    heroDescription:
      "Explore AI agents designed to revolutionize the customer support experience.",
    stats: [
      { label: "Active Agents", value: "8" },
      { label: "Tools", value: "5" },
      { label: "Resolution Improvement", value: "40%" },
      { label: "Cases Processed", value: "15K" },
    ],
  },
  {
    id: "E-Support",
    title: "E-Support Services",
    subtitle: "Digital-first support powered by AI",
    description:
      "E-Support is pioneering digital-first customer experiences through AI chatbots, automated troubleshooting agents, and intelligent routing systems that connect customers to the right resources faster.",
    heroDescription:
      "See how AI is enabling seamless digital support experiences at scale.",
    stats: [
      { label: "Active Agents", value: "6" },
      { label: "Tools", value: "4" },
      { label: "Self-Service Rate", value: "72%" },
      { label: "Interactions/Month", value: "50K" },
    ],
  },
];

export const agentsAndTools: AgentTool[] = [
  {
    id: "dep-config-agent",
    name: "Config Validator Agent",
    description:
      "Validates deployment configurations against best practices and organizational standards before execution. Catches misconfigurations early to prevent deployment failures.",
    type: "agent",
    businessUnit: "Deployment",
    lifecycleStage: "Production",
    pointOfContact: "Sarah Chen",
    inputDetails:
      "JSON or YAML configuration file, target environment details, compliance policy set identifier.",
    outputDetails:
      "Validation report with pass/fail status, list of issues categorized by severity (critical, warning, info), and recommended fixes.",
    example:
      'Input: server-config.yaml with 48 parameters\nOutput: "3 critical issues found: port conflict on 8443, missing TLS cert path, deprecated OS image. 2 warnings: non-standard naming convention, oversized instance type."',
    useCases: [
      "Pre-deployment validation",
      "Configuration drift detection",
      "Compliance checking",
    ],
    tags: ["validation", "compliance", "configuration"],
  },
  {
    id: "dep-provision-agent",
    name: "Infrastructure Provisioner",
    description:
      "Automates end-to-end infrastructure provisioning across multi-cloud environments. Handles resource allocation, networking setup, and security group configuration.",
    type: "agent",
    businessUnit: "Deployment",
    lifecycleStage: "Production",
    pointOfContact: "Mike Torres",
    inputDetails:
      "Infrastructure specification document, target cloud provider, environment tier (dev/staging/prod), budget constraints.",
    outputDetails:
      "Provisioned infrastructure details, resource IDs, access endpoints, cost estimation, and deployment manifest.",
    example:
      'Input: "Provision 3-tier web app infrastructure on Azure, production tier, budget $2K/month"\nOutput: Provisioned 2x App Service instances, 1x SQL Database, 1x Redis Cache, VNet with 3 subnets, NSGs configured.',
    useCases: [
      "Cloud infrastructure setup",
      "Environment replication",
      "Disaster recovery provisioning",
    ],
    tags: ["infrastructure", "cloud", "provisioning"],
  },
  {
    id: "dep-migration-tool",
    name: "Migration Readiness Analyzer",
    description:
      "Analyzes existing workloads and provides detailed migration readiness assessments, including effort estimates, risk factors, and recommended migration strategies.",
    type: "tool",
    businessUnit: "Deployment",
    lifecycleStage: "Pilot",
    pointOfContact: "Lisa Park",
    inputDetails:
      "Source environment inventory, application dependency map, performance baseline metrics.",
    outputDetails:
      "Migration readiness score (0-100), risk matrix, effort estimation in person-days, recommended migration wave plan.",
    example:
      'Input: 45 VMs across 3 data centers with dependency data\nOutput: "Overall readiness: 78/100. 32 VMs ready for lift-and-shift, 8 require re-platforming, 5 need re-architecture. Estimated effort: 120 person-days across 4 waves."',
    useCases: [
      "Cloud migration planning",
      "Workload assessment",
      "TCO analysis",
    ],
    tags: ["migration", "assessment", "planning"],
  },
  {
    id: "sup-diag-agent",
    name: "Diagnostic Intelligence Agent",
    description:
      "Analyzes support case data, system logs, and error patterns to automatically diagnose issues and recommend resolution paths. Learns from historical case resolutions.",
    type: "agent",
    businessUnit: "Support",
    lifecycleStage: "Production",
    pointOfContact: "James Wilson",
    inputDetails:
      "Case description, system logs, error codes, product model and firmware version, customer environment details.",
    outputDetails:
      "Ranked list of probable root causes with confidence scores, recommended resolution steps, links to relevant KB articles, and escalation recommendation if needed.",
    example:
      'Input: "Server intermittently losing network connectivity, error code 0x800704CF"\nOutput: "95% confidence: NIC firmware incompatibility with latest OS update. Resolution: Apply firmware patch v2.3.1. Alternative: Roll back OS update KB5034441."',
    useCases: [
      "Automated case diagnosis",
      "Root cause analysis",
      "Knowledge base enrichment",
    ],
    tags: ["diagnostics", "support", "AI"],
  },
  {
    id: "sup-routing-agent",
    name: "Intelligent Case Router",
    description:
      "Uses NLP and historical case data to intelligently route incoming support cases to the most appropriate team and engineer based on expertise, workload, and case complexity.",
    type: "agent",
    businessUnit: "Support",
    lifecycleStage: "Development",
    pointOfContact: "Anna Martinez",
    inputDetails:
      "Case description, severity level, product category, customer tier, SLA requirements.",
    outputDetails:
      "Recommended team assignment, specific engineer suggestion with match score, estimated resolution time, priority classification.",
    example:
      'Input: P1 case for PowerEdge storage performance degradation, Enterprise customer\nOutput: "Route to Storage Performance Team → Engineer: David K. (92% match, 3 similar cases resolved). Est. resolution: 4 hours. Priority: Critical."',
    useCases: [
      "Case routing optimization",
      "Workload balancing",
      "SLA compliance",
    ],
    tags: ["routing", "NLP", "optimization"],
  },
  {
    id: "sup-sentiment-tool",
    name: "Customer Sentiment Analyzer",
    description:
      "Analyzes customer communications across channels to detect sentiment trends, frustration indicators, and escalation risks in real-time.",
    type: "tool",
    businessUnit: "Support",
    lifecycleStage: "POC",
    pointOfContact: "Rachel Kim",
    inputDetails:
      "Customer communication text (email, chat transcript, case notes), interaction history, case timeline.",
    outputDetails:
      "Sentiment score (-1 to 1), emotion classification, frustration level indicator, churn risk assessment, recommended intervention actions.",
    example:
      'Input: Last 5 email exchanges on case #SR-78234\nOutput: "Sentiment: -0.7 (Negative). Frustration: High (escalating). Churn risk: Elevated. Recommend: Manager callback within 2 hours, offer service credit."',
    useCases: [
      "Customer experience monitoring",
      "Proactive escalation",
      "Churn prevention",
    ],
    tags: ["sentiment", "NLP", "customer experience"],
  },
  {
    id: "esup-chatbot-agent",
    name: "Smart Troubleshoot Bot",
    description:
      "AI-powered chatbot that guides customers through interactive troubleshooting workflows, collecting diagnostic data and attempting automated fixes before escalating to human agents.",
    type: "agent",
    businessUnit: "E-Support",
    lifecycleStage: "Production",
    pointOfContact: "Kevin Zhang",
    inputDetails:
      "Customer query in natural language, product serial number (optional), previous interaction context.",
    outputDetails:
      "Guided troubleshooting steps, diagnostic data collection prompts, automated fix attempts, resolution confirmation or escalation to human agent with full context.",
    example:
      'Customer: "My laptop won\'t connect to WiFi"\nBot: Ran 4-step diagnostic → Identified driver conflict → Applied auto-fix → WiFi restored. Resolution time: 3 minutes, no human agent needed.',
    useCases: [
      "Self-service troubleshooting",
      "First-contact resolution",
      "After-hours support",
    ],
    tags: ["chatbot", "self-service", "troubleshooting"],
  },
  {
    id: "esup-kb-tool",
    name: "Knowledge Base Search Enhancer",
    description:
      "Semantic search tool that enhances knowledge base discovery by understanding intent behind queries rather than relying on keyword matching. Surfaces the most relevant articles and solutions.",
    type: "tool",
    businessUnit: "E-Support",
    lifecycleStage: "Development",
    pointOfContact: "Priya Sharma",
    inputDetails:
      "Search query in natural language, product context, user role (customer/agent), previous search history.",
    outputDetails:
      "Ranked list of relevant KB articles with relevance scores, key excerpt highlights, related articles, and gap analysis if no good match exists.",
    example:
      'Input: "server keeps restarting after BIOS update"\nOutput: Top 3 results (98%, 94%, 87% relevance) with highlighted fix steps. Gap alert: No article covers BIOS v2.7 specific issue → flagged for content team.',
    useCases: [
      "Knowledge discovery",
      "Content gap analysis",
      "Agent assistance",
    ],
    tags: ["search", "knowledge base", "semantic"],
  },
  {
    id: "dep-health-tool",
    name: "Deployment Health Monitor",
    description:
      "Continuously monitors deployment health metrics and provides real-time status dashboards with anomaly detection and automated alerting.",
    type: "tool",
    businessUnit: "Deployment",
    lifecycleStage: "Production",
    pointOfContact: "Tom Bradley",
    inputDetails:
      "Deployment ID, monitoring configuration, alerting thresholds, notification channels.",
    outputDetails:
      "Real-time health dashboard, anomaly alerts, trend analysis, SLA compliance metrics, and recommended remediation actions.",
    example:
      'Input: Monitor deployment DEP-2024-0847\nOutput: "Health: 98.5%. Anomaly detected: Memory usage trending upward (+15% over 2 hours). Alert triggered. Recommendation: Scale horizontally or investigate memory leak in service-auth."',
    useCases: [
      "Post-deployment monitoring",
      "SLA tracking",
      "Proactive incident prevention",
    ],
    tags: ["monitoring", "health", "alerting"],
  },
  {
    id: "sup-kb-agent",
    name: "Case Resolution Recommender",
    description:
      "Analyzes incoming cases against historical resolution data to recommend the most effective resolution strategies, reducing mean time to resolution.",
    type: "agent",
    businessUnit: "Support",
    lifecycleStage: "Pilot",
    pointOfContact: "David Okafor",
    inputDetails:
      "Case details, product information, error symptoms, customer environment configuration.",
    outputDetails:
      "Top 5 recommended resolutions with success probability, step-by-step instructions, estimated resolution time, and links to supporting documentation.",
    example:
      'Input: "PowerEdge R750 RAID controller showing degraded status after firmware update"\nOutput: "Resolution 1 (89% success): Reset RAID controller via iDRAC → Steps provided. Resolution 2 (76%): Rollback firmware to v4.2.1 → Steps provided."',
    useCases: [
      "Case resolution acceleration",
      "Knowledge capture",
      "New agent training",
    ],
    tags: ["resolution", "recommendation", "knowledge"],
  },
];
