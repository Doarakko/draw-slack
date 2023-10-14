import { Trigger } from "deno-slack-sdk/types.ts";
import { TriggerContextData, TriggerTypes, TriggerEventTypes } from "deno-slack-api/mod.ts";
import Workflow from "../workflows/workflow.ts";

const trigger: Trigger<typeof Workflow.definition> = {
  type: TriggerTypes.Event,
  name: "trigger",
  description: "trigger",
  workflow: `#/workflows/${Workflow.definition.callback_id}`,
  event: {
    event_type: TriggerEventTypes.AppMentioned,
    channel_ids: ["C059CTRJNVD"],
  },
  inputs: {
    channel: {
      value: TriggerContextData.Event.AppMentioned.channel_id,
    },
  },
};

export default trigger;
