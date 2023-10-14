import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const FunctionDefinition = DefineFunction({
  callback_id: "function",
  title: "function",
  description: "function",
  source_file: "functions/function.ts",
  input_parameters: {
    properties: {
      channelId: { type: Schema.types.string },
    },
    required: ["channelId"],
  },
  output_parameters: {
    properties: {
      message: {
        type: Schema.types.string,
        description: "Message to be posted",
      },
    },
    required: ["message"],
  },
});

export default SlackFunction(
  FunctionDefinition,
    async () => {
    const response = await fetch("https://db.ygoprodeck.com/api/v7/randomcard.php");
    const jsonData: { card_images: [{ image_url: string }] } = await response.json();
    // const cardName = jsonData.name;
    const imageUrl = jsonData.card_images[0].image_url;

    return { outputs: { "message": imageUrl } };
  },
);
