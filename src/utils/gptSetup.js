import OpenAI from "openai";
import { GPT_KEY } from "./constants";

export const client = new OpenAI({
  apiKey: GPT_KEY, // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});
