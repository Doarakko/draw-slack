import { Manifest } from "deno-slack-sdk/mod.ts";
import Workflow from "./workflows/workflow.ts";

export default Manifest({
  name: "draw",
  description: "Draw Yu-Gi-Oh! Card on Slack",
  icon: "assets/icon.png",
  workflows: [Workflow],
  outgoingDomains: ["db.ygoprodeck.com"],
  botScopes: [
    "app_mentions:read",
    "chat:write",
    "chat:write.public",
  ],
});
